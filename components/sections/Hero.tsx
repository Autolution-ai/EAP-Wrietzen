'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { company } from '@/lib/company';

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-anthracite-950 pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* dezenter Hintergrund-Verlauf statt Stockfoto */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(250,204,21,0.10) 0%, transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(250,204,21,0.06) 0%, transparent 55%)',
        }}
        aria-hidden
      />

      <div className="container-content relative">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-anthracite-700 bg-anthracite-900 px-4 py-1.5 text-sm text-anthracite-300"
          >
            <MapPin className="h-4 w-4 text-signal" aria-hidden />
            {company.region}
          </motion.div>

          <motion.h1
            variants={item}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl"
          >
            Elektrofachkraft gesucht?{' '}
            <span className="text-signal">Komm in ein Team, das zusammenhält.</span>
          </motion.h1>

          <motion.p
            variants={item}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-anthracite-300"
          >
            Wir suchen Elektroinstallateure und Schwachstromtechniker für unser Team in Wriezen.
            Dich erwarten sichere Aufträge, kurze Wege und ein persönliches Arbeitsumfeld.
          </motion.p>

          <motion.div
            variants={item}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <LinkButton href="/bewerben">
              Jetzt bewerben
              <ArrowRight className="h-5 w-5" aria-hidden />
            </LinkButton>
            <LinkButton href="#karriere" variant="secondary">
              Offene Stellen ansehen
            </LinkButton>
          </motion.div>

          <motion.p
            variants={item}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-5 text-sm text-anthracite-400"
          >
            In unter 60 Sekunden, ohne Anschreiben oder Lebenslauf.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
