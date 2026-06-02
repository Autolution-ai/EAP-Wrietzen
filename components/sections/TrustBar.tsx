'use client';

import { MapPin, Users, ShieldCheck, Clock } from 'lucide-react';
import { Section, FadeItem } from '@/components/ui/Section';
import { CircuitTrace } from '@/components/CircuitTrace';

// Vertrauensanker. Zahlen bewusst weich gehalten, da im Briefing keine
// konkreten Kennzahlen bestaetigt wurden. TODO: durch echte Zahlen ersetzen.
const anchors = [
  { icon: MapPin, label: 'Regional verwurzelt', sub: 'Wriezen & Märkisch-Oderland' },
  { icon: Users, label: 'Eingespieltes Team', sub: 'Kein anonymer Großbetrieb' },
  { icon: ShieldCheck, label: 'Sichere Auftragslage', sub: 'Volle Auslastung' },
  { icon: Clock, label: 'Langfristige Perspektive', sub: 'Zusammenarbeit auf Dauer' },
];

export function TrustBar() {
  return (
    <Section className="border-y border-anthracite-800 bg-anthracite-900 py-12">
      <div className="container-content">
        <CircuitTrace className="mx-auto mb-10 h-12 w-full max-w-3xl opacity-80" />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {anchors.map((a) => (
            <FadeItem key={a.label} className="flex flex-col items-center gap-2 text-center">
              <a.icon className="h-7 w-7 text-signal" aria-hidden />
              <span className="text-sm font-semibold text-white">{a.label}</span>
              <span className="text-xs text-anthracite-400">{a.sub}</span>
            </FadeItem>
          ))}
        </div>
      </div>
    </Section>
  );
}
