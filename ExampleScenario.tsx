import Image from "next/image";
import { Trophy } from "lucide-react";

const destinations = [
  {
    name: "Mallorca",
    days: 6,
    image:
      "image: "/images/mallorca.jpg",
    highlight: false,
  },
  {
    name: "Griekenland",
    days: 8,
    image:
      "image: "/images/griekenland.jpg",
    highlight: false,
  },
  {
    name: "Turkije",
    days: 10,
    image:
      "image: "/images/turkije.jpg",
    highlight: true,
  },
];

export default function ExampleScenario() {
  return (
    <section id="voorbeeld" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Voorbeeldscenario</p>
          <h2 className="section-heading mt-4">
            Meer vakantie voor hetzelfde budget
          </h2>
          <p className="section-subtext mx-auto mt-6 max-w-2xl">
            Budget €1.000 per persoon
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <article
              key={dest.name}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:shadow-card ${
                dest.highlight
                  ? "ring-2 ring-brand-500 ring-offset-2 ring-offset-slate-50"
                  : ""
              }`}
            >
              {dest.highlight && (
                <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  <Trophy className="h-3.5 w-3.5" />
                  Beste waarde
                </div>
              )}

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {dest.name}
                </h3>
                <p className="mt-1 text-slate-600">{dest.days} dagen</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
          Illustratief voorbeeld. Werkelijke prijzen, beschikbaarheid en
          reisduur verschillen per periode en aanbieder.
        </p>
      </div>
    </section>
  );
}
