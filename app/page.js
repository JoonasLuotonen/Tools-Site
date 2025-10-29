"use client";

import Link from "next/link";
import Image from "next/image";

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

      {/* SIMPLE NEWSLETTER SECTION */}
      <section className="py-16 md:py-20 bg-[#f5f7f9] text-center">
        <div className="container-narrow">
          <div className="mx-auto max-w-[520px] p-6 md:p-10 rounded-2xl bg-white shadow-sm border border-black/10">
            <Image
              src="/newsletter-image.jpg" // ← replace with your own image in /public folder
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
            <Link
              href="/newsletter"
              className="inline-block btn btn-primary btn-pill"
            >
              Join now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
