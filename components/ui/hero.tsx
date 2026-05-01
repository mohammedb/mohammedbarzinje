"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

function useOsloTime() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const formatter = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "Europe/Oslo",
        });
        const update = () => setTime(formatter.format(new Date()));
        update();
        const id = window.setInterval(update, 30_000);
        return () => window.clearInterval(id);
    }, []);

    return time;
}

export function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const time = useOsloTime();

    const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

    return (
        <section
            ref={ref}
            id="top"
            className="relative min-h-[100dvh] flex items-end pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8 overflow-hidden"
        >
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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        <motion.h1
                            variants={fadeUp}
                            className="font-medium text-[var(--ink)] text-[clamp(3.25rem,9vw,9.5rem)] h-display-lg"
                        >
                            <span className="block">Products</span>
                            <span className="block">
                                people{" "}
                                <motion.span
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ opacity: 0 }}
                                    className="italic font-normal inline-block"
                                >
                                    actually
                                </motion.span>
                            </span>
                            <span className="block">
                                ship
                                <span className="text-[var(--accent)]">.</span>
                            </span>
                        </motion.h1>

                        <motion.div variants={fadeUp} className="mt-10 lg:mt-14">
                            <p className="text-[15px] md:text-[17px] leading-[1.55] text-[var(--ink-soft)] max-w-xl">
                                I&apos;m <span className="text-[var(--ink)] font-medium">Mohammed Barzinje</span> — a
                                senior product manager based in Oslo. Ten years building digital
                                products across <span className="text-[var(--ink)]">esports</span>,
                                <span className="text-[var(--ink)]"> marketplaces</span> and
                                <span className="text-[var(--ink)]"> consumer tech</span>. Co-founder
                                of Enkelt.ai. Founder of ReddMaten &amp; Riddle Esports.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
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
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeUp}
                        className="lg:col-span-4 order-1 lg:order-2 relative w-full"
                    >
                        <motion.div
                            style={{ y: portraitY, scale: portraitScale }}
                            className="relative w-full max-w-[400px] mx-auto lg:mx-0 lg:ml-auto"
                        >
                            <div className="bezel-shell relative">
                                <div className="bezel-core relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src="/meg2.png"
                                        alt="Mohammed Barzinje"
                                        fill
                                        sizes="(max-width: 1024px) 90vw, 400px"
                                        priority
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-gradient-to-b from-transparent via-transparent to-[var(--canvas-deep)]/40" />
                                </div>

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
                            </div>

                            <div className="mt-6 flex items-start justify-between text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)] px-1">
                                <div>
                                    <div>Currently</div>
                                    <div className="mt-1 text-[var(--ink)] font-medium normal-case tracking-tight text-[13px]">
                                        Enkelt.ai &amp; ThePitch
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

                <motion.dl
                    variants={fadeUp}
                    className="mt-16 lg:mt-24 pt-6 border-t border-[var(--rule)] grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 md:gap-x-10"
                >
                    <InfoCol label="Local time">
                        <span className="font-mono tabular-nums">{time || "00:00"}</span>
                        <span className="ml-1.5 text-[10px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                            CET
                        </span>
                    </InfoCol>
                    <InfoCol label="Coordinates">
                        <span className="font-mono tabular-nums">59.91°N</span>
                        <span className="text-[var(--ink-mute)] mx-1.5">/</span>
                        <span className="font-mono tabular-nums">10.75°E</span>
                    </InfoCol>
                    <InfoCol label="Index">
                        <span className="font-mono tabular-nums">N°.01</span>
                        <span className="ml-1.5 text-[var(--ink-mute)]">— Hero</span>
                    </InfoCol>
                    <InfoCol label="Status">
                        <span className="relative inline-flex h-1.5 w-1.5 mr-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        </span>
                        Available
                    </InfoCol>
                </motion.dl>
            </motion.div>
        </section>
    );
}

function InfoCol({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-1.5">
            <dt className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-mute)] flex items-center gap-1.5">
                <span className="h-px w-3 bg-[var(--rule-strong)]" aria-hidden="true" />
                {label}
            </dt>
            <dd className="text-[14px] text-[var(--ink)] tracking-tight inline-flex items-center">
                {children}
            </dd>
        </div>
    );
}
