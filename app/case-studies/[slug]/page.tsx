import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/profile";
import { CaseStudyContent } from "./case-study-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

// Generate dynamic metadata for each case study
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  const title = `${caseStudy.title} - ${caseStudy.tagline}`;
  const description = `${caseStudy.challenge.slice(0, 155)}...`;

  return {
    title,
    description,
    keywords: [
      caseStudy.title,
      caseStudy.category,
      ...caseStudy.technologies,
      "Case Study",
      "Mohammed Barzinje",
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `/case-studies/${slug}`,
      images: caseStudy.logo
        ? [
            {
              url: caseStudy.logo,
              width: 1600,
              height: 1000,
              alt: `${caseStudy.title} preview`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: caseStudy.logo ? [caseStudy.logo] : undefined,
    },
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
  };
}

// Generate JSON-LD structured data
function generateJsonLd(slug: string) {
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return null;

  const url = `${SITE_URL}/case-studies/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${caseStudy.title} - ${caseStudy.tagline}`,
    description: caseStudy.challenge,
    image: caseStudy.logo
      ? [`${SITE_URL}${caseStudy.logo}`]
      : undefined,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Mohammed Barzinje",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Mohammed Barzinje",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "en",
    articleSection: caseStudy.category,
    keywords: [caseStudy.category, ...caseStudy.technologies].join(", "),
    about: {
      "@type": "CreativeWork",
      name: caseStudy.title,
      description: caseStudy.tagline,
      url: caseStudy.externalLink,
    },
  };
}

function generateBreadcrumbJsonLd(slug: string) {
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return null;

  return {
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
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.title,
        item: `${SITE_URL}/case-studies/${slug}`,
      },
    ],
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const jsonLd = generateJsonLd(slug);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <CaseStudyContent caseStudy={caseStudy} currentSlug={slug} />
    </>
  );
}
