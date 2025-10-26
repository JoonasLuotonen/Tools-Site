// app/page.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="w-full max-w-3xl text-center mt-16 md:mt-20 mb-16 md:mb-24 px-6">
        <div className="flex justify-center mb-6">
          <Image
            src="/tools.png"
            alt="TOOLS logo"
            width={240}
            height={70}
            priority
          />
        </div>

        <h1 className="font-heading text-[34px] md:text-[42px] font-bold mb-4 leading-snug">
          A second opinion for your website
        </h1>
        <p className="text-gray-600 mb-10">
          Small tools and experiments to bring more clarity into design,
          branding, and business.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <Link
            href="/clarity-test"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition"
          >
            Go to Clarity Test
          </Link>
          <Link
            href="/about"
            className="text-black border border-black px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-50 transition"
          >
            About
          </Link>
        </div>
      </section>

      {/* Newsletter (neutral tone + more spacing) */}
      <section className="w-full py-16 md:py-20 px-4 bg-[#f5f7f9] flex justify-center">
        <div className="w-full max-w-3xl text-center">
          {/* The Brevo form is served as a static HTML file to avoid build errors */}
          <iframe
            src="/newsletter.html"
            title="Newsletter signup"
            className="w-full max-w-3xl h-[720px] border-none rounded-xl"
          />
        </div>
      </section>

      {/* Tools */}
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-6 px-6 py-14 md:py-16">
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-xl mb-2">Clarity Test</h3>
            <p className="text-gray-600 mb-6">
              Practical web page analysis on five axes with Quick Wins. Get your
              clarity profile and what to fix.
            </p>
          </div>
          <Link
            href="/clarity-test"
            className="bg-black text-white rounded-full px-6 py-3 text-sm font-bold self-start hover:bg-gray-800 transition"
          >
            Run the test
          </Link>
        </div>

        <div className="border border-gray-200 rounded-2xl p-8">
          <h3 className="font-heading text-xl mb-2">More coming</h3>
          <p className="text-gray-600">
            New small tools and experiments will appear here as they’re ready.
          </p>
        </div>
      </section>
    </main>
  );
}
