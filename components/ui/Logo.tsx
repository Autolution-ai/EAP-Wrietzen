// Wortmarke EAP GmbH – Elektro-Anlagen Petersdorf, als skalierbares SVG nachgebaut.
// TODO: Bei Bedarf durch die Original-Logo-Datei (z. B. /public/logo.svg) ersetzen
// fuer pixelgenaue Markentreue. Diese Variante ist hell fuer dunkle Hintergruende.

export function Logo({
  full = false,
  className = '',
}: {
  full?: boolean;
  className?: string;
}) {
  if (full) {
    return (
      <svg
        viewBox="0 0 260 84"
        role="img"
        aria-label="EAP GmbH – Elektro-Anlagen Petersdorf"
        className={className}
      >
        <g transform="skewX(-9)">
          <text
            x="14"
            y="44"
            fontFamily="var(--font-sans), sans-serif"
            fontWeight="800"
            fontStyle="italic"
            fontSize="46"
            letterSpacing="1"
            fill="#FFFFFF"
          >
            EAP
          </text>
        </g>
        <text
          x="132"
          y="44"
          fontFamily="var(--font-sans), sans-serif"
          fontWeight="600"
          fontSize="20"
          fill="#A6B0BA"
        >
          GmbH
        </text>
        <rect x="2" y="58" width="256" height="22" rx="2" fill="#FACC15" />
        <text
          x="130"
          y="73"
          textAnchor="middle"
          fontFamily="var(--font-sans), sans-serif"
          fontWeight="700"
          fontSize="12"
          letterSpacing="2"
          fill="#0B0D0F"
        >
          ELEKTRO-ANLAGEN PETERSDORF
        </text>
      </svg>
    );
  }

  // Kompakte Variante fuer die Navigation.
  return (
    <svg
      viewBox="0 0 150 48"
      role="img"
      aria-label="EAP GmbH – Elektro-Anlagen Petersdorf"
      className={className}
    >
      <g transform="skewX(-9)">
        <text
          x="8"
          y="30"
          fontFamily="var(--font-sans), sans-serif"
          fontWeight="800"
          fontStyle="italic"
          fontSize="30"
          letterSpacing="0.5"
          fill="currentColor"
        >
          EAP
        </text>
      </g>
      <text
        x="84"
        y="30"
        fontFamily="var(--font-sans), sans-serif"
        fontWeight="600"
        fontSize="13"
        fill="#A6B0BA"
      >
        GmbH
      </text>
      <rect x="2" y="38" width="146" height="3" rx="1.5" fill="#FACC15" />
    </svg>
  );
}
