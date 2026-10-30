import { MetadataRoute } from "next";
import { profile } from "@/lib/profile";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${profile.name}, ${profile.role}`,
        short_name: "M. Barzinje",
        description: siteConfig.description,
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait-primary",
        lang: "en",
        dir: "ltr",
        // Matches the canvas token and the viewport theme color
        background_color: "#08080a",
        theme_color: "#08080a",
        categories: ["business", "productivity", "portfolio"],
        icons: [
            { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
            { src: "/icon", sizes: "192x192", type: "image/png", purpose: "any" },
            { src: "/icon1", sizes: "512x512", type: "image/png", purpose: "any" },
            { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "any" },
        ],
    };
}
