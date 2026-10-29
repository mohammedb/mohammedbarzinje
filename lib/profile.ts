// Single source of truth for everything the landing page says about Mohammed.
// The JSON-LD in app/page.tsx reads from here too, so visible copy and structured data stay in sync.
// House style: no em or en dashes in visible copy (use "2023-24", "27-1").

import { DEFAULT_CONFIG, type ConfigId } from "@/lib/config";

export const SITE_URL = "https://mohammedbarzinje.com";

export const profile = {
    name: "Mohammed Barzinje",
    role: "Senior Product Manager",
    location: "Sarpsborg, Norway",
    timeZone: "CET (UTC+1)",
    email: "mohammedbarzinje@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohammed-barzinje-9237b5a5/",
    linkedinShort: "linkedin.com/in/mohammed-barzinje-9237b5a5",
    cv: "/Resume.pdf",
    cvFileName: "Mohammed-Barzinje-CV.pdf",
    portrait: "/meg2.png",
} as const;

export interface Configuration {
    /** Label on the configuration switch */
    label: string;
    role: string;
    /** Hero subline, 20 words max */
    pitch: string;
    lookingFor: string;
    /** One line above the highlights grid */
    highlightsIntro: string;
    /** Paragraph used in the copy-ready summary for hiring managers */
    summary: string;
}

export const configurations: Record<ConfigId, Configuration> = {
    pm: {
        label: "Senior PM",
        role: "Senior Product Manager",
        pitch: "Senior Product Manager with ten years of launches, from the Esports World Cup to AI-personalized children's books.",
        lookingFor: "Senior Product Manager roles",
        highlightsIntro: "Senior PM configuration: roadmaps, KPIs and delivery at festival scale.",
        summary:
            "10+ years shipping digital products. Senior Product Manager at ESL FACEIT Group for Gamers8 and the Esports World Cup, owning roadmap, KPIs and cross-functional delivery. Technical co-founder of Ditt Eventyr (AI-personalized children's books) and co-founder of Enkelt.ai (esports management platform, live on web and iPhone).",
    },
    lead: {
        label: "Product Lead",
        role: "Product Lead",
        pitch: "Product leader who builds from zero: ten years running Riddle Esports, now co-founder of Enkelt.ai and Ditt Eventyr.",
        lookingFor: "Product Lead and Head of Product roles",
        highlightsIntro: "Product Lead configuration: organizations and products built from zero.",
        summary:
            "Founder and operator. Built Riddle Esports from zero and ran it for ten years: five national titles, a 27-1 run and EU Masters qualification. Co-founder and Product Lead of Enkelt.ai, technical co-founder of Ditt Eventyr and founder of ReddMaten. Previously Senior Product Manager at ESL FACEIT Group for the Esports World Cup.",
    },
    ai: {
        label: "AI product",
        role: "AI Product & Automation",
        pitch: "AI product builder: AI-personalized books at Ditt Eventyr, AI agents at ThePitch, and products shipped with Claude Code.",
        lookingFor: "AI product and automation roles",
        highlightsIntro: "AI product configuration: AI pipelines and automation running in production.",
        summary:
            "Builds AI products end to end. Technical co-founder of Ditt Eventyr, where an AI illustration pipeline puts a child's face into a hardcover book printed in Norway. Marketing & AI Specialist at ThePitch AS, building AI automation and agents for paid search. Ships software with Claude Code, including GGWP Studio. 10+ years in product, including ESL FACEIT Group.",
    },
};

/** Plain-text summary a recruiter can paste straight into an email or ATS note. */
export function hiringSummary(id: ConfigId): string {
    const config = configurations[id];
    const portfolio = id === DEFAULT_CONFIG ? "mohammedbarzinje.com" : `mohammedbarzinje.com/?for=${id}`;

    return [
        `${profile.name}: ${config.role}, ${profile.location}`,
        "",
        config.summary,
        "",
        `Looking for: ${config.lookingFor}`,
        "Languages: Norwegian, Kurdish, English, German, Arabic",
        `Email: ${profile.email}`,
        `LinkedIn: ${profile.linkedinShort}`,
        `Portfolio: ${portfolio}`,
    ].join("\n");
}

export interface Img {
    src: string;
    alt: string;
}

export interface Logo extends Img {
    width: number;
    height: number;
}

const ewcLogo: Logo = { src: "/logos/ewc.png", alt: "Esports World Cup", width: 1024, height: 300 };

