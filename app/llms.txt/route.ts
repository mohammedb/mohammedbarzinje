import { caseStudies } from "@/lib/case-studies";
import { configurations, faqs, products, profile, SITE_URL } from "@/lib/profile";
import { siteConfig } from "@/lib/seo";

// llms.txt (llmstxt.org): a Markdown map of the site for AI assistants, built from the same data as the pages
export const dynamic = "force-static";

export function GET() {
    const openTo = Object.values(configurations).map((config) => config.lookingFor);

    const body = [
        `# ${profile.name}`,
        "",
        `> ${siteConfig.description}`,
        "",
        `- Role: ${profile.role}`,
        `- Based in: ${profile.location}, ${profile.timeZone}`,
        `- Open to: ${openTo.join(", ")}`,
        `- Email: ${profile.email}`,
        `- LinkedIn: ${profile.linkedin}`,
        "",
        ...faqs.flatMap(({ question, answer }) => [`**${question}** ${answer}`, ""]),
        "## Pages",
        "",
        `- [Portfolio](${SITE_URL}): highlights, products, experience, specs and FAQ`,
        `- [Case studies](${SITE_URL}/case-studies): the challenge, solution and results behind each project`,
        ...caseStudies.map((cs) => `- [${cs.metaTitle}](${SITE_URL}/case-studies/${cs.slug}): ${cs.metaDescription}`),
        `- [CV](${SITE_URL}${profile.cv}): PDF in English`,
        "",
        "## Products",
        "",
        ...products.map(({ name, role, period, status, description, href }) => {
            const meta = [role, period, status?.label.toLowerCase()].filter(Boolean).join(", ");
            return `- [${name}](${href}): ${meta}. ${description}`;
        }),
        "",
    ].join("\n");

    return new Response(body, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
