
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="container-wide py-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/assets/tools.png" alt="TOOLS" width={130} height={25} />
        </div>
        <p>© {new Date().getFullYear()} Joonas Luotonen. Pragmatic Play.</p>
      </div>
    </footer>
  );
}