const shots = {
    ditteventyr: {
        src: "/projects/ditteventyr.jpg",
        alt: "Ditt Eventyr homepage: a personalized children's book where the child becomes the hero",
    },
    enkelt: { src: "/projects/enkelt.jpg", alt: "Enkelt.ai homepage: esports management, made simple" },
    reddmaten: { src: "/projects/reddmaten.jpg", alt: "ReddMaten homepage: save food and support local farmers" },
    riddle: { src: "/projects/riddle.jpg", alt: "Riddle Esports: the official history of the organization" },
    ggwp: { src: "/projects/ggwp.jpg", alt: "GGWP Studio homepage: broadcast software for esports leagues" },
} satisfies Record<string, Img>;

export const heroCallouts = [
    { value: "10+ years", label: "in product, since 2015" },
    { value: "5 languages", label: "NO, KU, EN, DE, AR" },
    { value: "ESL FACEIT", label: "Gamers8 and Esports World Cup" },
    { value: "4 ventures", label: "founded or co-founded" },
] as const;

export interface Highlight {
    org: string;
    meta: string;
    title: string;
    body: string;
    /** Big number for stat tiles */
    value?: string;
    image?: Img;
    logo?: Logo;
    stats?: { value: string; label: string }[];
    href?: string;
}

export const highlights: Record<ConfigId, { feature: Highlight; side: [Highlight, Highlight] }> = {
    pm: {
        feature: {
            org: "ESL FACEIT Group",
            meta: "Senior Product Manager, 2023-24",
            title: "Product for the world's largest esports festivals.",
            body: "Owned roadmap, KPIs and cross-functional delivery for the tournament-ecosystem product behind Gamers8 and the Esports World Cup.",
            logo: ewcLogo,
            href: "https://esportsworldcup.com/en",
        },
        side: [
            {
                org: "Track record",
                meta: "Since 2015",
                value: "10+",
                title: "years shipping digital products",
                body: "From founding Riddle Esports to AI products in production today.",
            },
            {
                org: "Ditt Eventyr",
                meta: "Technical co-founder",
                title: "AI-personalized children's books, live in Norway.",
                body: "One uploaded photo becomes a hardcover book. Built and runs the store, the AI pipeline and privacy.",
                image: shots.ditteventyr,
                href: "https://www.ditteventyr.no",
            },
        ],
    },
    lead: {
        feature: {
            org: "Riddle Esports",
            meta: "Founder & General Manager, 2015-25",
            title: "Built a championship organization from zero.",
            body: "Ten years of scouting, sponsorships and operations, from a grassroots team to EU Masters qualification.",
            image: shots.riddle,
            stats: [
                { value: "5", label: "national titles" },
                { value: "27-1", label: "match record" },
                { value: "$48,904", label: "prize money" },
            ],
            href: "/case-studies/riddle-esports",
        },
        side: [
            {
                org: "Ventures",
                meta: "2015 to now",
                value: "4",
                title: "ventures founded or co-founded",
                body: "Riddle Esports, ReddMaten, Enkelt.ai and Ditt Eventyr.",
            },
            {
                org: "Enkelt.ai",
                meta: "Co-founder & Product Lead",
                title: "One platform instead of ten scattered tools.",
                body: "Rosters, scrims, finances, scouting, contracts and scheduling for esports teams. Live on web and iPhone.",
                image: shots.enkelt,
                href: "https://enkelt.ai",
            },
        ],
    },
    ai: {
        feature: {
            org: "Ditt Eventyr",
            meta: "Technical co-founder",
            title: "An AI pipeline that makes a child the hero of the book.",
            body: "Upload one photo and the AI illustrations carry the child's face through a hardcover book printed in Norway. Names are encrypted and photos stored privately.",
            image: shots.ditteventyr,
            href: "https://www.ditteventyr.no",
        },
        side: [
            {
                org: "ThePitch AS",
                meta: "Marketing & AI Specialist, 2026-now",
                title: "AI agents and automation for paid search.",
                body: "Builds AI automation and agents into day-to-day paid search work.",
            },
            {
                org: "GGWP Studio",
                meta: "Full-stack, AI-assisted",
                title: "Ships production software with Claude Code.",
                body: "Broadcast graphics for esports leagues, built with Next.js and Supabase.",
                image: shots.ggwp,
                href: "https://ggwp.no",
            },
        ],
    },
};

export interface Product {
    name: string;
    role: string;
    period?: string;
    status?: { label: string; live?: boolean };
    description: string;
    href: string;
    image?: Img;
    logo?: Logo;
    caseStudy?: string;
}

