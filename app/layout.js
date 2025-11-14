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
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/tools.png"
                alt="TOOLS"
                width={40}
                height={40}
                unoptimized
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
                href="https://www.joonasluotonen.com"
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

        {/* Footer */}
<footer className="mt-16 bg-[#FBE87F] py-10">
  <div className="container-narrow flex justify-center">
    <a
      href="https://www.joonasluotonen.com"
      target="_blank"
      rel="noreferrer"
      className="inline-block"
    >
      <Image
        src="/JL_logoPPright.png"
        alt="Joonas Luotonen Logo"
        width={80}
        height={80}
        className="w-20 h-auto object-contain"
        unoptimized
      />
    </a>
  </div>
</footer>

      </body>
    </html>
  );
}
