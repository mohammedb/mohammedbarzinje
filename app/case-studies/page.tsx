import { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/profile";
import { shareCard, sharedOpenGraph } from "@/lib/seo";
import { CaseStudiesContent } from "./case-studies-content";

const title = "Case Studies: Marketplaces and Esports";
const description =
  "How Mohammed Barzinje designed ReddMaten, a marketplace concept for surplus produce, and built Riddle Esports from a grassroots team to EU Masters.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Case Studies",
    "Portfolio",
    "ReddMaten",
    "Riddle Esports",
    "Product Management",
    "Mohammed Barzinje",
    "Norway",
    "Sustainability",
    "Esports",
  ],
  openGraph: {
    ...sharedOpenGraph,
    title,
    description,
    type: "website",
    url: "/case-studies",
    images: [shareCard],
  },
  alternates: {
    canonical: "/case-studies",
  },
};

// JSON-LD structured data for the case studies collection
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies",
  description:
    "A collection of detailed case studies showcasing Mohammed Barzinje's key projects and their outcomes.",
  url: `${SITE_URL}/case-studies`,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Mohammed Barzinje",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies.map((cs, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: cs.title,
      url: `${SITE_URL}/case-studies/${cs.slug}`,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Case Studies",
      item: `${SITE_URL}/case-studies`,
    },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudiesContent />
    </>
  );
}
