import { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Zap } from 'lucide-react';
import { Funnel } from '@/components/funnel/Funnel';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Jetzt bewerben | EAP Wriezen',
  description:
    'Bewirb dich in unter 60 Sekunden bei EAP in Wriezen. Ohne Anschreiben, ohne Lebenslauf.',
  robots: { index: false, follow: true },
};

export default function BewerbenPage() {
  return (
    <main className="min-h-screen bg-anthracite-950">
      <header className="border-b border-anthracite-800">
        <div className="container-content flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-signal text-anthracite-950">
              <Zap className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-lg">{company.shortName}</span>
          </Link>
          <Link href="/" className="text-sm text-anthracite-400 hover:text-white">
            Abbrechen
          </Link>
        </div>
      </header>

      <div className="container-content py-14 sm:py-20">
        <Suspense fallback={<div className="text-center text-anthracite-400">Lädt…</div>}>
          <Funnel />
        </Suspense>
      </div>
    </main>
  );
}
