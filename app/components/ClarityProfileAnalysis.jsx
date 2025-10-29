"use client";

export default function ClarityProfileAnalysis({ data }) {
  if (!data) return null;

  const axes = data.axes || {};
  const rows = [
    { key: "message", title: "Message",          question: axes.message?.question,          analysis: axes.message?.analysis },
    { key: "visualHierarchy", title: "Visual Hierarchy", question: axes.visualHierarchy?.question, analysis: axes.visualHierarchy?.analysis },
    { key: "consistency", title: "Consistency",   question: axes.consistency?.question,      analysis: axes.consistency?.analysis },
    { key: "conversion", title: "Conversion",     question: axes.conversion?.question,       analysis: axes.conversion?.analysis },
    { key: "brandTone", title: "Brand Tone",      question: axes.brandTone?.question,        analysis: axes.brandTone?.analysis },
  ];

  return (
    <section className="mt-8 mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
        CLARITY PROFILE ANALYSIS
      </h2>
      {data.overview && (
        <p className="mt-3 text-base leading-relaxed">{data.overview}</p>
      )}
      <div className="mt-6 grid gap-5">
        {rows.map((r) => (
          <div key={r.key} className="rounded-2xl border border-black/10 p-5">
            <h3 className="text-lg font-semibold">{r.title}</h3>
            {r.question && (
              <p className="mt-1 text-sm uppercase tracking-wide text-black/60">
                {r.question}
              </p>
            )}
            {r.analysis && (
              <p className="mt-2 text-base leading-relaxed">{r.analysis}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
