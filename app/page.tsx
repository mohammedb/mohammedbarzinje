import { HomeContent } from "@/components/ui/home-content";

const SITE_URL = "https://mohammedbarzinje.com";

// Person — the canonical entity describing Mohammed
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Mohammed Barzinje",
  givenName: "Mohammed",
  familyName: "Barzinje",
  jobTitle: "Senior Product Manager",
  description:
    "Senior Product Manager based in Sarpsborg, Norway with 10+ years building digital products across esports, marketplaces, and consumer tech. Founder of ReddMaten and Riddle Esports. Co-founder of Enkelt.ai.",
  url: SITE_URL,
  image: `${SITE_URL}/meg2.png`,
  email: "mailto:digital@thepitch.no",
  nationality: {
    "@type": "Country",
    name: "Norway",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sarpsborg",
    addressCountry: "NO",
  },
  knowsLanguage: [
    { "@type": "Language", name: "Norwegian", alternateName: "no" },
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Kurdish", alternateName: "ku" },
    { "@type": "Language", name: "German", alternateName: "de" },
    { "@type": "Language", name: "Arabic", alternateName: "ar" },
  ],
  knowsAbout: [
    "Product Management",
    "Product Strategy",
    "Product Roadmaps",
    "Agile Methodologies",
    "Stakeholder Management",
    "User Experience Design",
    "Marketplace Development",
    "Esports Operations",
    "Tournament Platforms",
    "AI Product Development",
    "Paid Search Marketing",
    "Digital Marketing",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Product Manager",
    occupationLocation: {
      "@type": "City",
      name: "Sarpsborg",
    },
    skills:
      "Product Strategy, Roadmapping, Stakeholder Management, UX, Agile, Data Analysis, Cross-functional Leadership",
    yearsOfExperience: 10,
  },
  alumniOf: [
    {
      "@type": "Organization",
      name: "ESL FACEIT Group",
      url: "https://www.eslfaceitgroup.com",
    },
    {
      "@type": "Organization",
      name: "s360",
      url: "https://www.s360digital.com",
    },
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Enkelt.ai",
      url: "https://enkelt.ai",
    },
    {
      "@type": "Organization",
      name: "ThePitch AS",
      url: "https://thepitch.no",
    },
    {
      "@type": "Organization",
      name: "ReddMaten",
      url: "https://reddmaten.no",
    },
  ],
  founder: [
    {
      "@type": "Organization",
      name: "ReddMaten",
      url: "https://reddmaten.no",
      description:
        "Norwegian D2C marketplace diverting 'imperfect' produce from farms straight to consumers.",
    },
    {
      "@type": "Organization",
      name: "Riddle Esports",
      url: "https://riddle.no",
      description:
        "Northern Europe's most-decorated League of Legends esports organization. Five national titles, EU Masters qualifier, 27-1 record.",
    },
    {
      "@type": "Organization",
      name: "Enkelt.ai",
      url: "https://enkelt.ai",
      description:
        "Pre-launch operating-system SaaS for esports organizations.",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/mohammed-barzinje-9237b5a5/",
    "https://riddle.no",
    "https://reddmaten.no",
    "https://enkelt.ai",
  ],
};

// ProfilePage — Google's canonical pattern for personal sites (mainEntity Person)
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profile`,
  url: SITE_URL,
  name: "Mohammed Barzinje | Senior Product Manager in Norway",
  description:
    "Portfolio and selected work of Mohammed Barzinje — Senior Product Manager based in Sarpsborg, Norway.",
  inLanguage: "en",
  mainEntity: { "@id": `${SITE_URL}/#person` },
  about: { "@id": `${SITE_URL}/#person` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/meg2.png`,
    caption: "Mohammed Barzinje",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Mohammed Barzinje — Senior Product Manager",
  url: SITE_URL,
  description:
    "Portfolio of Mohammed Barzinje, Senior Product Manager based in Norway specializing in digital products, esports ecosystems, and marketplace development.",
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#person` },
  author: { "@id": `${SITE_URL}/#person` },
};

// FAQPage — Princeton GEO research: +40% AI search visibility
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Mohammed Barzinje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mohammed Barzinje is a Senior Product Manager based in Sarpsborg, Norway with over 10 years of experience building digital products across esports, marketplaces, and consumer technology. He is the founder of ReddMaten and Riddle Esports, and co-founder of Enkelt.ai.",
      },
    },
    {
      "@type": "Question",
      name: "What does Mohammed Barzinje do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mohammed leads product strategy, roadmaps, and end-to-end execution for digital products. He currently works at ThePitch AS as a Marketing & AI Specialist, co-founds Enkelt.ai (an operating system for esports organizations), and is building ReddMaten — a Norwegian sustainability-first marketplace.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Mohammed Barzinje based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mohammed Barzinje is based in Sarpsborg, Norway (UTC+1) and works with clients and teams across Europe.",
      },
    },
    {
      "@type": "Question",
      name: "What companies has Mohammed Barzinje founded?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mohammed founded Riddle Esports in 2015 — Northern Europe's most-decorated League of Legends organization, with 5 national titles, EU Masters qualification, and a historic 27-1 record across three consecutive seasons. He also founded ReddMaten, a Norwegian direct-to-consumer marketplace for 'imperfect' produce, and co-founded Enkelt.ai, a SaaS platform for esports organizations.",
      },
    },
    {
      "@type": "Question",
      name: "What was Mohammed Barzinje's role at ESL FACEIT Group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At ESL FACEIT Group (2023-2024), Mohammed was a Senior Product Manager leading the tournament-ecosystem product surface for Gamers8 and the Esports World Cup — owning roadmap, KPIs, and cross-functional delivery for the largest esports festivals in the world.",
      },
    },
    {
      "@type": "Question",
      name: "What languages does Mohammed Barzinje speak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mohammed speaks five languages: Norwegian, English, Kurdish, German, and Arabic.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mohammed Barzinje available for work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mohammed is open to new product, advisory, and consulting opportunities. He can be reached via email at digital@thepitch.no or on LinkedIn.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Mohammed Barzinje specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mohammed specializes in three industries: esports (tournament platforms, organization operations, fan products), marketplaces (D2C commerce, sustainability, two-sided platforms), and AI-driven consumer and B2B SaaS.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeContent />
    </>
  );
}
