"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      {/* MIDSECTION (top hero) */}
      <section className="pt-16 md:pt-20 pb-10">
        <div className="container-narrow text-center">
          {/* Eyebrow line */}
          <p className="uppercase text-xs tracking-[0.2em] text-black/55 mb-5">
            TEST HOW CLEAR YOUR WEBSITE REALLY IS
          </p>

          {/* TOOLS wordmark centered */}
          <div className="flex justify-center mb-6 md:mb-8">
            <Image
              src="/tools.png"
              alt="TOOLS"
              width={210}
              height={60}
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="mt-0 mb-3 md:mb-4">
            A second opinion for your website
          </h1>

          {/* Subhead */}
          <p className="text-black/65 mt-0 mb-8 md:mb-10 max-w-3xl mx-auto">
            Small tools and experiments to bring more clarity into design,
            branding, and business.
          </p>

          {/* Single primary CTA */}
          <div className="flex justify-center">
            <Link
              href="/clarity-test"
              className="btn btn-primary rounded-full px-6"
            >
              Go to Clarity Test
            </Link>
          </div>
        </div>
      </section>

      {/* The next sections (Brevo, etc.) stay below — unchanged here */}
    </main>
  );
}
