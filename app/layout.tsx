import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { company } from '@/lib/company';

// Font lokal via next/font (DSGVO-konform, kein externer Google-Aufruf zur Laufzeit).
const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const siteTitle = 'Elektrofachkräfte gesucht | EAP Wriezen | Märkisch-Oderland';
const siteDescription =
  'EAP aus Wriezen sucht Elektroinstallateure und Schwachstromtechniker. Sichere Aufträge, kurze Wege, persönliches Team. Bewirb dich in unter 60 Sekunden.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL('https://eap-wriezen.vercel.app'),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'EAP Wriezen, Elektrofachkräfte gesucht' }],
  },
  robots: { index: true, follow: true },
};

// JSON-LD: Organization + LocalBusiness (Pflicht laut Master).
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: company.name,
  description: siteDescription,
  areaServed: company.stats.region,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.street,
    postalCode: company.zip,
    addressLocality: company.city,
    addressRegion: 'Brandenburg',
    addressCountry: 'DE',
  },
  knowsAbout: ['Brandmeldetechnik', 'Hausinstallation', 'Schwachstromtechnik', 'Elektroinstallation'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={sans.variable}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
