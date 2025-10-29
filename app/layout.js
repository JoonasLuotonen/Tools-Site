// app/layout.js
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TOOLS — Joonas Luotonen",
  description:
    "Small tools and experiments to bring more clarity into design, branding, and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="py-5 md:py-6">
          <div className="container-narrow flex items-center justify-between">
            <Link href="/" className="no-underline font-bold tracking-wide uppercase">
              Tools
            </Link>
            <nav className="flex items-center gap-6 text-sm uppercase font-bold tracking-wide">
              <Link href="/clarity" className="hover:opacity-80">
                Clarity Test
              </Link>
              <Link href="/newsletter" className="hover:opacity-80">
                Newsletter
              </Link>
            </nav>
          </div>
        </header>

        {children}

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
