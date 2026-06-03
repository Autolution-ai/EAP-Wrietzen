import type { LucideIcon } from 'lucide-react';
import { Cable, ShieldCheck, Building2, Wrench } from 'lucide-react';
import { images } from '@/lib/images';

export type Job = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  tasks: string[];
  image: string;
};

// Eine Quelle fuer: Stellen-Karten, Funnel-Optionen und JobPosting-Schema.
export const jobs: Job[] = [
  {
    id: 'elektroinstallateur',
    title: 'Elektroinstallateur / Elektroniker',
    short: 'Energie- und Gebäudetechnik',
    description:
      'Du installierst und wartest elektrische Anlagen auf Baustellen und in Bestandsgebäuden in der Region.',
    icon: Cable,
    image: images.hausinstallation,
    tasks: [
      'Hausinstallation und Altbausanierung',
      'Erdungsanlagen und Baustrom',
      'Mess-, Prüf- und Wartungsarbeiten',
    ],
  },
  {
    id: 'schwachstromtechniker',
    title: 'Schwachstromtechniker',
    short: 'Brandmelde- und Sicherheitstechnik',
    description:
      'Du baust und betreust Brandmelde- und Schwachstromanlagen, ein wachsender Schwerpunkt im Betrieb.',
    icon: ShieldCheck,
    image: images.brandmelde,
    tasks: [
      'Brandmeldetechnik installieren und prüfen',
      'Daten- und Sicherheitsverkabelung',
      'Inbetriebnahme und Dokumentation',
    ],
  },
];

// Anforderungen (aus Briefing) - bewusst ehrlich, Ausbildung als Basis.
export const requirements: { label: string; icon: LucideIcon }[] = [
  { label: 'Abgeschlossene Ausbildung im Elektrobereich', icon: Wrench },
  { label: 'Führerschein (Klasse B)', icon: Cable },
  { label: 'Deutschkenntnisse idealerweise vorhanden', icon: Building2 },
  { label: 'Teamfähigkeit und Lust, sich einzubringen', icon: ShieldCheck },
];
