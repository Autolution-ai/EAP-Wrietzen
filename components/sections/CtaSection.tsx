'use client';

import { ArrowRight } from 'lucide-react';
import { Section, FadeItem } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';

export function CtaSection() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="container-content">
        <FadeItem>
          <div className="relative overflow-hidden rounded-3xl border border-signal/30 bg-anthracite-900 px-7 py-14 text-center sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #FACC15 0, #FACC15 1px, transparent 1px, transparent 18px)',
              }}
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
                Passt? Dann lass von dir hören.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-anthracite-300">
                Beantworte ein paar kurze Fragen. Ohne Anschreiben, ohne Lebenslauf,
                in unter 60 Sekunden.
              </p>
              <div className="mt-9 flex justify-center">
                <LinkButton href="/bewerben">
                  Jetzt bewerben
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </LinkButton>
              </div>
            </div>
          </div>
        </FadeItem>
      </div>
    </Section>
  );
}
