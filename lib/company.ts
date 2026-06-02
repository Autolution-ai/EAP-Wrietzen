// Zentrale Firmendaten. Platzhalter sind klar markiert und vom Kunden
// vor dem echten Go-Live zu ersetzen (Impressum-Pflicht DE).

export const company = {
  name: 'EAP', // TODO: vollstaendigen Firmennamen einsetzen (z. B. "EAP Elektroanlagen Wriezen GmbH")
  shortName: 'EAP',
  region: 'Wriezen / Märkisch-Oderland',
  city: 'Wriezen',
  // TODO: echte Kontaktdaten eintragen
  street: 'Musterstraße 1', // TODO
  zip: '16269', // PLZ Wriezen
  phone: '+49 0000 000000', // TODO
  email: 'bewerbung@example.de', // TODO
  // Platzhalter-Kennzahlen fuer den Vertrauensanker (TODO: durch echte Zahlen ersetzen)
  stats: {
    yearsLabel: 'seit Jahren', // TODO: konkrete Jahreszahl/Gruendungsjahr
    teamSize: 'eingespieltes Team', // TODO: konkrete Teamgroesse
    region: 'Märkisch-Oderland',
  },
} as const;
