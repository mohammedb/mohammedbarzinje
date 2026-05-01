"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

type Project = {
    title: string;
    category: string;
    role: string;
    description: string;
    tags: string[];
    url: string;
    previewImage?: string;
    caseStudySlug?: string;
    accent: "warm" | "cool" | "ink";
    span: "feature" | "side" | "wide";
};

const projects: Project[] = [
    {
        title: "ReddMaten",
        category: "Sustainability / Marketplace",
        role: "Founder · Full-stack",
        description:
            "A direct-to-consumer marketplace diverting 'imperfect' Norwegian produce from waste — built end-to-end from product strategy to engineering.",
        tags: ["Next.js", "TypeScript", "Supabase", "Vipps"],
        url: "https://reddmaten.no",
        previewImage: "/projects/reddmaten.png",
        caseStudySlug: "reddmaten",
        accent: "warm",
        span: "feature",
    },
    {
        title: "Riddle Esports",
        category: "Esports / Founder",
        role: "Founder · GM · 10 years",
        description:
            "Northern Europe's most-decorated League of Legends organization. EU Masters qualifier with five national titles.",
        tags: ["Operations", "Brand", "Roster"],
        url: "https://riddle.no",
        previewImage: "/projects/riddle.png",
        caseStudySlug: "riddle-esports",
        accent: "cool",
        span: "side",
    },
    {
        title: "Enkelt.ai",
        category: "Esports SaaS / Co-founder",
        role: "Co-founder · Product",
        description:
            "A unified operating system for esports organizations (pre-launch) — replacing 10+ fragmented tools with one workspace for scrims, contracts, scouting, financials, and roster ops.",
        tags: ["SaaS", "AI", "Next.js", "TypeScript"],
        url: "https://enkelt.ai",
        accent: "warm",
        span: "feature",
    },
    {
        title: "Gamers8 / EWC",
        category: "Event Tech / Tournament",
        role: "Senior PM · ESL FACEIT",
        description:
            "Owned tournament-ecosystem product surface for the world's largest esports festivals — driving roadmap and KPIs at global scale.",
        tags: ["Roadmap", "KPIs", "Cross-functional"],
        url: "https://esportsworldcup.com/en",
        accent: "ink",
        span: "side",
    },
];

