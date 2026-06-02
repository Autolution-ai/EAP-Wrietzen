import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Problem } from '@/components/sections/Problem';
import { Careers } from '@/components/sections/Careers';
import { Employer } from '@/components/sections/Employer';
import { Services } from '@/components/sections/Services';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/sections/Footer';
import { JobPostingSchema } from '@/components/JobPostingSchema';

export default function HomePage() {
  return (
    <>
      <JobPostingSchema />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Careers />
        <Employer />
        <Services />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
