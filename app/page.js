"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-white text-black font-['Special_Gothic',Arial,sans-serif]">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center py-6 px-4 md:px-8 border-b border-gray-200">
        <Link href="/">
          <Image
            src="/JL-monogrammiEXTENDED.png"
            alt="JL logo"
            width={80}
            height={40}
            priority
          />
        </Link>
        <nav className="flex gap-8 text-sm font-bold tracking-wide uppercase">
          <Link href="/" className="hover:opacity-70">
            Home
          </Link>
          <Link href="/clarity-test" className="hover:opacity-70">
            Clarity Test
          </Link>
          <Link href="/about" className="hover:opacity-70">
            About
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center mt-20 mb-24 px-6">
        <div className="flex justify-center mb-6">
          <Image
            src="/tools.png"
            alt="TOOLS logo"
            width={240}
            height={70}
            priority
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
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

      {/* Newsletter Section */}
      <section className="w-full py-20 px-4 bg-[#f5f7f9] flex justify-center">
        <div className="w-full max-w-3xl text-center">
          <iframe
            src="/newsletter.html"
            title="Newsletter signup"
            className="w-full max-w-3xl h-[720px] border-none rounded-xl"
          ></iframe>
        </div>
      </section>

      {/* Tools List */}
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-6 px-6 py-16">
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl mb-2">Clarity Test</h3>
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

        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl mb-2">More coming</h3>
            <p className="text-gray-600 mb-6">
              New small tools and experiments will appear here as they’re ready.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center py-12 mt-10 border-t border-gray-200">
        <Image
          src="/JL_logoPPright.png"
          alt="JL Pragmatic Play"
          width={200}
          height={50}
        />
        <p className="text-sm text-gray-500 mt-4">
          © 2025 Joonas Luotonen. Pragmatic Play.
        </p>
      </footer>
    </main>
  );
}
