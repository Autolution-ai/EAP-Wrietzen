import { NextResponse } from 'next/server';
import { evaluateFit, type Contact, type FunnelAnswers } from '@/lib/funnel';

type Payload = {
  answers: FunnelAnswers;
  contact: Contact;
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const { answers, contact } = body ?? {};

  // Honeypot: gefuelltes Feld = Bot. Still mit 200 antworten, nichts verarbeiten.
  if (contact?.website) {
    return NextResponse.json({ ok: true });
  }

  // Server-seitige Mindestvalidierung.
  if (!contact?.name || !contact?.email || !contact?.phone || !contact?.consent) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }
  if (!/.+@.+\..+/.test(contact.email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }

  // Fit-Score serverseitig (nicht dem Client vertrauen).
  const fit = evaluateFit(answers ?? {});

  // Strukturierte Aufbereitung fuer den spaeteren Versand.
  const lead = {
    receivedAt: new Date().toISOString(),
    contact: {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      wohnort: contact.wohnort ?? '',
      nachricht: contact.nachricht ?? '',
    },
    answers,
    fit,
  };

  // Strukturiertes Server-Log (in Vercel-Logs sichtbar).
  console.log('[bewerbung] neuer Lead', JSON.stringify(lead));

  // TODO: Hier echten Versand anbinden, z. B.:
  //   - E-Mail via Resend (process.env.RESEND_API_KEY) an process.env.BEWERBUNG_EMPFAENGER
  //   - oder Weiterleitung an CRM / Webhook
  // Aktuell wird der Lead nur geloggt (Demo). Kunde traegt Versandweg ein.

  return NextResponse.json({ ok: true, fit: fit.level });
}
