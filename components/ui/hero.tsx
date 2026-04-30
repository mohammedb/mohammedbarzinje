"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const stagger = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

    return (
        <section
            ref={ref}
            id="top"
            className="relative min-h-[100dvh] flex items-end pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8 overflow-hidden"
        >
            {/* Soft mesh accent — fixed-position safe (within section, not blurring scroll content) */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,var(--mesh-warm),transparent_60%)] blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,var(--mesh-cool),transparent_60%)] blur-3xl" />
            </div>

            <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="relative w-full max-w-[1280px] mx-auto"
            >
                {/* Top meta row */}
                <motion.div
                    variants={fadeUp}
                    className="hidden md:flex items-center justify-between mb-16 lg:mb-20"
                >
                    <div className="eyebrow">
                        <span className="dot" />
                        Senior Product Manager
                    </div>
                    <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                        <span>Oslo / Norway</span>
                        <span className="h-3 w-px bg-[var(--rule-strong)]" aria-hidden="true" />
                        <span>2015 — Now</span>
                        <span className="h-3 w-px bg-[var(--rule-strong)]" aria-hidden="true" />
                        <span className="font-mono tabular-nums">N°.01</span>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="md:hidden mb-8">
                    <div className="eyebrow">
                        <span className="dot" />
                        Senior Product Manager / Norway
                    </div>
                </motion.div>

                {/* Editorial split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
                    {/* Left: Massive headline + lede + CTAs */}
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        <motion.h1
                            variants={fadeUp}
                            className="font-medium text-[var(--ink)] text-[clamp(3.25rem,9vw,9.5rem)] h-display-lg"
                        >
                            <span className="block">Products</span>
                            <span className="block">
                                people <span className="italic font-normal">actually</span>
                            </span>
                            <span className="block">
                                ship
                                <span className="text-[var(--accent)]">.</span>
                            </span>
                        </motion.h1>

                        <motion.div
                            variants={fadeUp}
                            className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
                        >
                            <p className="md:col-span-7 text-[15px] md:text-[17px] leading-[1.55] text-[var(--ink-soft)] max-w-xl">
                                I&apos;m <span className="text-[var(--ink)] font-medium">Mohammed Barzinje</span> — a
                                senior product manager based in Oslo. Ten years building digital
                                products across <span className="text-[var(--ink)]">esports</span>,
                                <span className="text-[var(--ink)]"> marketplaces</span> and
                                <span className="text-[var(--ink)]"> consumer tech</span>. Founder
                                of ReddMaten &amp; Riddle Esports.
                            </p>

                            <div className="md:col-span-5 flex flex-col items-start gap-4 md:items-end">
                                <div className="flex flex-wrap items-center gap-3">
                                    <Link
                                        href="#work"
                                        className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] pl-5 pr-1.5 py-1.5 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--ink-soft)] active:scale-[0.98]"
                                    >
                                        <span className="text-sm font-medium tracking-tight">
                                            View selected work
                                        </span>
                                        <span className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/15 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105">
                                            <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                                <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link
                                        href="/case-studies"
                                        className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium tracking-tight text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors duration-500"
                                    >
                                        Case studies
                                        <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                                <div className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                                    </span>
                                    Available for new work
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Portrait — double-bezel */}
                    <motion.div
                        variants={fadeUp}
                        className="lg:col-span-4 order-1 lg:order-2 relative w-full"
                    >
                        <motion.div
                            style={{ y: portraitY, scale: portraitScale }}
                            className="relative w-full max-w-[400px] mx-auto lg:mx-0 lg:ml-auto"
                        >
                            {/* Outer shell */}
                            <div className="bezel-shell relative">
                                {/* Inner core */}
                                <div className="bezel-core relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src="/meg2.png"
                                        alt="Mohammed Barzinje"
                                        fill
                                        sizes="(max-width: 1024px) 90vw, 400px"
                                        priority
                                        className="object-cover"
                                    />
                                    {/* Subtle warm wash */}
                                    <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-gradient-to-b from-transparent via-transparent to-[var(--canvas-deep)]/40" />
                                </div>

                                {/* Floating tag — bottom-left, escapes the bezel */}
                                <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5">
                                    <div className="rounded-full bg-[var(--surface)] border border-[var(--rule-strong)] py-1.5 pl-2 pr-3.5 flex items-center gap-2 shadow-[var(--shadow-md)]">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                                        </span>
                                        <span className="text-[10.5px] uppercase tracking-[0.18em] font-medium text-[var(--ink-soft)]">
                                            Open to work
                                        </span>
                                    </div>
                                </div>

                                {/* Index badge — top-right, escapes the bezel */}
                                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4">
                                    <div className="rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] h-12 w-12 md:h-14 md:w-14 flex items-center justify-center font-mono text-[10.5px] tabular-nums tracking-[0.15em] uppercase">
                                        <span className="rotate-[-12deg] block leading-none">2026</span>
                                    </div>
                                </div>
                            </div>

                            {/* Caption block under portrait */}
                            <div className="mt-6 flex items-start justify-between text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)] px-1">
                                <div>
                                    <div>Currently</div>
                                    <div className="mt-1 text-[var(--ink)] font-medium normal-case tracking-tight text-[13px]">
                                        ReddMaten
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div>Previously</div>
                                    <div className="mt-1 text-[var(--ink)] font-medium normal-case tracking-tight text-[13px]">
                                        ESL FACEIT
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom hairline strip */}
                <motion.div variants={fadeUp} className="mt-16 lg:mt-24 pt-6 border-t border-[var(--rule)]">
                    <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                        <span>Scroll to explore</span>
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-[var(--rule-strong)]" aria-hidden="true" />
                            <span className="font-mono text-[10px]">↓</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
