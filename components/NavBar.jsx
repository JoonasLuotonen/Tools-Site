"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

export default function NavBar() {
  return (
    <header className="w-full border-b border-black/10">
      <div className="container-wide flex items-center justify-between py-5">
        <Link href="/" aria-label="Tools Home" className="shrink-0">
          <Image src="/tools.png" alt="TOOLS" width={120} height={36} priority />
        </Link>

        <nav className="flex items-center gap-8">
          <NavItem href="/" label="HOME" />
          {/* IMPORTANT: point to /clarity, not /clarity-test */}
          <NavItem href="/clarity" label="CLARITY TEST" />
          <NavItem href="/about" label="ABOUT" />
        </nav>

        <a
          href="https://joonasluotonen.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="joonasluotonen.com"
          className="block shrink-0"
        >
          <Image
            src="/JL-monogrammiEXTENDED.png"
            alt="JL logo"
            width={80}
            height={40}
            priority
          />
        </a>
      </div>
    </header>
  );
}
