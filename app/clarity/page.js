// app/clarity/page.js
"use client";

import { useState } from "react";
import ClarityProfileAnalysis from "../components/ClarityProfileAnalysis";

export default function ClarityPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function runTest(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Analysis failed");
      setResult(data);
    } catch (err) {
      setError(err.message || "Analysis failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight uppercase">
        Clarity Test
      </h1>
      <p className="mt-3 text-black/80">
        Human-readable feedback on message, hierarchy, consistency, conversion,
        and brand tone — no scores, just clarity.
      </p>

      <form onSubmit={runTest} className="mt-6 flex gap-3">
        <input
          type="url"
          placeholder="https://example.com"
          className="w-full border border-black/20 rounded-xl px-4 py-3"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button
          className="btn-pill border border-black bg-black text-white rounded-full px-6 py-3"
          disabled={loading}
        >
          {loading ? "Analyzing…" : "Run"}
        </button>
      </form>

      {error && (
        <div className="mt-5 rounded-xl border border-red-300 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {result && (
        <>
          {/* NEW: Page-level synthesis block */}
          <ClarityProfileAnalysis data={result.profileAnalysis} />

          {/* Existing/standard: Section Improvements */}
          <section className="mt-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
              Section Improvements
            </h2>
            <div className="mt-4 grid gap-4">
              {result.sections?.map((sec, i) => (
                <div
                  key={`${sec.title}-${i}`}
                  className="rounded-2xl border border-black/10 p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      {sec.title || `Section ${i + 1}`}
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc pl-6 space-y-1">
                    {Array.isArray(sec.tips) && sec.tips.length > 0 ? (
                      sec.tips.map((t, idx) => <li key={idx}>{t}</li>)
                    ) : (
                      <li>No suggestions for this section.</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
