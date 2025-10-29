// app/layout.js
import "./globals.css";
import Image from "next/image";
import NavBar from "../components/NavBar"; // client component is fine here

export const metadata = {
  title: "TOOLS — Joonas Luotonen",
  description:
    "Small tools and experiments to bring more clarity into design, branding, and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black flex flex-col min-h-screen">
        {/* Header */}
        <NavBar />

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-black/10 bg-[#f5f7f9] mt-12">
          <div className="max-w-5xl mx-auto py-12 flex flex-col items-center px-4">

    <a
      href="https://www.joonasluotonen.com"
      target="_blank"
      rel="noopener noreferrer"
    >
          
            <Image
              src="/JL_logoPPright.png"
              alt="Pragmatic Play logo"
              width={220}
              height={60}
              priority
            />
            <p className="mt-4 text-sm text-black/60 text-center">
              © {new Date().getFullYear()} Joonas Luotonen · Pragmatic Play
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
