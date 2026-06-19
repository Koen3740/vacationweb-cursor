import { BarChart3, Search, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Budget-first zoeken",
    description:
      "Start met wat je wilt uitgeven en wanneer je wilt vertrekken — niet met één vaste bestemming.",
  },
  {
    icon: BarChart3,
    title: "Slim vergelijken",
    description:
      "Meerdere reispartners worden tegelijk beoordeeld op prijs, reisduur en beschikbaarheid.",
  },
  {
    icon: Sparkles,
    title: "Beste waarde tonen",
    description:
      "VacationWeb rangschikt resultaten op vakantiewaarde, zodat je sneller de beste keuze vindt.",
  },
];

export default function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Waarom dit werkt</p>
          <h2 className="section-heading mt-4">
            Van budget naar de beste vakantie
          </h2>
          <p className="section-subtext mx-auto mt-6 max-w-2xl">
            VacationWeb draait het traditionele zoekproces om: jij bepaalt
            je budget en voorkeuren, wij tonen waar je het meeste voor terugkrijgt.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-slate-50/50 p-8 transition-all hover:border-brand-200 hover:bg-brand-50/30"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-sm">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-bold text-brand-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
