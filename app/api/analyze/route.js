// app/api/analyze/route.js
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import OpenAI from "openai";

// HTML → text helper
async function fetchPageText(targetUrl) {
  const res = await fetch(targetUrl, { redirect: "follow" });
  const html = await res.text();
  const textOnly = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return textOnly.slice(0, 120000);
}

export async function POST(req) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "Missing URL" }, { status: 400 });

    // 👇 lazy init so build doesn’t require a real key
    const apiKey = process.env.OPENAI_API_KEY || "";
    const openai = new OpenAI({ apiKey });

    const pageText = await fetchPageText(url);

    const system = `
You are Clarity Test, a practical website review assistant.
Return clear, concise, actionable feedback in plain language.
No numeric scores or percentages. Avoid repeating the same generic tip.
Respect variation: not every section needs bullets or a CTA.
First, evaluate the page as a whole. Then give section-specific improvements.
Output strictly in the JSON schema specified.
`;

    const user = `
Review the page content below.

1) Produce a page-level "CLARITY PROFILE ANALYSIS" with:
   - overview: 2–3 sentences describing what the page feels like overall (strengths + main impediment to clarity).
   - axes: five themes with Q&A-style mini-analyses:
       * message: { question, analysis }
       * visualHierarchy: { question, analysis }
       * consistency: { question, analysis }
       * conversion: { question, analysis }
       * brandTone: { question, analysis }
   Use qualitative wording only.

2) Then produce "sections": a list of sections in reading order with:
   - title (infer if missing, e.g. "Hero", "Product details", "Footer")
   - tips: 1–3 specific, tailored improvements. Don’t repeat generic tips unless they truly apply.

3) Consider rhythm/variation and prefer reducing repetition when helpful.

Return JSON ONLY in this exact shape:

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
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    });

    const raw = completion.choices?.[0]?.message?.content || "{}";
    const parsed = JSON.parse(raw);

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
