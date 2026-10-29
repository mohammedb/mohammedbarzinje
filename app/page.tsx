import { ActionDock } from "@/components/ui/action-dock";
import { Changelog } from "@/components/ui/changelog";
import { Contact } from "@/components/ui/contact";
import { Faq } from "@/components/ui/faq";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/ui/hero";
import { Highlights } from "@/components/ui/highlights";
import { Lineup } from "@/components/ui/lineup";
import { Navbar } from "@/components/ui/navbar";
import { Specs } from "@/components/ui/specs";
import { faqs, profile, SITE_URL } from "@/lib/profile";

const personId = `${SITE_URL}/#person`;
const ventureId = (key: string) => `${SITE_URL}/#org-${key}`;

// Organizations Mohammed founded or co-founded. Each one names the Person as founder
// (schema.org has no "founder" property on Person itself).
const ventures = [
  {
    key: "ditteventyr",
    name: "Ditt Eventyr",
    url: "https://www.ditteventyr.no",
    description: "Personalized children's books with AI illustrations of the child, printed in Norway.",
  },
  {
    key: "enkelt",
    name: "Enkelt.ai",
    url: "https://enkelt.ai",
    description: "Esports management platform for rosters, scrims, finances, scouting, contracts and scheduling.",
  },
  {
    key: "reddmaten",
    name: "ReddMaten",
    url: "https://reddmaten.no",
    description: "Marketplace concept connecting farmers directly with consumers to sell surplus and imperfect produce.",
  },
  {
    key: "riddle",
    name: "Riddle Esports",
    url: "https://riddle.no",
    foundingDate: "2015",
    description:
      "League of Legends esports organization with five national titles, EU Masters qualification and a 27-1 record.",
  },
];

const person = {
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  givenName: "Mohammed",
  familyName: "Barzinje",
  jobTitle: profile.role,
  description:
    "Senior Product Manager in Sarpsborg, Norway, with 10+ years building products, teams and brands across esports, marketplaces and AI. Previously Senior Product Manager at ESL FACEIT Group on Gamers8 and the Esports World Cup. Founder of Riddle Esports, ReddMaten and Enkelt.ai, technical co-founder of Ditt Eventyr.",
  url: SITE_URL,
  image: `${SITE_URL}${profile.portrait}`,
  email: `mailto:${profile.email}`,
  nationality: { "@type": "Country", name: "Norway" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sarpsborg",
    addressCountry: "NO",
  },
  knowsLanguage: [
    { "@type": "Language", name: "Norwegian", alternateName: "no" },
    { "@type": "Language", name: "Kurdish", alternateName: "ku" },
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "German", alternateName: "de" },
    { "@type": "Language", name: "Arabic", alternateName: "ar" },
  ],
  knowsAbout: [
    "Product Management",
    "Product Strategy",
    "Product Roadmaps",
    "Product Leadership",
    "User Discovery",
    "Stakeholder Management",
    "Go-to-Market Strategy",
    "AI Product Development",
    "AI Automation",
    "AI Agents",
    "Marketplace Development",
    "Esports Operations",
    "Tournament Platforms",
    "Paid Search Marketing",
    "Digital Marketing",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: profile.role,
    occupationLocation: { "@type": "City", name: "Sarpsborg" },
    skills:
      "Product Strategy, Roadmapping, User Discovery, Stakeholder Management, Data Analysis, Cross-functional Leadership, AI Automation",
  },
  worksFor: [{ "@id": ventureId("enkelt") }, { "@id": ventureId("ditteventyr") }],
  alumniOf: [
    { "@type": "Organization", name: "ThePitch AS", url: "https://thepitch.no" },
    { "@type": "CollegeOrUniversity", name: "Østfold University College", url: "https://www.hiof.no" },
    { "@type": "Organization", name: "ESL FACEIT Group", url: "https://www.eslfaceitgroup.com" },
    { "@type": "Organization", name: "s360", url: "https://www.s360digital.com" },
  ],
  sameAs: [profile.linkedin],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    ...ventures.map(({ key, ...venture }) => ({
      "@type": "Organization",
      "@id": ventureId(key),
      ...venture,
      founder: { "@id": personId },
    })),
    // ProfilePage: Google's canonical pattern for personal sites
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "Mohammed Barzinje | Senior Product Manager in Norway",
      description:
        "Portfolio of Mohammed Barzinje, Senior Product Manager in Sarpsborg, Norway: highlights, products, experience and a copy-ready summary for hiring managers.",
      inLanguage: "en",
      mainEntity: { "@id": personId },
      about: { "@id": personId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}${profile.portrait}`,
        caption: profile.name,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: profile.name,
      url: SITE_URL,
      description:
        "Portfolio of Mohammed Barzinje, Senior Product Manager in Norway: products shipped across esports, marketplaces and AI.",
      inLanguage: "en",
      publisher: { "@id": personId },
      author: { "@id": personId },
    },
    // Mirrors the visible FAQ section 1:1
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Escape "<" so no string in the data can close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <Highlights />
        <Lineup />
        <Changelog />
        <Specs />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ActionDock />
    </>
  );
}
