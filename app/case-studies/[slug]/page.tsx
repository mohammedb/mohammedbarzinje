import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";
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
              width: 1200,
              height: 630,
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

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${caseStudy.title} - ${caseStudy.tagline}`,
    description: caseStudy.challenge,
    author: {
      "@type": "Person",
      name: "Mohammed Barzinje",
      url: "https://mohammedbarzinje.com",
    },
    publisher: {
      "@type": "Person",
      name: "Mohammed Barzinje",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mohammedbarzinje.com/case-studies/${slug}`,
    },
    keywords: [caseStudy.category, ...caseStudy.technologies].join(", "),
    about: {
      "@type": "CreativeWork",
      name: caseStudy.title,
      description: caseStudy.tagline,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const jsonLd = generateJsonLd(slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CaseStudyContent caseStudy={caseStudy} currentSlug={slug} />
    </>
  );
}
