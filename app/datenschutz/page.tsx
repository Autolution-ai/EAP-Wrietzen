import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Datenschutz | EAP Wriezen',
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <section>
        <h2 className="text-lg font-semibold text-white">1. Verantwortlicher</h2>
        {/* TODO: verantwortliche Stelle bestaetigen */}
        <p>
          {company.name}, {company.street}, {company.zip} {company.city}. E-Mail: {company.email}.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">2. Bewerbungsformular</h2>
        <p>
          Wenn du das Bewerbungsformular nutzt, verarbeiten wir die von dir angegebenen Daten
          (Name, Telefon, E-Mail sowie deine Antworten) ausschließlich zur Bearbeitung deiner
          Bewerbung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO sowie § 26 BDSG.
        </p>
        <p>
          Deine Daten werden nicht an unbeteiligte Dritte weitergegeben und nach Abschluss des
          Bewerbungsverfahrens gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">3. Hosting</h2>
        {/* Hinweis: Vercel als Hoster. TODO: AV-Vertrag mit Hoster pruefen. */}
        <p>
          Diese Website wird bei einem externen Dienstleister (Vercel) gehostet. Dabei können
          technische Zugriffsdaten (z. B. IP-Adresse) verarbeitet werden. Rechtsgrundlage ist
          unser berechtigtes Interesse an einem sicheren Betrieb, Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">4. Schriftarten</h2>
        <p>
          Schriftarten werden lokal ausgeliefert. Es findet kein externer Abruf bei Google statt,
          es werden keine Daten an Google übertragen.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">5. Keine Tracking-Cookies</h2>
        <p>
          Diese Demo-Website setzt keine Marketing- oder Analyse-Cookies ein. Wird später Tracking
          (z. B. GA4) ergänzt, ist ein Cookie-Consent-Banner erforderlich.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">6. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Außerdem kannst du dich bei einer
          Aufsichtsbehörde beschweren.
        </p>
      </section>
    </LegalLayout>
  );
}
