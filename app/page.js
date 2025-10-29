"use client";

import Link from "next/link";
import Image from "next/image";

// Vercel exposes the commit at build time.
// Seeing this on the page proves you’re on the newest deploy.
const COMMIT =
  process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "local-dev";

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="pt-16 md:pt-20 pb-10 text-center">
        <div className="container-narrow">
          <h1 className="mt-0 mb-4 md:mb-5">
            Test how clear your website really is
          </h1>
          <p className="text-black/70 max-w-[640px] mx-auto">
            The Clarity Test helps designers, founders, and marketers see their
            website through fresh eyes.
          </p>
          <div className="mt-8">
            <Link href="/clarity" className="btn btn-primary btn-pill">
              Go to Clarity Test
            </Link>
          </div>
        </div>
      </section>

      {/* SIMPLE NEWSLETTER SECTION (no Brevo) */}
      <section className="py-16 md:py-20 bg-[#f5f7f9] text-center">
        <div className="container-narrow">
          <div className="mx-auto max-w-[520px] p-6 md:p-10 rounded-2xl bg-white shadow-sm border border-black/10">
            <Image
              src="/newsletter-image.jpg" // put an image in /public
              width={500}
              height={300}
              alt="Newsletter"
              className="rounded-lg mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold mb-3">
              Subscribe my newsletter
            </h3>
            <p className="text-black/70 mb-6">
              Get my mix of design, ideas, and outdoors straight to your inbox.
              Sent once a month, max!
            </p>
            <Link href="https://679d9eaa.sibforms.com/serve/MUIFAK3VvvjaVwEp1qUFHb8gTIon8Gp3MFwEivdiKtC7VD_Pq6_or4l9R94AabQhC2OsYJ6KQoHXN8R-4fGeTMfeyu5wszgIOMfNkHxMOlY95xzVZJ7MpwntjXTlCdFl62eOyuIzKt0pm31HPl21uFp8QEVfO5e-FJTQADorXEpPmpCs0K6XACNiGLsAGK2YRxrIXZDCrh-eIK4vtQ==" className="inline-block btn btn-primary btn-pill">
              Join now
            </Link>
          </div>

          {/* Build marker */}
          <p className="mt-6 text-xs text-black/40">Build: {COMMIT}</p>
        </div>
      </section>
    </main>
  );
}
