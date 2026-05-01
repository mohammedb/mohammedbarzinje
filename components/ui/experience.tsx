"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const experiences = [
    {
        role: "Marketing & AI-Specialist",
        company: "ThePitch AS",
        period: "2026 — Now",
        meta: ["Paid Search", "AI", "Automation"],
        description:
            "Splitting focus between paid search and AI automation — running and optimizing campaigns end-to-end (analysis, reporting, budgets, client comms) while embedding AI and AI agents into daily operations to streamline workflows.",
        live: true,
    },
    {
        role: "Co-founder & Product Lead",
        company: "Enkelt.ai",
        period: "2026 — Now",
        meta: ["Pre-launch", "AI", "Esports"],
        description:
            "Co-founding a pre-launch SaaS for esports organizations — leading product and engineering on a platform built to replace 10+ fragmented tools with one workspace for scrims, contracts, scouting, financials, and roster ops.",
        live: true,
    },
    {
        role: "Founder & Product Lead",
        company: "ReddMaten",
        period: "2025 — Now",
        meta: ["Marketplace", "D2C", "Norway"],
        description:
            "Building a sustainability-first marketplace from the ground up — leading product strategy, end-to-end UX, sprint planning, and stakeholder alignment for the launch of a Norwegian D2C platform.",
        live: true,
    },
    {
        role: "Founder & General Manager",
        company: "Riddle Esports",
        period: "2015 — 2025",
        meta: ["Esports", "Founder", "10y"],
        description:
            "Built Northern Europe's premier esports organization. Led product roadmaps, team operations, and strategic partnerships across a decade — culminating in EU Masters qualification and a 27–1 regular-season record.",
    },
    {
        role: "Senior Product Manager",
        company: "ESL FACEIT Group",
        period: "2023 — 2024",
        meta: ["Tournament", "Global", "PM"],
        description:
            "Led tournament-ecosystem products for Gamers8 and the Esports World Cup — owning roadmap, KPIs, cross-functional delivery, and data-driven improvements at festival scale.",
    },
    {
        role: "Digital Marketing Manager",
        company: "s360",
        period: "2021 — 2023",
        meta: ["SEM", "Analytics", "Toyota"],
        description:
            "Managed paid-search campaigns and analytics for enterprise clients including Toyota Norway. Delivered measurable ROI through structured testing and forecasting.",
    },
];

export function Experience() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 60%", "end 40%"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 24,
        restDelta: 0.001,
    });

    return (
        <section id="experience" className="relative py-32 md:py-40 px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
                {/* Section header */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 md:mb-28 items-end">
                    <div className="md:col-span-7">
                        <Reveal>
                            <div className="eyebrow mb-6">
                                <span className="dot" />
                                Experience <span className="text-[var(--ink-mute)] ml-1">/ N°.03</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h2 className="font-medium text-[clamp(2.5rem,6vw,5.5rem)] h-display text-[var(--ink)]">
                                A timeline of{" "}
                                <span className="italic font-normal text-[var(--ink-mute)]">
                                    things that shipped.
                                </span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.15} className="md:col-span-5">
                        <div className="md:max-w-sm md:ml-auto text-[14px] uppercase tracking-[0.18em] text-[var(--ink-mute)] leading-[1.7]">
                            Selected roles, founder seats, and operational chapters from the
                            past decade — most recent first.
                        </div>
                    </Reveal>
                </div>

                <div ref={ref} className="relative pl-10 md:pl-14">
                    {/* Background hairline — centered at left-3 (12px) */}
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-[var(--rule-strong)] -translate-x-1/2" />
                    {/* Animated progress fill */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-3 top-2 bottom-2 w-px origin-top bg-[var(--ink)] -translate-x-1/2"
                    />

                    <div className="space-y-10 md:space-y-14">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.85,
                                    delay: i * 0.05,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="relative"
                            >
                                {/* Node — centered on the rail line */}
                                <span
                                    className={`absolute -left-7 md:-left-11 top-8 md:top-10 -translate-x-1/2 z-10 h-3.5 w-3.5 rounded-full border ${
                                        exp.live
                                            ? "border-[var(--accent)] bg-[var(--accent)]"
                                            : "border-[var(--ink)] bg-[var(--canvas)]"
                                    }`}
                                >
                                    {exp.live && (
                                        <span className="absolute inset-[-3px] rounded-full border border-[var(--accent)] opacity-50 animate-ping" />
                                    )}
                                </span>

                                <div className="bezel-shell">
                                    <div className="bezel-core p-7 md:p-10">
                                        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                                            <span className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                                                {exp.company}
                                            </span>
                                            <span className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)] font-mono tabular-nums">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h3 className="font-medium text-[28px] md:text-[36px] tracking-[-0.03em] leading-[1.1] text-[var(--ink)] mt-1">
                                            {exp.role}
                                        </h3>
                                        <p className="mt-5 text-[15px] md:text-[16px] leading-[1.65] text-[var(--ink-soft)] max-w-2xl">
                                            {exp.description}
                                        </p>
                                        <div className="mt-6 pt-5 border-t border-[var(--rule)] flex flex-wrap items-center gap-2">
                                            {exp.meta.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center rounded-full border border-[var(--rule-strong)] bg-[var(--canvas)] px-2.5 py-1 text-[10.5px] uppercase tracking-[0.18em] text-[var(--ink-soft)]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
