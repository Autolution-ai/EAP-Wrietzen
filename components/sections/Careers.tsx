'use client';

import { ArrowRight, Check } from 'lucide-react';
import { Section, FadeItem } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { jobs, requirements } from '@/lib/jobs';

export function Careers() {
  return (
    <Section id="karriere" className="bg-anthracite-900 py-20 sm:py-28">
      <div className="container-content">
        <FadeItem className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-signal">
            Wir suchen Verstärkung
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
            Offene Stellen in Wriezen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-anthracite-300">
            Wir suchen Fachpersonal mit abgeschlossener Ausbildung. Praktische Erfahrung ist gut,
            die Basis ist deine Ausbildung.
          </p>
        </FadeItem>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <FadeItem key={job.id}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-anthracite-700 p-7 transition-colors duration-200 hover:border-signal">
                {/* Hintergrundbild des Arbeitsbereichs + dunkles Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${job.image})` }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(20,24,27,0.86) 0%, rgba(20,24,27,0.94) 100%)',
                  }}
                  aria-hidden
                />
                <div className="relative mb-5 flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-signal/10 text-signal">
                    <job.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="rounded-full bg-anthracite-700 px-3 py-1 text-xs font-medium text-anthracite-300">
                    {job.short}
                  </span>
                </div>
                <h3 className="relative text-xl font-bold text-white">{job.title}</h3>
                <p className="relative mt-2 text-anthracite-300">{job.description}</p>
                <ul className="relative mt-5 space-y-2">
                  {job.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-anthracite-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-7 pt-2">
                  <LinkButton href={`/bewerben?stelle=${job.id}`} className="w-full">
                    Auf diese Stelle bewerben
                    <ArrowRight className="h-5 w-5" aria-hidden />
                  </LinkButton>
                </div>
              </article>
            </FadeItem>
          ))}
        </div>

        <FadeItem className="mt-12 rounded-2xl border border-anthracite-700 bg-anthracite-800 p-7">
          <h3 className="text-lg font-bold text-white">Das solltest du mitbringen</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {requirements.map((r) => (
              <li key={r.label} className="flex items-center gap-3 text-anthracite-300">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-anthracite-700 text-signal">
                  <r.icon className="h-5 w-5" aria-hidden />
                </span>
                {r.label}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-anthracite-400">
            Wir suchen Fachkräfte, keine reinen Helfer.
          </p>
        </FadeItem>
      </div>
    </Section>
  );
}
