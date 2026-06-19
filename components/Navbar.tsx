import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[72px] lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="VacationWeb"
            width={160}
            height={48}
            className="h-10 w-auto lg:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#waarom"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Waarom VacationWeb
          </Link>
          <Link
            href="#voorbeeld"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Voorbeeld
          </Link>
          <Link
            href="#hoe-het-werkt"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Hoe het werkt
          </Link>
        </nav>

        <Link
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md"
        >
          Blijf op de hoogte
        </Link>
      </div>
    </header>
  );
}