export const products: Product[] = [
    {
        name: "Ditt Eventyr",
        role: "Technical co-founder",
        status: { label: "Live", live: true },
        description:
            "Personalized children's books: the child's name in the story and their face in AI illustrations, printed in Norway.",
        href: "https://www.ditteventyr.no",
        image: shots.ditteventyr,
    },
    {
        name: "Enkelt.ai",
        role: "Co-founder & Product Lead",
        period: "2026-now",
        status: { label: "Live", live: true },
        description: "Esports management in one place: rosters, scrims, finances, scouting, contracts and scheduling.",
        href: "https://enkelt.ai",
        image: shots.enkelt,
    },
    {
        name: "ReddMaten",
        role: "Founder & Product Lead",
        period: "2025-now",
        status: { label: "Waitlist" },
        description: "A local marketplace where farmers sell surplus produce straight to consumers.",
        href: "https://reddmaten.no",
        image: shots.reddmaten,
        caseStudy: "/case-studies/reddmaten",
    },
    {
        name: "Riddle Esports",
        role: "Founder & GM",
        period: "2015-25",
        description: "Five national titles, a 27-1 run and EU Masters qualification in ten years.",
        href: "https://riddle.no",
        image: shots.riddle,
        caseStudy: "/case-studies/riddle-esports",
    },
    {
        name: "Esports World Cup",
        role: "Senior PM, ESL FACEIT Group",
        period: "2023-24",
        description: "Tournament-ecosystem product for Gamers8 and the Esports World Cup.",
        href: "https://esportsworldcup.com/en",
        logo: ewcLogo,
    },
    {
        name: "GGWP Studio",
        role: "Designed & built",
        status: { label: "Early access" },
        description: "Broadcast graphics for esports leagues, run from the browser and played out through OBS.",
        href: "https://ggwp.no",
        image: shots.ggwp,
    },
];

export const alsoBuilt = { name: "Samtak", href: "https://samtakhelse.no", note: "client website and IT support" };

export interface Release {
    org: string;
    role: string;
    /** Start year for current roles, full span for past ones */
    period?: string;
    summary: string;
    href?: string;
}

export const currentReleases: Release[] = [
    {
        org: "Enkelt.ai",
        role: "Co-founder & Product Lead",
        period: "Since 2026",
        summary: "Esports management platform replacing ten scattered tools. Live on web and iPhone.",
        href: "https://enkelt.ai",
    },
    {
        org: "Ditt Eventyr",
        role: "Technical co-founder",
        summary: "AI-personalized children's books, printed in Norway. Owns the store, the AI pipeline and privacy.",
        href: "https://www.ditteventyr.no",
    },
    {
        org: "ThePitch AS",
        role: "Marketing & AI Specialist",
        period: "Since 2026",
        summary: "Paid search, plus AI automation and agents.",
        href: "https://thepitch.no",
    },
    {
        org: "ReddMaten",
        role: "Founder & Product Lead",
        period: "Since 2025",
        summary: "Local marketplace for surplus produce, straight from farms. Pre-launch with a waitlist.",
        href: "https://reddmaten.no",
    },
];

export const pastReleases: Release[] = [
    {
        org: "ESL FACEIT Group",
        role: "Senior Product Manager",
        period: "2023-24",
        summary:
            "Tournament-ecosystem product for Gamers8 and the Esports World Cup: roadmap, KPIs and cross-functional delivery.",
    },
    {
        org: "s360",
        role: "Digital Marketing Manager",
        period: "2021-23",
        summary: "Paid search and analytics for enterprise clients, including Toyota Norway.",
    },
    {
        org: "Riddle Esports",
        role: "Founder & General Manager",
        period: "2015-25",
        summary: "Five national titles, a 27-1 run and EU Masters qualification.",
        href: "/case-studies/riddle-esports",
    },
];

export const featuredSpecs = [
    { value: "10+", label: "Years in product", note: "Shipping since 2015" },
    { value: "4", label: "Ventures", note: "Founded or co-founded" },
    { value: "5", label: "Languages", note: "Norwegian, Kurdish, English, German, Arabic" },
    { value: "27-1", label: "Match record", note: "Riddle Esports, three seasons" },
] as const;

