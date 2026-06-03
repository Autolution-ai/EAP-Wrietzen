import { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Funnel } from '@/components/funnel/Funnel';
import { Logo } from '@/components/ui/Logo';
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
          <Link href="/" className="flex items-center text-white" aria-label={`${company.name} Startseite`}>
            <Logo className="h-9 w-auto" />
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
