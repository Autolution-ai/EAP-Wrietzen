'use client';

import { Flame, Home, Zap } from 'lucide-react';
import { Section, FadeItem } from '@/components/ui/Section';
import { images } from '@/lib/images';

// Schwerpunkt Brandmeldetechnik + Hausinstallation, Rest kompakt ergaenzend.
const featured = [
  { icon: Flame, title: 'Brandmeldetechnik', text: 'Planung, Installation und Prüfung von Brandmelde- und Sicherheitsanlagen.', image: images.brandmelde },
  { icon: Home, title: 'Hausinstallation', text: 'Komplette Elektroinstallation für Wohn- und Gewerbeobjekte.', image: images.hausinstallation },
];

const more = ['Altbausanierung', 'Erdungsanlagen', 'Baustrom', 'Industriebau', 'Hausbau', 'Elektroinstallation'];

export function Services() {
  return (
    <Section id="leistungen" className="bg-anthracite-900 py-20 sm:py-28">
      <div className="container-content">
        <FadeItem className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-signal">Was wir machen</span>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
            Breites Spektrum, klarer Schwerpunkt
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-anthracite-300">
            Bei uns wird dir nicht langweilig. Zwei Bereiche prägen unsere Arbeit besonders.
          </p>
        </FadeItem>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((s) => (
            <FadeItem key={s.title}>
              <div className="relative flex h-full gap-4 overflow-hidden rounded-2xl border border-anthracite-700 p-7">
                {/* Hintergrundbild des Arbeitsbereichs + dunkles Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.image})` }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(110deg, rgba(20,24,27,0.95) 0%, rgba(20,24,27,0.82) 60%, rgba(20,24,27,0.62) 100%)',
                  }}
                  aria-hidden
                />
                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-signal text-anthracite-950">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="relative">
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-anthracite-300">{s.text}</p>
                </div>
              </div>
            </FadeItem>
          ))}
        </div>

        <FadeItem className="mt-8 flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 text-sm text-anthracite-400">
            <Zap className="h-4 w-4 text-signal" aria-hidden /> Außerdem:
          </span>
          {more.map((m) => (
            <span
              key={m}
              className="rounded-full border border-anthracite-700 bg-anthracite-800 px-4 py-1.5 text-sm text-anthracite-300"
            >
              {m}
            </span>
          ))}
        </FadeItem>
      </div>
    </Section>
  );
}
