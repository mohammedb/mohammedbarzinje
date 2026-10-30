import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { PROFILE_UPDATED, SITE_URL } from "@/lib/profile";

// lastmod is the date the content last changed, never the build time, so Google can trust it
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL;
    const latestCaseStudy = caseStudies.map((cs) => cs.updated).sort().at(-1);

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: PROFILE_UPDATED,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: latestCaseStudy,
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ];

    // Dynamic case study pages
    const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
        url: `${baseUrl}/case-studies/${cs.slug}`,
        lastModified: cs.updated,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...caseStudyPages];
}
