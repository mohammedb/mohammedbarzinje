import type { Metadata } from "next";
import { NettsideContent } from "./nettside-content";

export const metadata: Metadata = {
  title: "Enkel nettside for lokale bedrifter — fra 7 500 kr | Mohammed Barzinje",
  description:
    "Enkel, mobilvennlig nettside for lokale håndverkere og servicebedrifter. Fra 7 500 kr engangspris + 450 kr/mnd support (eks. mva.). Domene og hosting kommer i tillegg. Sarpsborg, Norge.",
  alternates: { canonical: "/nettside" },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Enkel nettside for lokale bedrifter — fra 7 500 kr",
    description:
      "En ryddig landingsside som gjør det lettere for lokale kunder å finne deg.",
    locale: "nb_NO",
  },
};

export default function NettsidePage() {
  return <NettsideContent />;
}
