// app/api/analyze/route.js
import { NextResponse } from "next/server";

// Helper: quick+dirty heading scrape without extra deps
function extractSections(html) {
  const noScripts = html.replace(/<script[\s\S]*?<\/script>/gi, "")
                        .replace(/<style[\s\S]*?<\/style>/gi, "");
  const headings = [...noScripts.matchAll(/<(h1|h2|h3)[^>]*>(.*?)<\/\1>/gi)]
    .map((m, i) => ({
      id: `sec-${i + 1}`,
      level: m[1].toLowerCase(),
      title: m[2].replace(/<[^>]+>/g, "").trim()
    }))
    // keep only distinct-ish, non-empty titles
    .filter(s => s.title && s.title.length > 2);

  // Group: start a new section on each h1/h2, attach following h3s
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

  // Fallback: at least one section derived from <title>
  if (sections.length === 0) {
    const titleMatch = noScripts.match(/<title[^>]*>(.*?)<\/title>/i);
    const t = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : "Page";
    sections.push({ id: "sec-1", title: t, notes: [] });
  }
  return sections.slice(0, 10); // safety cap
}

function basicHeuristics(html) {
  const hasH1 = /<h1[\s>]/i.test(html);
  const hasCTA = /(get started|sign up|subscribe|start now|buy|order|try)/i.test(html);
  const hasJargon = /(synergy|leverage|cutting-edge|innovative solution)/i.test(html);

  const findings = [];
  if (!hasH1) findings.push("No clear H1 found on the page.");
  if (!hasCTA) findings.push("Primary CTA not detected above the fold.");
  if (hasJargon) findings.push("Jargon detected — consider plainer language for key claims.");
  if (findings.length === 0) findings.push("Baseline structure looks reasonable.");

  return findings;
}

export async function POST(req) {
  try {
    const { url } = await req.json();
    if (!url || !/^https?:\/\//i.test(url)) {
      return NextResponse.json({ ok: false, error: "Invalid URL." }, { status: 400 });
    }

    const res = await fetch(url, {
      // Avoid Next caching
      cache: "no-store",
      // Pretend to be a real browser to dodge some bot blocks
      headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari" }
    });

    const fetchOk = res.ok;
    const html = fetchOk ? await res.text() : "";

    if (!fetchOk || !html || html.length < 500) {
      // Important: DO NOT return a pretty mock here — surface the failure.
      return NextResponse.json({
        ok: false,
        error: `Fetch failed (${res.status}).`,
        debug: { fetchOk, status: res.status, url }
      }, { status: 502 });
    }

    const sections = extractSections(html);
    const overallFindings = basicHeuristics(html);

    // Build improvements per section (simple demo logic, varies by content)
    const improvements = sections.map((s, idx) => {
      const ideas = [];
      if (idx === 0) {
        ideas.push("State your core value in one plain sentence at the top.");
        ideas.push("Add a single, visible primary CTA (verb-first).");
      } else if ((s.title || "").length < 20) {
        ideas.push("Make the section heading more descriptive and outcome-oriented.");
      } else if (s.notes.length === 0) {
        ideas.push("Consider adding brief supporting bullets for scannability.");
      } else {
        ideas.push("Tighten copy to one message per subsection; remove duplicates.");
      }
      return { sectionId: s.id, title: s.title, ideas };
    });

    return NextResponse.json({
      ok: true,
      sourceUrl: url,
      meta: { htmlLength: html.length, sectionCount: sections.length },
      sections,               // ← dynamic count based on page
      overallFindings,        // ← varies by page
      improvements            // ← per-section, not a fixed 6
    }, {
      headers: { "Cache-Control": "no-store" }
    });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";

