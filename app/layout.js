// app/layout.js
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "TOOLS — Joonas Luotonen",
  description:
    "Small tools and experiments to bring more clarity into design, branding, and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="py-5 md:py-6">
          <div className="container-narrow flex items-center justify-between">
            {/* Left: TOOLS logo linking to home */}
            <Link href="/" className="flex items-center">
              <Image
                src="/tools.png"
                alt="TOOLS"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Right: Nav links + JL monogram */}
            <nav className="flex items-center gap-6 text-sm uppercase font-bold tracking-wide">
              <Link href="/clarity" className="hover:opacity-80">
                Clarity Test
              </Link>
              <Link href="/about" className="hover:opacity-80">
                About
              </Link>
              <Link
                href="https://joonasluotonen.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:opacity-80"
              >
                <Image
                  src="/JL-monogrammiEXTENDED.png"
                  alt="Joonas Luotonen"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        {children}

        {/* Footer (fixed anchor) */}
        <footer className="mt-16 border-t border-black/10">
          <div className="container-narrow py-8">
            <p className="mt-0 text-sm text-black/60 text-center">
              © {new Date().getFullYear()} Joonas Luotonen ·{" "}
              <a
                href="https://joonasluotonen.com"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Pragmatic Play
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
