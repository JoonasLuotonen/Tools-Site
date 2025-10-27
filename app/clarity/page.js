"use client";

import { useState } from "react";
import AccordionItem from "../components/AccordionItem.jsx";

export default function ClarityPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  async function run(ev) {
    ev.preventDefault();
    setErr("");
    setData(null);
    setLoading(true);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({ url })
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Unknown error");
      setData(json);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 uppercase">Clarity Test</h1>

      <form onSubmit={run} className="flex gap-3 mb-6">
        <input
          type="url"
          required
          placeholder="https://example.com"
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="flex-1 border border-black/20 rounded-lg px-4 py-3"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-pill bg-black text-white"
        >
          {loading ? "Analyzing…" : "Run"}
        </button>
      </form>

      {err && (
        <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4 text-red-800">
          {err}
        </div>
      )}

      {data && (
        <section className="space-y-6">
          <div className="text-sm text-black/70">
            <div>Analyzed: <span className="font-medium">{data.sourceUrl}</span></div>
            <div>Sections found: {data.meta.sectionCount}</div>
          </div>

          <div className="rounded-lg border border-black/10 p-4">
            <h2 className="text-xl font-semibold mb-2">Overall Findings</h2>
            <ul className="list-disc pl-5 space-y-1">
              {data.overallFindings.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>

          <div className="rounded-lg border border-black/10">
            <div className="p-4 border-b border-black/10">
              <h2 className="text-xl font-semibold">Section Improvements</h2>
              <p className="text-sm text-black/60">Click + to open details</p>
            </div>

            <div className="divide-y divide-black/10">
              {data.sections.map(sec => {
                const imp = data.improvements.find(i => i.sectionId === sec.id);
                return (
                  <AccordionItem key={sec.id} title={sec.title || "Untitled section"}>
                    {imp?.ideas?.length ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {imp.ideas.map((idea, i) => <li key={i}>{idea}</li>)}
                      </ul>
                    ) : (
                      <p>No suggestions for this section.</p>
                    )}
                  </AccordionItem>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
