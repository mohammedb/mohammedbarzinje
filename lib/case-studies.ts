export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  bg: string;
  logo?: string;

  // Core content
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];

  // Meta
  timeline: string;
  role: string;
  technologies: string[];
  externalLink?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "reddmaten",
    title: "ReddMaten",
    category: "Sustainability",
    tagline: "Saving 'ugly' produce from going to waste",
    bg: "bg-[#cafb42]",
    logo: "/projects/reddmaten.png",

    challenge:
      "Every year, millions of tons of perfectly edible produce are discarded simply because they don't meet cosmetic standards. Farmers lose revenue, consumers miss out on affordable options, and the environmental impact is massive. Traditional supply chains have no room for 'imperfect' fruits and vegetables.",

    solution:
      "Built ReddMaten, a direct-to-consumer marketplace connecting Norwegian farms directly to environmentally conscious consumers. The platform handles everything from farmer onboarding and inventory management to logistics coordination and subscription boxes. By cutting out middlemen and embracing imperfection, we created a win-win-win for farmers, consumers, and the planet.",

    results: [
      { metric: "Status", value: "Building" },
      { metric: "Stage", value: "Early" },
      { metric: "Launch", value: "2026" },
      { metric: "Focus", value: "Norway" },
    ],

    timeline: "2024 - Present",
    role: "Founder & Full-Stack Developer",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vipps", "Vercel"],
    externalLink: "https://reddmaten.no",
  },
  {
    slug: "riddle-esports",
    title: "RIDDLE Esports",
    category: "Esports",
    tagline: "Building Northern Europe's premier esports organization",
    bg: "bg-[#b0aefb]",
    logo: "/projects/riddle.png",

    challenge:
      "The Norwegian esports scene lacked a professional, sustainable organization that could compete at the highest European level. Most teams were short-lived, poorly managed, and couldn't provide the infrastructure players needed to develop into world-class competitors.",

    solution:
      "Founded and grew RIDDLE from a grassroots team into a multi-title esports organization. Built comprehensive player development programs, secured major sponsorships, and created operational systems for scouting, coaching, and competition. Dominated Norwegian League of Legends for 6+ years with an unprecedented 27-1 record across 3 consecutive seasons. Qualified for EU Masters and reached 17th in European rankings.",

    results: [
      { metric: "National Titles", value: "5+" },
      { metric: "Historic Record", value: "27-1" },
      { metric: "Prize Money", value: "$48,904" },
      { metric: "Years Active", value: "10" },
    ],

    timeline: "2015 - 2025",
    role: "Founder & General Manager",
    technologies: ["Discord", "Notion", "Analytics", "Streaming", "Event Production"],
    externalLink: "https://riddle.no",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
