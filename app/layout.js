"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "TOOLS — Joonas Luotonen",
  description:
    "Small tools and experiments to bring more clarity into design, branding, and business.",
};

function NavItem({ href, label }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`no-underline uppercase text-sm font-bold tracking-wide hover:opacity-80
        ${isActive ? "underline decoration-black underline-offset-8" : "decoration-black/20 underline-offset-8"}`}
    >
      {label}
    </Link>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/* HEADER */}
        <header className="w-full border-b border-black/10">
          <div className="container-wide flex items-center justify-between py-5">
            {/* LEFT: TOOLS (link to /) */}
            <Link href="/" aria-label="Tools Home" className="shrink-0">
              <Image
                src="/tools.png"         // <- must exist
                alt="TOOLS"
                width={120}
                height={36}
                priority
              />
            </Link>

            {/* RIGHT: menu + JL on far right */}
            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-8">
                <NavItem href="/" label="HOME" />
                <NavItem href="/clarity-test" label="CLARITY TEST" />
                <NavItem href="/about" label="ABOUT" />
              </nav>
              <a
                href="https://joonasluotonen.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="joonasluotonen.com"
                className="block"
              >
                <Image
                  src="/JL-monogrammiEXTENDED.png" // <- must exist
                  alt="JL logo"
                  width={80}
                  height={40}
                />
              </a>
            </div>
          </div>
        </header>

        {children}

        {/* FOOTER */}
        <footer className="w-full border-t border-black/10">
          <div className="container-wide py-12 flex flex-col items-center">
            <Image
              src="/JL_logoPPright.png"  // <- must exist
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
