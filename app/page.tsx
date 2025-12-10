import { HomeContent } from "@/components/ui/home-content";

// JSON-LD structured data for the homepage
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammed Barzinje",
  jobTitle: "Senior Product Manager",
  description:
    "Senior Product Manager based in Norway with 10+ years experience in digital products, esports ecosystems, and marketplace development.",
  url: "https://mohammedbarzinje.com",
  sameAs: [
    "https://www.linkedin.com/in/mohammed-barzinje-9237b5a5/",
  ],
  knowsAbout: [
    "Product Management",
    "Product Strategy",
    "Agile Methodologies",
    "Stakeholder Management",
    "User Experience",
    "Digital Products",
    "Esports",
    "Marketplace Development",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "ESL FACEIT Group",
  },
  worksFor: {
    "@type": "Organization",
    name: "ReddMaten",
    url: "https://reddmaten.no",
  },
  founder: [
    {
      "@type": "Organization",
      name: "ReddMaten",
      url: "https://reddmaten.no",
    },
    {
      "@type": "Organization",
      name: "Riddle Esports",
      url: "https://riddle.no",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "Norway",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mohammed Barzinje - Senior Product Manager",
  url: "https://mohammedbarzinje.com",
  description:
    "Portfolio of Mohammed Barzinje, Senior Product Manager based in Norway specializing in digital products, esports ecosystems, and marketplace development.",
  author: {
    "@type": "Person",
    name: "Mohammed Barzinje",
  },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <HomeContent />
    </>
  );
}
