// app/api/analyze/route.js
import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";       // ensure Node runtime for OpenAI SDK
export const dynamic = "force-dynamic"; // avoid caching of POST results


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// --- small helpers: safe text extraction and chunking ---
async function fetchPageText(targetUrl) {
  const res = await fetch(targetUrl, { redirect: "follow" });
  const html = await res.text();

  // ultra-simple extraction to keep current behavior stable
  // (you can keep your existing parser if you already have one)
  const textOnly = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return textOnly.slice(0, 120000); // keep tokens in check
}

export async function POST(req) {
  try {
    const { url } = await req.json();
    if (!url) {
      return NextResponse.json({ error: "Missing URL" }, { status: 400 });
    }

    const pageText = await fetchPageText(url);

    // ---- PROMPT: adds CLARITY PROFILE ANALYSIS block (no numbers) ----
    const system = `
You are Clarity Test, a practical website review assistant.
Return clear, concise, *actionable* feedback in plain language.
Do NOT include numeric scores or percentages. Avoid repeating the same generic tip across all sections.
Respect variation: not every section needs bullets or a CTA.
First, evaluate the page as a whole. Then give section-specific improvements.
Output strictly in the JSON schema specified below.
`;

    const user = `
Review the page content below.
1) Produce a page-level "CLARITY PROFILE ANALYSIS" consisting of:
   - overview: 2–3 sentences describing what the page feels like overall (strengths + main impediment to clarity).
   - axes: five themes with Q&A-style mini-analyses:
       * message: { question, analysis }           // main message clarity
       * visualHierarchy: { question, analysis }    // eye flow & focus
       * consistency: { question, analysis }        // labels, styles, nav
       * conversion: { question, analysis }         // natural next step
       * brandTone: { question, analysis }          // voice fit & clarity
   Use qualitative wording only ("clear", "unclear", "cohesive", "competes", "inviting", etc.).

2) Then produce "sectionImprovements": a list of sections in reading order, with:
   - title (short descriptive label; if unknown, infer one like "Hero" / "Product details" / "Footer")
   - tips: an array of 1–3 *specific* improvements tailored to that section.
     Avoid repeating the same generic tip for multiple sections unless it truly applies.

3) Consider rhythm and variation across sections. If a repeated pattern dulls impact,
   prefer suggestions that *reduce repetition* instead of adding more identical structure.

Return JSON only, matching this schema exactly:

{
  "profileAnalysis": {
    "overview": "string, 2–3 sentences",
    "axes": {
      "message": { "question": "Is your main message easy to spot and instantly understood?", "analysis": "string, 1–2 sentences" },
      "visualHierarchy": { "question": "Does the layout guide the eye clearly to one main action or idea?", "analysis": "string, 1–2 sentences" },
      "consistency": { "question": "Are labels, styles, and navigation used the same way across pages?", "analysis": "string, 1–2 sentences" },
      "conversion": { "question": "Does the page lead visitors naturally toward one clear next step?", "analysis": "string, 1–2 sentences" },
      "brandTone": { "question": "Does the writing sound natural, confident, and true to your brand voice?", "analysis": "string, 1–2 sentences" }
    }
  },
  "sections": [
    { "title": "string", "tips": ["string", "string"] }
  ]
}

PAGE_URL: ${url}

PAGE_TEXT (truncated):
${pageText}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_object" },
    });

    const raw = completion.choices?.[0]?.message?.content || "{}";
    const parsed = JSON.parse(raw);

    // Backward compatibility:
    // - old UI expects "sections". We keep that key the same.
    // - new "profileAnalysis" is additive (safe to render or ignore).
    return NextResponse.json(
      {
        analyzedUrl: url,
        profileAnalysis: parsed.profileAnalysis || null,
        sections: parsed.sections || [],
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Analyze API error:", err);
    return NextResponse.json(
      { error: "Analysis failed", detail: String(err?.message || err) },
      { status: 500 }
    );
  }
}
