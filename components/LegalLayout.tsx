import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-anthracite-950 py-16">
      <div className="container-content max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-anthracite-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" aria-hidden /> Zurück
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-white">{title}</h1>

        <div className="mt-4 rounded-lg border border-signal/30 bg-signal/5 px-4 py-3 text-sm text-signal">
          Demo-Hinweis: Diese Seite enthält Platzhalter. Vor dem Go-Live mit echten,
          rechtlich geprüften Angaben ersetzen.
        </div>

        <div className="prose-legal mt-8 space-y-6 text-anthracite-300">{children}</div>
      </div>
    </main>
  );
}
