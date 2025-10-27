"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      {/* MIDSECTION */}
      <section className="py-14 md:py-20">
        <div className="container-narrow text-center">
          {/* Wordmark above headline (as in your comp) */}
          <div className="flex justify-center mb-6 md:mb-8">
            <Image
              src="/tools.png"
              alt="TOOLS logo"
              width={210}
              height={60}
              priority
            />
          </div>

          <h1 className="mt-0 mb-4 md:mb-5">
            A second opinion for your website
          </h1>

          <p className="text-black/70 mt-0 mb-8 md:mb-10">
            Small tools and experiments to bring more clarity into design,
            branding, and business.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/clarity-test" className="btn btn-primary rounded-full">
              Go to Clarity Test
            </Link>
            <Link href="/about" className="btn btn-ghost rounded-full border border-black">
              About
            </Link>
          </div>
        </div>
      </section>

      {/* BREVO SECTION (neutral background, centered card placeholder) */}
      <section className="py-16 md:py-20 bg-[#f5f7f9]">
        <div className="container-narrow">
          <div className="card mx-auto max-w-[720px] p-6 md:p-10 text-center">
            {/* If you already created /public/newsletter.html, replace the placeholder with the iframe below */}
            {/*
            <iframe
              src="/newsletter.html"
              title="Newsletter signup"
              className="w-full h-[720px] border-none rounded-xl"
            />
            */}
            <div className="border border-dashed border-black/20 rounded-xl py-16">
              <p className="text-black/60">Brevo form place holder</p>
              <p className="text-sm mt-2 text-black/50">
                Paste your Brevo embed here or serve it via <code>/newsletter.html</code>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
