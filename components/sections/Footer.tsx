import Link from 'next/link';
import { Zap, MapPin, Phone, Mail } from 'lucide-react';
import { company } from '@/lib/company';

export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-anthracite-800 bg-anthracite-950 py-14">
      <div className="container-content">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-white">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-signal text-anthracite-950">
                <Zap className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-lg">{company.shortName}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-anthracite-400">
              Elektrohandwerk aus {company.city}. Wir suchen Fachkräfte, die langfristig
              ins Team passen.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Kontakt</h3>
            {/* TODO: echte NAP-Daten eintragen (Impressum-Konsistenz) */}
            <ul className="mt-4 space-y-3 text-sm text-anthracite-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-signal" aria-hidden />
                {company.street}, {company.zip} {company.city}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-signal" aria-hidden />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-signal" aria-hidden />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Rechtliches</h3>
            <ul className="mt-4 space-y-3 text-sm text-anthracite-400">
              <li>
                <Link href="/impressum" className="hover:text-white">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/bewerben" className="text-signal hover:text-signal-400">
                  Jetzt bewerben
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-anthracite-800 pt-6 text-xs text-anthracite-500">
          <p>
            © {new Date().getFullYear()} {company.name}. Demo-Website. Inhalte und Kontaktdaten
            sind teilweise Platzhalter.
          </p>
        </div>
      </div>
    </footer>
  );
}
