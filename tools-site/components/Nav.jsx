
import Image from "next/image";

export default function Nav() {
  return (
    <header className="border-b border-black/10">
      <div className="container-wide flex items-center justify-between py-4">
        <a href="https://joonasluotonen.com" className="flex items-center gap-3">
          <Image src="/assets/JL-monogrammiEXTENDED.png" alt="JL monogram" width={120} height={28} priority />
        </a>
        <nav className="flex items-center gap-6">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/clarity">Clarity Test</a>
          <a className="nav-link" href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}
