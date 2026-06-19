import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-slate-50" />
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-amber-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <Sparkles className="h-4 w-4 text-brand-500" />
            Een nieuwe manier om vakantie te zoeken
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Meer vakantie
            <span className="block bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              voor jouw budget
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Vergelijk vakanties van zorgvuldig geselecteerde reispartners
            vanuit één centraal overzicht — en ontdek waar jouw geld het
            meeste oplevert.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-brand-600 hover:shadow-card sm:w-auto"
            >
              Blijf op de hoogte
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#waarom"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              Ontdek het concept
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { value: "1×", label: "Zoekopdracht" },
            { value: "4+", label: "Reispartners" },
            { value: "100%", label: "Transparant vergelijken" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200/80 bg-white/70 px-6 py-5 text-center backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-brand-600">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
