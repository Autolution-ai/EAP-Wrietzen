// Hintergrundbilder, generiert via Higgsfield AI (lizenzfrei, eigene Ausgabe).
//
// TODO (vor echtem Go-Live): Diese Bilder herunterladen und lokal unter
// /public/images selbst hosten. Aktuell werden sie vom Higgsfield-CDN geladen
// (externer Request), was für eine Demo ok, für DSGVO-Konformität aber lokal
// gehostet sauberer ist. Danach in remotePatterns/CSS auf lokale Pfade umstellen.

export const images = {
  hero: 'https://d8j0ntlcm91z4.cloudfront.net/user_3064uXRqZDhsfEEjgzVarJDAKP6/hf_20260603_061342_c57ae856-7a65-4c5b-aa0a-e6fbf2d5e4d6.jpeg',
  brandmelde:
    'https://d8j0ntlcm91z4.cloudfront.net/user_3064uXRqZDhsfEEjgzVarJDAKP6/hf_20260603_061345_974a1b40-0a75-4d6a-9c24-4941cc2f85c7.jpeg',
  hausinstallation:
    'https://d8j0ntlcm91z4.cloudfront.net/user_3064uXRqZDhsfEEjgzVarJDAKP6/hf_20260603_061347_43f8baff-75d5-415e-84d1-8546a3c94eb7.jpeg',
} as const;
