// Funnel-Definition und Vorqualifizierungs-Logik.
// Schritte und Antwortoptionen exakt aus dem Briefing.

export type ChoiceStep = {
  id: string;
  kind: 'single' | 'multi';
  question: string;
  help?: string;
  options: { value: string; label: string }[];
};

export const funnelSteps: ChoiceStep[] = [
  {
    id: 'position',
    kind: 'single',
    question: 'Für welchen Bereich interessierst du dich?',
    options: [
      { value: 'elektroinstallation', label: 'Elektroinstallation / Elektroniker' },
      { value: 'schwachstrom', label: 'Schwachstromtechnik' },
      { value: 'brandmelde', label: 'Brandmeldetechnik' },
      { value: 'andere', label: 'Andere Tätigkeit im Elektrobereich' },
    ],
  },
  {
    id: 'ausbildung',
    kind: 'single',
    question: 'Hast du eine abgeschlossene Ausbildung im Elektrobereich?',
    options: [
      { value: 'ja', label: 'Ja' },
      { value: 'in_ausbildung', label: 'Ich bin aktuell in Ausbildung' },
      { value: 'vergleichbar', label: 'Ich habe vergleichbare Erfahrung' },
      { value: 'nein', label: 'Nein' },
    ],
  },
  {
    id: 'erfahrung',
    kind: 'single',
    question: 'Wie viel Berufserfahrung bringst du mit?',
    options: [
      { value: 'unter1', label: 'Unter 1 Jahr' },
      { value: '1bis3', label: '1 bis 3 Jahre' },
      { value: '3bis5', label: '3 bis 5 Jahre' },
      { value: 'ueber5', label: 'Mehr als 5 Jahre' },
    ],
  },
  {
    id: 'fuehrerschein',
    kind: 'single',
    question: 'Hast du einen Führerschein?',
    options: [
      { value: 'ja', label: 'Ja' },
      { value: 'in_kuerze', label: 'In Kürze' },
      { value: 'nein', label: 'Nein' },
    ],
  },
  {
    id: 'deutsch',
    kind: 'single',
    question: 'Wie gut sind deine Deutschkenntnisse?',
    options: [
      { value: 'sehr_gut', label: 'Sehr gut' },
      { value: 'gut', label: 'Gut' },
      { value: 'grund', label: 'Grundkenntnisse' },
      { value: 'kaum', label: 'Kaum / keine Deutschkenntnisse' },
    ],
  },
  {
    id: 'region',
    kind: 'single',
    question: 'Aus welcher Region kommst du?',
    options: [
      { value: 'wriezen', label: 'Wriezen / direkte Umgebung' },
      { value: 'mol', label: 'Märkisch-Oderland' },
      { value: 'bb', label: 'Berlin / Brandenburg' },
      { value: 'andere', label: 'Andere Region' },
    ],
  },
  {
    id: 'pendeln',
    kind: 'single',
    question: 'Bist du bereit, nach Wriezen bzw. in die Region zu pendeln?',
    options: [
      { value: 'ja', label: 'Ja' },
      { value: 'entfernung', label: 'Kommt auf die Entfernung an' },
      { value: 'nein', label: 'Nein' },
    ],
  },
  {
    id: 'wechsel',
    kind: 'single',
    question: 'Wann könntest du dir einen Wechsel vorstellen?',
    options: [
      { value: 'sofort', label: 'Sofort' },
      { value: '1bis3', label: 'In den nächsten 1 bis 3 Monaten' },
      { value: '3bis6', label: 'In 3 bis 6 Monaten' },
      { value: 'info', label: 'Erstmal nur unverbindlich informieren' },
    ],
  },
  {
    id: 'wichtig',
    kind: 'multi',
    question: 'Was ist dir bei einem Arbeitgeber besonders wichtig?',
    help: 'Mehrfachauswahl möglich.',
    options: [
      { value: 'team', label: 'Gutes Team' },
      { value: 'sicher', label: 'Sicherer Arbeitsplatz' },
      { value: 'bezahlung', label: 'Faire Bezahlung' },
      { value: 'wege', label: 'Kurze Wege / direkte Kommunikation' },
      { value: 'abwechslung', label: 'Abwechslungsreiche Aufgaben' },
      { value: 'perspektive', label: 'Langfristige Perspektive' },
    ],
  },
];

export type FunnelAnswers = Record<string, string | string[]>;

export type Contact = {
  name: string;
  phone: string;
  email: string;
  wohnort?: string;
  nachricht?: string;
  consent: boolean;
  // Honeypot - muss leer bleiben (Bot-Schutz).
  website?: string;
};

export type FitLevel = 'stark' | 'mittel' | 'schwach';

// Vorqualifizierungs-Logik aus dem Briefing.
// Ausbildung ist der staerkste Hebel, dann Fuehrerschein, Deutsch, Region, Wechselbereitschaft.
export function evaluateFit(a: FunnelAnswers): { level: FitLevel; score: number; reasons: string[] } {
  let score = 0;
  const reasons: string[] = [];

  // Ausbildung (staerkster Faktor)
  switch (a.ausbildung) {
    case 'ja':
      score += 3;
      reasons.push('Abgeschlossene Ausbildung');
      break;
    case 'vergleichbar':
      score += 1;
      reasons.push('Vergleichbare Erfahrung');
      break;
    case 'in_ausbildung':
      score += 1;
      reasons.push('Aktuell in Ausbildung');
      break;
    case 'nein':
      score -= 2;
      reasons.push('Keine Ausbildung (Fachpersonal gesucht)');
      break;
  }

  // Fuehrerschein
  if (a.fuehrerschein === 'ja') score += 1;
  else if (a.fuehrerschein === 'nein') {
    score -= 1;
    reasons.push('Kein Führerschein');
  }

  // Deutschkenntnisse
  if (a.deutsch === 'sehr_gut' || a.deutsch === 'gut') score += 1;
  else if (a.deutsch === 'kaum') {
    score -= 1;
    reasons.push('Geringe Deutschkenntnisse');
  }

  // Region / Pendelbereitschaft
  if (a.region === 'wriezen' || a.region === 'mol') score += 1;
  else if (a.pendeln === 'ja') score += 1;
  else if (a.pendeln === 'nein') {
    score -= 1;
    reasons.push('Nicht pendelbereit');
  }

  // Wechselbereitschaft
  if (a.wechsel === 'sofort' || a.wechsel === '1bis3') score += 1;
  else if (a.wechsel === 'info') reasons.push('Nur unverbindlich informierend');

  // Erfahrung (leichter Bonus)
  if (a.erfahrung === '3bis5' || a.erfahrung === 'ueber5') score += 1;

  let level: FitLevel;
  if (a.ausbildung === 'ja' && score >= 5) level = 'stark';
  else if (score >= 2) level = 'mittel';
  else level = 'schwach';

  return { level, score, reasons };
}
