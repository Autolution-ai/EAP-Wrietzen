import { jobs } from '@/lib/jobs';
import { company } from '@/lib/company';

// JobPosting-JSON-LD je offene Stelle (Recruiting-SEO / Google Jobs).
export function JobPostingSchema() {
  const today = new Date().toISOString().split('T')[0];

  const schema = jobs.map((job) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: `${job.description} Aufgaben: ${job.tasks.join(', ')}.`,
    datePosted: today,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: company.name,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        postalCode: company.zip,
        addressLocality: company.city,
        addressRegion: 'Brandenburg',
        addressCountry: 'DE',
      },
    },
    qualifications: 'Abgeschlossene Ausbildung im Elektrobereich, Führerschein',
  }));

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
