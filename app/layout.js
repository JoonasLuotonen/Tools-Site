// app/layout.js
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "TOOLS — Joonas Luotonen",
  description:
    "Small tools and experiments to bring more clarity into design, branding, and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/* HEADER (from PDF): TOOLS left, menu right, JL at far right */}
       <header className="w-full border-b border-black/10">
  <div className="container-wide flex items-center justify-between py-6">
    {/* LEFT: TOOLS logo -> link to / */}
    <Link href="/" aria-label="Tools Home" className="shrink-0">
      <Image
        src="/tools.png"                // <- MUST exist exactly as /public/tools.png
        alt="TOOLS logo"
        width={128}
        height={38}
        priority
      />
    </Link>

    {/* RIGHT: menu + JL logo at far right */}
    <div className="flex items-center gap-8">
      <nav className="flex items-center gap-8 text-sm font-bold tracking-wide uppercase">
        <Link href="/" className="no-underline hover:opacity-80">Home</Link>
        <Link href="/clarity-test" className="no-underline hover:opacity-80">Clarity Test</Link>
        <Link href="/about" className="no-underline hover:opacity-80">About</Link>
      </nav>

      {/* JL: external link, far right */}
      <a
        href="https://joonasluotonen.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="joonasluotonen.com"
        className="block"
      >
        <Image
          src="/JL-monogrammiEXTENDED.png"  // <- MUST exist as /public/JL-monogrammiEXTENDED.png
          alt="JL logo"
          width={80}
          height={40}
        />
      </a>
    </div>
  </div>
</header>


        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER (from PDF) */}
        <footer className="w-full border-t border-black/10">
          <div className="container-wide py-12 flex flex-col items-center">
            <Image
              src="/JL_logoPPright.png"  // put this in /public/
              alt="PRAGMATIC PLAY"
              width={220}
              height={60}
            />
            <p className="mt-4 text-sm text-black/60">
              © {new Date().getFullYear()} Joonas Luotonen. Pragmatic Play.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