export const specGroups: { label: string; items: string[] }[] = [
    { label: "Open to", items: ["Senior Product Manager", "Product Lead / Head of Product", "AI product & automation"] },
    { label: "Based in", items: ["Sarpsborg, Norway", "CET (UTC+1)"] },
    {
        label: "Product",
        items: ["Product strategy", "Roadmapping", "User research", "Stakeholder management", "Sprint planning", "Data & analytics"],
    },
    { label: "Growth", items: ["SEM & paid search", "Analytics", "AI automation & agents"] },
    { label: "Leadership", items: ["Ten years as founder & GM", "Cross-functional delivery", "Esports operations"] },
    {
        label: "Build stack",
        items: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Node.js",
            "PostgreSQL",
            "Supabase",
            "REST APIs",
            "Git",
            "Vercel",
            "Claude Code",
        ],
    },
    {
        label: "Languages",
        items: [
            "Norwegian (native)",
            "Kurdish (native)",
            "English (fluent)",
            "German (conversational)",
            "Arabic (conversational)",
        ],
    },
    { label: "Education", items: ["Bachelor in Information Systems, Østfold University College, 2014-17"] },
    {
        label: "Riddle Esports",
        items: [
            "5 national titles, including Telenorligaen, Telialigaen, GGLigaen and NLC Spring 2023",
            "EU Masters qualification",
            "Top 4 in NLC, 17th in Europe (May 2023)",
            "$48,904 prize money",
            "6+ game titles",
        ],
    },
];

export const clients: (Logo & { displayHeight: number })[] = [
    { src: "/logos/esl-mono.png", alt: "ESL FACEIT Group", width: 1000, height: 746, displayHeight: 40 },
    { ...ewcLogo, displayHeight: 28 },
    { src: "/logos/toyota.svg", alt: "Toyota", width: 950, height: 157, displayHeight: 20 },
    { src: "/logos/microsoft.png", alt: "Microsoft", width: 2560, height: 546, displayHeight: 26 },
    { src: "/logos/heroic.png", alt: "Heroic", width: 682, height: 602, displayHeight: 40 },
];

// Visible on the page and mirrored 1:1 in the FAQPage JSON-LD. Recruiter questions first.
export const faqs: { question: string; answer: string }[] = [
    {
        question: "Is Mohammed Barzinje open to new roles?",
        answer: "Yes. Mohammed is open to Senior Product Manager, Product Lead or Head of Product, and AI product roles. The fastest route is email at mohammedbarzinje@gmail.com or a message on LinkedIn.",
    },
    {
        question: "Where is Mohammed Barzinje based?",
        answer: "Sarpsborg, Norway, in the CET time zone (UTC+1). Mohammed works with teams across Europe and has worked on site in Riyadh for ESL FACEIT Group.",
    },
    {
        question: "Who is Mohammed Barzinje?",
        answer: "Mohammed Barzinje is a Senior Product Manager based in Sarpsborg, Norway, with more than ten years of experience building digital products across esports, marketplaces and AI. Previously Senior Product Manager at ESL FACEIT Group; founder of Riddle Esports and ReddMaten; co-founder of Enkelt.ai and Ditt Eventyr.",
    },
    {
        question: "What did Mohammed do at ESL FACEIT Group?",
        answer: "From 2023 to 2024, Mohammed was a Senior Product Manager on the tournament-ecosystem product for Gamers8 and the Esports World Cup, owning the roadmap, KPIs and cross-functional delivery for the world's largest esports festivals.",
    },
    {
        question: "What companies has Mohammed Barzinje founded?",
        answer: "Riddle Esports in 2015, run for ten years: five national titles, EU Masters qualification and a 27-1 record across three seasons. Mohammed also founded ReddMaten, a local marketplace for surplus produce, and co-founded Enkelt.ai, an esports management platform, and Ditt Eventyr, a service for AI-personalized children's books.",
    },
    {
        question: "What AI products has Mohammed built?",
        answer: "As technical co-founder of Ditt Eventyr, Mohammed built and runs the AI illustration pipeline that puts a child's face into a personalized book. At ThePitch AS the focus is AI automation and agents for paid search, and Mohammed ships software with Claude Code, including GGWP Studio.",
    },
    {
        question: "Which languages does Mohammed speak?",
        answer: "Five: Norwegian and Kurdish (native), English (fluent), and German and Arabic (conversational).",
    },
    {
        question: "Which industries does Mohammed know best?",
        answer: "Esports (tournament platforms, team operations, fan products), marketplaces (direct-to-consumer commerce, two-sided platforms) and AI-driven consumer and B2B software.",
    },
];
