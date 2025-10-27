import { NextResponse } from "next/server";

function extractSections(html) {
  const noScripts = html.replace(/<script[\s\S]*?<\/script>/gi, "")
                        .replace(/<style[\s\S]*?<\/style>/gi, "");
  const headings = [...noScripts.matchAll(/<(h1|h2|h3)[^>]*>(.*?)<\/\1>/gi)]
    .map((m, i) => ({
      id: `sec-${i + 1}`,
      level: m[1].toLowerCase(),
      title: m[2].replace(/<[^>]+>/g, "").trim()
    }))
    .filter(s => s.title && s.title.length > 2);

  const sections = [];
  let current = null;
  for (const h of headings) {
    if (h.level === "h1" || h.level === "h2") {
      current && sections.push(current);
      current = { id: h.id, title: h.title, notes: [] };
    } else if (current) {
      current.notes.push(h.title);
    }
  }
  current && sections.push(current);

  if (sections.length === 0) {
    const titleMatch = noScripts.match(/<title[^>]*>(.*?)<\/title>/i);
    const t = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : "Page";
    sections.push({ id: "sec-1", title: t, notes: [] });
  }
  return sections.slice(0, 10);
}

function basicHeuristics(html) {
  const hasH1 = /<h1[\s>]/i.test(html);
  const hasCTA = /(get started|sign up|subscribe|start now|buy|order|try)/i.test(html);
  const hasJargon = /(synergy|leverage|cutting-edge|innovative solution)/i.test(html);

  const findings = [];
  if (!hasH1) findings.push("No clear H1 found on the page.");
  if (!hasCTA) findings.push("Primary CTA not detected near the top.");
  if (hasJargon) findings.push("Jargon detected — state the value in plain words.");
  if (findings.length === 0) findings.push("Baseline structure looks reasonable.");
  return findings;
}

// Shared worker for GET+POST
async function handleAnalyze(url) {
  if (!url || !/^https?:\/\//i.test(url)) {
    return NextResponse.json({ ok: false, error: "Invalid URL." }, { status: 400 });
  }

  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari"
    },
  });

  const fetchOk = res.ok;
  const html = fetchOk ? await res.text() : "";

  if (!fetchOk || !html || html.length < 500) {
    return NextResponse.json(
      { ok: false, error: `Fetch failed (${res.status}).`, debug: { url, status: res.status } },
      { status: 502 }
    );
  }

  const sections = extractSections(html);
  const overallFindings = basicHeuristics(html);

  const improvements = sections.map((s, idx) => {
    const ideas = [];
    if (idx === 0) {
      ideas.push("State your core value in one plain sentence at the top.");
      ideas.push("Add a single, visible primary CTA (verb-first).");
    } else if ((s.title || "").length < 20) {
      ideas.push("Make the section heading more descriptive and outcome-oriented.");
    } else if (s.notes.length === 0) {
      ideas.push("Add 2–3 bullets for scannability.");
    } else {
      ideas.push("Tighten copy to one message per subsection; remove duplicates.");
    }
    return { sectionId: s.id, title: s.title, ideas };
  });

  return NextResponse.json(
    {
      ok: true,
      sourceUrl: url,
      meta: { htmlLength: html.length, sectionCount: sections.length },
      sections,
      overallFindings,
      improvements,
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  return handleAnalyze(url);
}

export async function POST(req) {
  const { url } = await req.json();
  return handleAnalyze(url);
}

export const dynamic = "force-dynamic";     // don’t cache
export const runtime = "nodejs";            // ensure Node runtime (not edge)
