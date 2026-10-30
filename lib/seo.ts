import { profile, SITE_URL } from "@/lib/profile";

// Metadata shared across pages. Next.js replaces the root openGraph with a page's own instead of
// merging them, so a page that sets openGraph spreads sharedOpenGraph into it. Pages leave twitter
// alone: the root sets the card type and handle, and Next.js copies title, description and image
// over from openGraph.

export const siteConfig = {
  name: profile.name,
  title: "Mohammed Barzinje | Senior Product Manager in Norway",
  description:
    "Senior Product Manager and founder in Norway, from the Esports World Cup to AI-personalized children's books. Open to PM, Product Lead and AI roles.",
  url: SITE_URL,
};

export const sharedOpenGraph = {
  siteName: siteConfig.name,
  locale: "en_US",
};

// The card drawn by app/opengraph-image.tsx, for pages that set openGraph without an image of their own
export const shareCard = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Mohammed Barzinje, Senior Product Manager in Sarpsborg, Norway. Built to ship.",
};
