"use client";

import Link from "next/link";

// Minimal, script-free form that posts directly to Brevo.
// Renders reliably without external JS/CSS.
function NewsletterForm() {
  return (
    <form
      id="sib-form"
      method="POST"
      action="https://679d9eaa.sibforms.com/serve/MUIFAK3VvvjaVwEp1qUFHb8gTIon8Gp3MFwEivdiKtC7VD_Pq6_or4l9R94AabQhC2OsYJ6KQoHXN8R-4fGeTMfeyu5wszgIOMfNkHxMOlY95xzVZJ7MpwntjXTlCdFl62eOyuIzKt0pm31HPl21uFp8QEVfO5e-FJTQADorXEpPmpCs0K6XACNiGLsAGK2YRxrIXZDCrh-eIK4vtQ=="
      data-type="subscription"
      className="text-left"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">Subscribe my newsletter</h3>
          <p className="text-black/70 mt-1">
            Get my mix of design, ideas, and outdoors straight to your inbox.
            Sent once a month, max!
          </p>
        </div>

        <div>
          <label htmlFor="EMAIL" className="block text-sm font-medium mb-2">
            Enter your email address to subscribe
          </label>
          <input
            type="email"
            id="EMAIL"
            name="EMAIL"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full rounded-lg border border-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          <p className="text-xs text-black/50 mt-2">
            Provide your email address to subscribe. For example, abc@xyz.com
          </p>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="OPT_IN"
            name="OPT_IN"
            value="1"
            className="mt-1 h-4 w-4"
          />
          <label htmlFor="OPT_IN" className="text-sm">
            I agree to receive your newsletters and accept the data privacy
            statement.
          </label>
        </div>

        <div className="rounded-lg bg-black/[0.03] p-4 text-sm">
          We use Brevo as our marketing platform. By submitting this form you
          agree that the personal data you provided will be transferred to Brevo
          for processing in accordance with{" "}
          <a
            href="https://www.brevo.com/en/legal/privacypolicy/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Brevo’s Privacy Policy
          </a>
          .
        </div>

        <div className="text-right">
          <button type="submit" className="btn btn-primary btn-pill">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Brevo expects these fields */}
      <input type="text" name="email_address_check" defaultValue="" className="hidden" />
      <input type="hidden" name="locale" value="en" />
    </form>
  );
}

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

      {/* NEWSLETTER (no placeholders) */}
      <section className="py-16 md:py-20 bg-[#f5f7f9]">
        <div className="container-narrow">
          <div className="card mx-auto max-w-[720px] p-6 md:p-10">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
