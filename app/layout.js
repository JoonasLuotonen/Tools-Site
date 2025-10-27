// NO "use client" here
import "./globals.css";
import Image from "next/image";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "TOOLS — Joonas Luotonen",
  description:
    "Small tools and experiments to bring more clarity into design, branding, and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <NavBar />
        {children}
        <footer className="w-full border-t border-black/10 bg-[#f5f7f9]">
          <div className="container-wide py-12 flex flex-col items-center">
            <Image
              src="/JL_logoPPright.png"
              alt="PRAGMATIC PLAY"
              width={220}
              height={60}
              priority
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
