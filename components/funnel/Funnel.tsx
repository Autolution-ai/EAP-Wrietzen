'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Loader2, PartyPopper, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/funnel/ProgressBar';
import { funnelSteps, evaluateFit, type FunnelAnswers, type Contact } from '@/lib/funnel';

// Stelle aus der Karriere-Sektion auf die Position-Frage mappen.
const stelleToPosition: Record<string, string> = {
  elektroinstallateur: 'elektroinstallation',
  schwachstromtechniker: 'schwachstrom',
};

const TOTAL = funnelSteps.length + 1; // Choice-Schritte + Kontaktschritt

const emptyContact: Contact = {
  name: '',
  phone: '',
  email: '',
  wohnort: '',
  nachricht: '',
  consent: false,
  website: '', // Honeypot
};

export function Funnel() {
  const params = useSearchParams();
  const [step, setStep] = useState(0); // 0 = Intro, 1..N = Choice, N+1 = Kontakt
  const [answers, setAnswers] = useState<FunnelAnswers>({});
  const [contact, setContact] = useState<Contact>(emptyContact);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  // Vorauswahl der Position aus ?stelle=
  useEffect(() => {
    const stelle = params.get('stelle');
    if (stelle && stelleToPosition[stelle]) {
      setAnswers((a) => ({ ...a, position: stelleToPosition[stelle] }));
    }
  }, [params]);

  const fit = useMemo(() => evaluateFit(answers), [answers]);

  const isIntro = step === 0;
  const isContact = step === funnelSteps.length + 1;
  const choiceIndex = step - 1;
  const choice = !isIntro && !isContact ? funnelSteps[choiceIndex] : null;

  function selectSingle(id: string, value: string) {
    setAnswers((a) => ({ ...a, [id]: value }));
    // sanftes Auto-Advance bei Einzelauswahl
    setTimeout(() => setStep((s) => Math.min(s + 1, TOTAL)), 250);
  }

  function toggleMulti(id: string, value: string) {
    setAnswers((a) => {
      const cur = Array.isArray(a[id]) ? (a[id] as string[]) : [];
      const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
      return { ...a, [id]: next };
    });
  }

  const canContinue = (() => {
    if (isIntro || isContact) return true;
    if (!choice) return false;
    const v = answers[choice.id];
    if (choice.kind === 'multi') return Array.isArray(v) && v.length > 0;
    return Boolean(v);
  })();

  const contactValid =
    contact.name.trim().length > 1 &&
    /.+@.+\..+/.test(contact.email) &&
    contact.phone.trim().length > 4 &&
    contact.consent;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!contactValid || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/bewerbung', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, contact, fit }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  // Erfolgs-/Bestaetigungsseite
  if (status === 'done') {
    return (
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-signal text-anthracite-950">
          <PartyPopper className="h-8 w-8" aria-hidden />
        </span>
        <h1 className="mt-6 text-3xl font-bold text-white">Danke für deine Bewerbung.</h1>
        <p className="mt-3 text-lg text-anthracite-300">Wir melden uns zeitnah bei dir.</p>
        <Link href="/" className="mt-8 inline-block text-signal hover:text-signal-400">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      {!isIntro && <ProgressBar current={step} total={TOTAL} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={isIntro ? '' : 'mt-8'}
        >
          {/* Schritt 1: Einstieg */}
          {isIntro && (
            <div className="text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-signal text-anthracite-950">
                <Zap className="h-7 w-7" aria-hidden />
              </span>
              <h1 className="mt-6 text-balance text-3xl font-extrabold text-white sm:text-4xl">
                Bewirb dich in unter 60 Sekunden
              </h1>
              <p className="mx-auto mt-4 max-w-md text-lg text-anthracite-300">
                Beantworte kurz ein paar Fragen, ganz ohne Anschreiben oder Lebenslauf.
              </p>
              <div className="mt-9 flex justify-center">
                <Button onClick={() => setStep(1)}>
                  Jetzt starten
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </Button>
              </div>
            </div>
          )}

          {/* Choice-Schritte */}
          {choice && (
            <fieldset>
              <legend className="text-balance text-2xl font-bold text-white sm:text-3xl">
                {choice.question}
              </legend>
              {choice.help && <p className="mt-2 text-sm text-anthracite-400">{choice.help}</p>}

              <div className="mt-7 grid gap-3">
                {choice.options.map((opt) => {
                  const v = answers[choice.id];
                  const active =
                    choice.kind === 'multi'
                      ? Array.isArray(v) && v.includes(opt.value)
                      : v === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        choice.kind === 'multi'
                          ? toggleMulti(choice.id, opt.value)
                          : selectSingle(choice.id, opt.value)
                      }
                      aria-pressed={active}
                      className={`flex cursor-pointer items-center justify-between rounded-xl border px-5 py-4 text-left text-base transition-colors duration-150 ${
                        active
                          ? 'border-signal bg-signal/10 text-white'
                          : 'border-anthracite-700 bg-anthracite-800 text-anthracite-300 hover:border-anthracite-500 hover:text-white'
                      }`}
                    >
                      {opt.label}
                      <span
                        className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border ${
                          active ? 'border-signal bg-signal text-anthracite-950' : 'border-anthracite-600'
                        }`}
                      >
                        {active && <Check className="h-4 w-4" aria-hidden />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          {/* Schritt 10: Kontaktdaten */}
          {isContact && (
            <form onSubmit={submit} noValidate>
              <h2 className="text-balance text-2xl font-bold text-white sm:text-3xl">
                Fast geschafft. Wie erreichen wir dich?
              </h2>
              <p className="mt-2 text-sm text-anthracite-400">
                Wir melden uns persönlich bei dir zurück.
              </p>

              <div className="mt-7 grid gap-4">
                <Field label="Name" required>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    className={inputClass}
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Telefonnummer" required>
                    <input
                      type="tel"
                      required
                      autoComplete="tel"
                      value={contact.phone}
                      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="E-Mail-Adresse" required>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={contact.email}
                      onChange={(e) => setContact({ ...contact, email: e.target.value })}
                      className={inputClass}
                    />
                  </Field>
                </div>
                <Field label="Aktueller Wohnort (optional)">
                  <input
                    type="text"
                    value={contact.wohnort}
                    onChange={(e) => setContact({ ...contact, wohnort: e.target.value })}
                    className={inputClass}
                  />
                </Field>
                <Field label="Kurze Nachricht (optional)">
                  <textarea
                    rows={3}
                    value={contact.nachricht}
                    onChange={(e) => setContact({ ...contact, nachricht: e.target.value })}
                    className={inputClass}
                  />
                </Field>

                {/* Honeypot, fuer Menschen unsichtbar */}
                <div className="absolute left-[-9999px]" aria-hidden>
                  <label>
                    Website
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={contact.website}
                      onChange={(e) => setContact({ ...contact, website: e.target.value })}
                    />
                  </label>
                </div>

                <label className="flex items-start gap-3 text-sm text-anthracite-300">
                  <input
                    type="checkbox"
                    checked={contact.consent}
                    onChange={(e) => setContact({ ...contact, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-signal"
                  />
                  <span>
                    Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Bewerbung
                    gespeichert werden. Mehr in der{' '}
                    <Link href="/datenschutz" className="text-signal hover:underline">
                      Datenschutzerklärung
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {status === 'error' && (
                <p className="mt-4 text-sm text-red-400">
                  Da ist etwas schiefgelaufen. Bitte versuche es erneut.
                </p>
              )}

              <Button
                type="submit"
                disabled={!contactValid || status === 'sending'}
                className="mt-7 w-full"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Wird gesendet…
                  </>
                ) : (
                  <>
                    Bewerbung absenden
                    <ArrowRight className="h-5 w-5" aria-hidden />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation: Zurueck / Weiter */}
      {!isIntro && (
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
            className="inline-flex cursor-pointer items-center gap-1 text-sm text-anthracite-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> Zurück
          </button>

          {!isContact && (
            <Button
              variant="secondary"
              disabled={!canContinue}
              onClick={() => canContinue && setStep((s) => Math.min(s + 1, TOTAL))}
              className="px-5 py-2.5 text-sm"
            >
              Weiter
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

const inputClass =
  'w-full rounded-lg border border-anthracite-700 bg-anthracite-900 px-4 py-3 text-white placeholder-anthracite-500 outline-none transition-colors focus:border-signal';

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-anthracite-300">
        {label}
        {required && <span className="text-signal"> *</span>}
      </span>
      {children}
    </label>
  );
}
