import { Metadata } from "next";
import { CaseStudiesContent } from "./case-studies-content";

export const metadata: Metadata = {
  title: "Case Studies - Deep Dives into Key Projects",
  description:
    "Explore detailed case studies of my key projects including ReddMaten (sustainable food marketplace) and RIDDLE Esports (Northern Europe's premier esports organization). Learn about the challenges, solutions, and results.",
  keywords: [
    "Case Studies",
    "Portfolio",
    "ReddMaten",
    "RIDDLE Esports",
    "Product Management",
    "Mohammed Barzinje",
    "Norway",
    "Sustainability",
    "Esports",
  ],
  openGraph: {
    title: "Case Studies - Mohammed Barzinje",
    description:
      "Deep dives into the challenges, solutions, and results behind my key projects.",
    type: "website",
    url: "/case-studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - Mohammed Barzinje",
    description:
      "Deep dives into the challenges, solutions, and results behind my key projects.",
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
  url: "https://mohammedbarzinje.com/case-studies",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ReddMaten",
        url: "https://mohammedbarzinje.com/case-studies/reddmaten",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "RIDDLE Esports",
        url: "https://mohammedbarzinje.com/case-studies/riddle-esports",
      },
    ],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudiesContent />
    </>
  );
}
