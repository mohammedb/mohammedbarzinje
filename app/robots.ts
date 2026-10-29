import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/profile";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = SITE_URL;

    const aiCrawlers = [
        "GPTBot",
        "ChatGPT-User",
        "OAI-SearchBot",
        "PerplexityBot",
        "Perplexity-User",
        "ClaudeBot",
        "Claude-Web",
        "anthropic-ai",
        "Google-Extended",
        "GoogleOther",
        "Applebot",
        "Applebot-Extended",
        "Bingbot",
        "Amazonbot",
        "Bytespider",
        "CCBot",
        "DuckAssistBot",
        "Diffbot",
        "FacebookBot",
        "meta-externalagent",
        "Mistral-AI",
        "YouBot",
    ];

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
            ...aiCrawlers.map((bot) => ({
                userAgent: bot,
                allow: "/",
                disallow: ["/api/"],
            })),
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
