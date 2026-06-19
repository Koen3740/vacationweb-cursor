import { Check, X } from "lucide-react";

const traditionalSteps = [
  "Zoekopdracht invoeren",
  "Zoek bij reispartner A",
  "Herhaal bij reispartner B",
  "Herhaal bij reispartner C",
  "Vergelijk alles zelf",
];

const vacationWebSteps = [
  "Geef één keer je voorkeuren in",
  "Vergelijk meerdere reispartners tegelijk",
  "Ontdek waar jouw budget het meeste oplevert",
  "Alles in één overzicht",
];

export default function WhyVacationWeb() {
  return (
    <section id="waarom" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Waarom VacationWeb?</p>
          <h2 className="section-heading mt-4">
            Eén zoekopdracht.
            <span className="block text-brand-600">Meerdere reispartners.</span>
          </h2>
          <p className="section-subtext mx-auto mt-6 max-w-2xl">
            Traditioneel vergelijk je telkens maar één website tegelijk.
            VacationWeb vergelijkt meerdere reispartners vanuit één
            zoekopdracht en toont waar jouw budget de meeste waarde oplevert.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200">
                <X className="h-5 w-5 text-slate-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">
                Traditionele reiswebsites
              </h3>
            </div>
            <ul className="space-y-4">
              {traditionalSteps.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-slate-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 shadow-soft lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500">
                <Check className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                VacationWeb
              </h3>
            </div>
            <ul className="space-y-4">
              {vacationWebSteps.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
