
'use client';
import { useState } from 'react';

export const metadata = { title: "Clarity Test" };

export default function ClarityPage() {
  const [url, setUrl] = useState("");
  const [showResults, setShowResults] = useState(false);

  function handleRun(e) {
    e.preventDefault();
    setShowResults(true);
  }

  return (
    <section className="section">
      <div className="container-narrow">
        <h1 className="mt-0">Clarity Test</h1>
        <p>
          Practical web page design analysis on five axes with Quick Wins. Get your clarity profile and suggestions what to fix exactly.
        </p>

        {/* Form */}
        <form onSubmit={handleRun} className="mt-6 card p-5 md:p-6">
          <label htmlFor="url">URL to analyze</label>
          <input
            id="url"
            className="input mt-2"
            placeholder="https://www.example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <div className="mt-4 flex gap-3">
            <button type="submit" className="btn btn-primary">Run Test</button>
            <a href="/" className="btn btn-ghost">Home</a>
          </div>
        </form>

        {/* Results (static placeholder to show spacing/typography) */}
        {showResults && (
          <div className="mt-10">
            <h2 className="mt-0">Clarity Profile</h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {['Message','Visual hierarchy','Consistency','Conversion','Brand tone'].map((k,i)=>(
                <div key={k} className="card p-4 text-center">
                  <div className="text-sm text-black/60">{k}</div>
                  <div className="score mt-2">{[60,80,40,20,70][i]}</div>
                </div>
              ))}
            </div>

            <h2>Analysis</h2>
            <div className="grid-cards mt-4">
              <div className="card p-5">
                <h3 className="mt-0">Message</h3>
                <p>Top-line message exists. Lead the first screen with the outcome and one proof point.</p>
              </div>
              <div className="card p-5">
                <h3 className="mt-0">Visual Hierarchy</h3>
                <p>Keep one main focal area (headline + CTA) above the fold; reduce competing elements.</p>
              </div>
              <div className="card p-5">
                <h3 className="mt-0">Consistency</h3>
                <p>Reuse 1–2 primary CTA labels site‑wide to reduce cognitive load.</p>
              </div>
              <div className="card p-5">
                <h3 className="mt-0">Conversion</h3>
                <p>Place one strong CTA high, then repeat after proof.</p>
              </div>
              <div className="card p-5">
                <h3 className="mt-0">Brand Tone</h3>
                <p>Prefer short sentences, concrete verbs; remove filler.</p>
              </div>
            </div>

            <h2 className="mt-10">Section Improvements</h2>
            <div className="grid-cards mt-4">
              {Array.from({length:6}).map((_,i)=>(
                <div key={i} className="card p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="mt-0">Section {i+1}. {i===0? '–':'+'}</h3>
                  </div>
                  {i===0 ? (
                    <>
                      <p><strong>Add a clear CTA —</strong> Users need an obvious next step.</p>
                      <p className="mt-2 text-sm text-black/70">Add one primary CTA (e.g., “Pyydä tarjous”) at the end of the section.</p>
                      <p className="mt-4"><strong>Introduce a heading —</strong> Headings anchor scanning and hierarchy.</p>
                      <p className="mt-2 text-sm text-black/70">Add a short, descriptive H2 naming the section’s purpose.</p>
                    </>
                  ) : (
                    <p className="text-black/70">Looks solid.</p>
                  )}
                </div>
              ))}
            </div>

            <h2 className="mt-10">Quick Wins</h2>
            <ul className="list-disc pl-6">
              <li>Make the outcome explicit in the headline (≤ 80 chars).</li>
              <li>Use one clear H1.</li>
              <li>Fix meta description (120–160 chars with outcome + proof).</li>
              <li>Standardize CTA labels.</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
