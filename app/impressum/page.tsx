import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Impressum | EAP Wriezen',
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <h2 className="text-lg font-semibold text-white">Angaben gemäß § 5 DDG</h2>
        {/* TODO: echte Firmierung, Rechtsform und Anschrift eintragen */}
        <p>
          {company.name}
          <br />
          {company.street}
          <br />
          {company.zip} {company.city}
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">Vertreten durch</h2>
        {/* TODO: Geschaeftsfuehrer / Inhaber eintragen */}
        <p>Geschäftsführung: [Platzhalter]</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">Kontakt</h2>
        <p>
          Telefon: {company.phone}
          <br />
          E-Mail: {company.email}
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">Registereintrag</h2>
        {/* TODO: HRB-Nummer und Registergericht, falls zutreffend */}
        <p>Registergericht: [Platzhalter]</p>
        <p>Registernummer: [Platzhalter]</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">Umsatzsteuer-ID</h2>
        {/* TODO: USt-IdNr. eintragen, falls vorhanden */}
        <p>USt-IdNr.: [Platzhalter]</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white">Verantwortlich für den Inhalt</h2>
        <p>[Platzhalter], Anschrift wie oben.</p>
      </section>
    </LegalLayout>
  );
}