export function Projects() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section id="work" className="relative py-32 md:py-40 px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
                {/* Section header */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 md:mb-24 items-end">
                    <div className="md:col-span-7">
                        <Reveal>
                            <div className="eyebrow mb-6">
                                <span className="dot" />
                                Selected Work <span className="text-[var(--ink-mute)] ml-1">/ N°.04</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h2 className="font-medium text-[clamp(2.5rem,6vw,5.5rem)] h-display text-[var(--ink)]">
                                Things I&apos;ve{" "}
                                <span className="italic font-normal text-[var(--ink-mute)]">
                                    built &amp; led.
                                </span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.15} className="md:col-span-5">
                        <div className="md:max-w-sm md:ml-auto text-[14px] uppercase tracking-[0.18em] text-[var(--ink-mute)] leading-[1.7]">
                            A short tour of the products and organizations I&apos;ve owned —
                            from zero-to-launch builds to global tournament platforms.
                        </div>
                    </Reveal>
                </div>

                {/* Bento */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={i}
                            onPreview={() => setSelected(project)}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <PreviewModal project={selected} onClose={() => setSelected(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}

function ProjectCard({
    project,
    index,
    onPreview,
}: {
    project: Project;
    index: number;
    onPreview: () => void;
}) {
    const colSpan =
        project.span === "feature"
            ? "lg:col-span-8"
            : project.span === "side"
            ? "lg:col-span-4"
            : "lg:col-span-12";

    const aspect =
        project.span === "feature"
            ? "aspect-[16/11]"
            : project.span === "side"
            ? "aspect-[10/13]"
            : "aspect-[21/8]";

    const accentBg =
        project.accent === "warm"
            ? "bg-[var(--accent-soft)]"
            : project.accent === "cool"
            ? "bg-[var(--indigo-soft)]"
            : "bg-[var(--canvas-deep)]";

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.85,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={colSpan}
        >
            <div className="bezel-shell h-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 group">
                <div className="bezel-core h-full overflow-hidden flex flex-col">
                    {/* Header rail */}
                    <div className="px-6 md:px-8 py-4 flex items-center justify-between border-b border-[var(--rule)]">
                        <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                            <span className="font-mono tabular-nums">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="h-3 w-px bg-[var(--rule-strong)]" aria-hidden="true" />
                            <span>{project.category}</span>
                        </div>
                        <span className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)] hidden md:inline">
                            {project.role}
                        </span>
                    </div>

                    {/* Preview */}
                    <button
                        type="button"
                        onClick={onPreview}
                        className={`relative w-full ${aspect} ${accentBg} overflow-hidden cursor-pointer group/preview`}
                        aria-label={`Preview ${project.title}`}
                    >
                        {project.previewImage ? (
                            <>
                                <Image
                                    src={project.previewImage}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/preview:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                            </>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-medium text-[clamp(3rem,10vw,8rem)] tracking-[-0.04em] text-[var(--ink)]/8 select-none">
                                    {project.title}
                                </span>
                            </div>
                        )}

                        {/* Floating preview pill */}
                        <span className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-[var(--surface)]/85 backdrop-blur-md border border-[var(--rule-strong)] py-1 pl-3 pr-1 shadow-[var(--shadow-sm)] opacity-0 group-hover/preview:opacity-100 translate-y-1 group-hover/preview:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                            <span className="text-[10.5px] uppercase tracking-[0.18em] font-medium text-[var(--ink-soft)]">
                                Preview
                            </span>
                            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)]">
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                    <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </span>
                    </button>

                    {/* Body */}
                    <div className="px-6 md:px-8 py-7 md:py-8 flex-1 flex flex-col gap-5">
                        <h3
                            className={`font-medium tracking-[-0.035em] leading-[1] text-[var(--ink)] ${
                                project.span === "side"
                                    ? "text-[34px] md:text-[40px]"
                                    : "text-[40px] md:text-[56px]"
                            }`}
                        >
                            {project.title}
                        </h3>
                        <p className="text-[14.5px] md:text-[15.5px] leading-[1.6] text-[var(--ink-soft)] max-w-2xl">
                            {project.description}
                        </p>

                        <div className="mt-auto pt-5 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full border border-[var(--rule-strong)] bg-[var(--canvas)] px-2.5 py-1 text-[10.5px] uppercase tracking-[0.18em] text-[var(--ink-soft)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                {project.caseStudySlug && (
                                    <Link
                                        href={`/case-studies/${project.caseStudySlug}`}
                                        className="text-[12.5px] font-medium tracking-tight text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors duration-300 inline-flex items-center gap-1.5"
                                    >
                                        Case study →
                                    </Link>
                                )}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/cta inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] pl-3.5 pr-1 py-1 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--ink-soft)]"
                                >
                                    <span className="text-[12.5px] font-medium tracking-tight">
                                        Visit
                                    </span>
                                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/10 ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/cta:translate-x-[2px] group-hover/cta:-translate-y-[1px]">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                            <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function PreviewModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
            style={{
                backgroundColor: "rgba(10,10,10,0.55)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
            }}
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 32, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 24, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-5xl max-h-[88vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bezel-shell h-full flex flex-col overflow-hidden">
                    <div className="bezel-core h-full flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-[var(--rule)]">
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                                <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)] truncate">
                                    {project.title} <span className="text-[var(--ink-faint)]">/ Preview</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--rule-strong)] bg-[var(--canvas)] px-3 py-1.5 text-[11.5px] font-medium tracking-tight text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
                                >
                                    Visit site
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                        <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                <button
                                    onClick={onClose}
                                    className="h-8 w-8 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] flex items-center justify-center transition-transform duration-300 hover:scale-105"
                                    aria-label="Close preview"
                                >
                                    <span className="relative block h-2.5 w-2.5">
                                        <span className="absolute left-0 top-1/2 h-px w-full bg-current rotate-45 origin-center" />
                                        <span className="absolute left-0 top-1/2 h-px w-full bg-current -rotate-45 origin-center" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative flex-1 overflow-hidden bg-[var(--canvas)]">
                            {project.previewImage ? (
                                <Image
                                    src={project.previewImage}
                                    alt={project.title}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                />
                            ) : (
                                <iframe
                                    src={project.url}
                                    className="absolute inset-0 w-full h-full"
                                    title={`${project.title} preview`}
                                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                                    loading="lazy"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
