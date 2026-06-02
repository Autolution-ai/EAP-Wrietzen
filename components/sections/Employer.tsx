'use client';

import { Handshake, PhoneCall, MapPinned, Layers, HeartHandshake, CalendarClock } from 'lucide-react';
import { Section, FadeItem } from '@/components/ui/Section';
import { PhotoSlot } from '@/components/ui/PhotoSlot';

// Nur im Briefing bestaetigte Arbeitgeber-Argumente. Keine erfundenen Benefits.
const reasons = [
  { icon: Handshake, title: 'Familiäres Unternehmen', text: 'Du arbeitest mit Leuten, die dich kennen, nicht mit einer Personalabteilung.' },
  { icon: PhoneCall, title: 'Direkter Draht', text: 'Kurze Wege bis zum Chef. Entscheidungen fallen schnell, ohne Umwege.' },
  { icon: MapPinned, title: 'Regionale Projekte', text: 'Aufträge in der Region statt Montage quer durch die Republik.' },
  { icon: Layers, title: 'Abwechslungsreiche Aufgaben', text: 'Von Hausinstallation bis Brandmeldetechnik, fachlich anspruchsvoll.' },
  { icon: CalendarClock, title: 'Sichere Auslastung', text: 'Volle Auftragsbücher und eine langfristige Perspektive im Team.' },
  { icon: HeartHandshake, title: 'Du kannst dich einbringen', text: 'Deine Ideen zählen. Hier bewegst du wirklich etwas mit.' },
];

export function Employer() {
  return (
    <Section id="arbeitgeber" className="py-20 sm:py-28">
      <div className="container-content">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeItem>
            <span className="text-sm font-semibold uppercase tracking-wide text-signal">
              Warum du zu uns passt
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
              Arbeiten in einem Team, das sich kennt.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-anthracite-300">
              Wir versprechen nichts, was wir nicht halten. Dafür bekommst du ein ehrliches
              Arbeitsumfeld, in dem dein Handwerk zählt.
            </p>
            <div className="mt-8">
              <PhotoSlot label="Foto: Kollegen bei der Arbeit / Firmenfahrzeug" ratio="aspect-[16/10]" />
            </div>
          </FadeItem>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <FadeItem key={r.title}>
                <div className="h-full rounded-xl border border-anthracite-700 bg-anthracite-800 p-6">
                  <r.icon className="h-7 w-7 text-signal" aria-hidden />
                  <h3 className="mt-4 font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-anthracite-300">{r.text}</p>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
