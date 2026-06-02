'use client';

import { Section, FadeItem } from '@/components/ui/Section';
import { PhotoSlot } from '@/components/ui/PhotoSlot';

export function Problem() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2">
        <FadeItem>
          <span className="text-sm font-semibold uppercase tracking-wide text-signal">
            Keine Nummer im System
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
            Du willst raus aus dem anonymen Großbetrieb.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-anthracite-300">
            <p>
              In vielen Firmen bist du eine Personalnummer. Lange Wege, wechselnde Teams,
              keiner kennt deinen Namen.
            </p>
            <p>
              Bei uns kennst du das ganze Team und den Chef persönlich. Kurze Wege,
              klare Absprachen, ehrliche Arbeit in der Region.
            </p>
          </div>
        </FadeItem>

        <FadeItem>
          <PhotoSlot label="Echtes Team-Foto vor Ort (Werkstatt oder Baustelle)" ratio="aspect-[4/3]" />
        </FadeItem>
      </div>
    </Section>
  );
}
