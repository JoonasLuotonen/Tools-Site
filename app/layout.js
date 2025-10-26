// app/layout.js
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "TOOLS – Joonas Luotonen",
  description:
    "Small tools and experiments to bring more clarity into design, branding, and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">
        {/* Header (single, global) */}
        <header className="w-full max-w-6xl mx-auto flex justify-between items-center py-6 px-4 md:px-8 border-b border-gray-200">
          <Link href="/" className="block">
            <Image
              src="/jl-monogrammi-extended.png"
              alt="JL logo"
              width={96}
              height={48}
              priority
            />
          </Link>

          <nav className="flex gap-8 text-sm font-bold tracking-wide uppercase">
            <Link href="/" className="hover:opacity-70">Home</Link>
            <Link href="/clarity-test" className="hover:opacity-70">Clarity Test</Link>
            <Link href="/about" className="hover:opacity-70">About</Link>
          </nav>
        </header>

        {/* Page content */}
        {children}

        {/* Footer (single, global) */}
        <footer className="w-full border-t border-gray-200 mt-16">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center py-12">
            <Image
              src="/jl-logo-ppright.png"
              alt="JL Pragmatic Play"
              width={200}
              height={50}
            />
            <p className="text-sm text-gray-500 mt-4">
              © 2025 Joonas Luotonen. Pragmatic Play.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
