"use client";

import Link from "next/link";
import BrevoForm from "../components/BrevoForm";

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="pt-16 md:pt-20 pb-10">
        <div className="container-narrow text-center">
          <h1 className="mt-0 mb-4 md:mb-5">
            Test how clear your website really is
          </h1>

          <p className="text-black/70 mt-0">
            The Clarity Test helps designers, founders, and marketers see their
            website through fresh eyes.
          </p>

          <p className="text-black/70">
            It quickly evaluates your page across five axes –{" "}
            <strong>Message Clarity</strong>, <strong>Visual Hierarchy</strong>,{" "}
            <strong>Consistency</strong>, <strong>Conversion Focus</strong>, and{" "}
            <strong>Brand Tone</strong> – revealing what feels clear and what
            doesn’t.
          </p>

          <p className="text-black/70">
            You’ll get instant, FREE, AI-assisted insights based on proven UX
            and communication frameworks.
          </p>

          <div className="mt-8">
            <Link href="/clarity" className="btn btn-primary btn-pill">
              Go to Clarity Test
            </Link>
          </div>
        </div>
      </section>

      {/* BREVO SECTION */}
      <section className="py-16 md:py-20 bg-[#f5f7f9]">
        <div className="container-narrow">
          <div className="card mx-auto max-w-[720px] p-6 md:p-10 text-center">
            {/* Remove placeholder box */}
            <BrevoForm />
          </div>
        </div>
      </section>
    </main>
  );
}
