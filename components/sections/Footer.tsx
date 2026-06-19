import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Blijf op de hoogte
          </h2>
          <p className="mt-4 text-slate-400">
            VacationWeb is in ontwikkeling. Neem contact op en we houden je
            op de hoogte zodra de vergelijker live gaat.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="mailto:info@vacationweb.be"
              className="text-brand-400 transition-colors hover:text-brand-300"
            >
              info@vacationweb.be
            </Link>
            <span className="hidden text-slate-600 sm:inline">·</span>
            <Link
              href="mailto:info@vacationweb.nl"
              className="text-brand-400 transition-colors hover:text-brand-300"
            >
              info@vacationweb.nl
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm font-semibold text-white">VacationWeb</p>
          <p className="mt-2 text-xs text-slate-500">
            © {new Date().getFullYear()} VacationWeb. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
