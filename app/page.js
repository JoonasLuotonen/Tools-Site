"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      {/* MIDSECTION (copy + layout per PDF) */}
      <section className="section">
        <div className="container-narrow text-center">
          <p className="uppercase text-xs tracking-widest text-black/60 mb-6">
            TEST HOW CLEAR YOUR WEBSITE REALLY IS
          </p>

          <h1>
            The Clarity Test helps designers, founders, and marketers see their
            website through fresh eyes.
          </h1>

          <p>
            It quickly scores your page across five axes – <strong>Message
            Clarity</strong>, <strong>Visual Hierarchy</strong>,{" "}
            <strong>Consistency</strong>, <strong>Conversion Focus</strong>, and{" "}
            <strong>Brand Tone</strong> – revealing what feels clear and what
            doesn’t.
          </p>

          <p>
            You’ll get instant, FREE, AI-assisted insights based on proven UX
            and communication frameworks.
          </p>

          <div className="mt-8">
            <Link href="/clarity-test" className="btn btn-primary rounded-full">
              Go to Clarity Test
            </Link>
          </div>
        </div>
      </section>

      {/* BREVO SECTION (neutral tone, centered placeholder) */}
      <section className="py-16 md:py-20 bg-[#f5f7f9]">
        <div className="container-narrow">
          <div className="card mx-auto max-w-[720px] p-6 md:p-10 text-center">
            {/* —— If you already created /public/newsletter.html, uncomment the iframe and remove the placeholder div —— */}
            {/*
            <iframe
              src="/newsletter.html"
              title="Newsletter signup"
              className="w-full h-[720px] border-none rounded-xl"
            />
            */}

            {/* Placeholder (matches your PDF “Brevo form place holder”) */}
            <div className="border border-dashed border-black/20 rounded-xl py-16">
              <p className="text-black/60">Brevo form place holder</p>
              <p className="text-sm mt-2 text-black/50">
                Paste your Brevo embed here or load it via{" "}
                <code>/newsletter.html</code>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
