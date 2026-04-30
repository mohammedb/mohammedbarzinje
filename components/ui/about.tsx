"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const facts = [
    { label: "Based in", value: "Oslo / Norway", note: "On UTC+1" },
    { label: "Languages", value: "5", note: "NO · EN · KU · DE · AR" },
    { label: "Focus", value: "Product Strategy", note: "& Hands-on UX" },
    { label: "Experience", value: "10+ years", note: "Since 2015" },
];

const principles = ["Product-led", "Data-driven", "User-focused", "Quietly agile"];

export function About() {
    return (
        <section id="about" className="relative py-32 md:py-40 px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
                {/* Section header */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-24 items-end">
                    <div className="md:col-span-7">
                        <Reveal>
                            <div className="eyebrow mb-6">
                                <span className="dot" />
                                About <span className="text-[var(--ink-mute)] ml-1">/ N°.02</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h2 className="font-medium text-[clamp(2.5rem,6vw,5.5rem)] h-display text-[var(--ink)]">
                                A decade of product,{" "}
                                <span className="italic font-normal text-[var(--ink-mute)]">
                                    quietly compounding.
                                </span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.15} className="md:col-span-5">
                        <div className="md:max-w-sm md:ml-auto text-[14px] uppercase tracking-[0.18em] text-[var(--ink-mute)] leading-[1.7]">
                            From founding Northern Europe&apos;s largest esports org to leading
                            tournament tech for ESL FACEIT — and now back to building from
                            zero.
                        </div>
                    </Reveal>
                </div>

                {/* Asymmetric bento */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
                    {/* Story — large card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7"
                    >
                        <div className="bezel-shell h-full">
                            <div className="bezel-core h-full p-8 md:p-12 relative">
                                <div className="flex items-center justify-between mb-10 text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                                    <span>Story</span>
                                    <span className="font-mono">01 / 04</span>
                                </div>
                                <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.65] text-[var(--ink-soft)]">
                                    <p>
                                        I&apos;ve spent the last ten years turning ambiguous
                                        problems into products that actually ship — starting in
                                        2015 by founding{" "}
                                        <span className="text-[var(--ink)] font-medium">
                                            Riddle Esports
                                        </span>
                                        , which grew into Northern Europe&apos;s most-decorated
                                        org with five national titles and EU Masters
                                        qualification.
                                    </p>
                                    <p>
                                        At{" "}
                                        <span className="text-[var(--ink)] font-medium">
                                            ESL FACEIT
                                        </span>
                                        , I led product for the tournament ecosystem behind
                                        Gamers8 and the Esports World Cup — owning roadmap,
                                        data, and cross-functional delivery for the largest
                                        gaming festivals on the planet.
                                    </p>
                                    <p>
                                        Today I&apos;m building{" "}
                                        <span className="text-[var(--ink)] font-medium">
                                            ReddMaten
                                        </span>
                                        , a marketplace that diverts &lsquo;imperfect&rsquo;
                                        produce from Norwegian farms straight to people&apos;s
                                        kitchens. End-to-end product, design, and engineering.
                                    </p>
                                </div>

                                {/* Sig line */}
                                <div className="mt-10 pt-6 border-t border-[var(--rule)] flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                                    <span>— Mohammed</span>
                                    <span className="font-mono">N°.02 / Story</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Facts — 2x2 inside col-span-5 */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-5 md:gap-6">
                        {facts.map((fact, i) => (
                            <motion.div
                                key={fact.label}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.08 * i,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className={`group relative rounded-[1.5rem] border border-[var(--rule-strong)] p-5 md:p-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 ${
                                    i === 0
                                        ? "bg-[var(--ink)] text-[var(--canvas-soft)] col-span-2 row-span-1"
                                        : "bg-[var(--surface)]"
                                }`}
                                style={{
                                    boxShadow:
                                        i === 0
                                            ? "0 12px 32px -8px rgba(10,10,10,0.20)"
                                            : "var(--shadow-sm)",
                                }}
                            >
                                <div
                                    className={`text-[10px] uppercase tracking-[0.22em] mb-3 ${
                                        i === 0 ? "text-white/55" : "text-[var(--ink-mute)]"
                                    }`}
                                >
                                    {fact.label}
                                </div>
                                <div
                                    className={`text-[28px] md:text-[34px] font-medium tracking-[-0.03em] leading-[1.05] ${
                                        i === 0 ? "text-[var(--canvas-soft)]" : "text-[var(--ink)]"
                                    }`}
                                >
                                    {fact.value}
                                </div>
                                <div
                                    className={`mt-3 text-[12px] tracking-tight ${
                                        i === 0 ? "text-white/60" : "text-[var(--ink-mute)]"
                                    }`}
                                >
                                    {fact.note}
                                </div>
                                {i === 0 && (
                                    <div className="absolute top-5 right-5 md:top-6 md:right-6 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-white/55">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
                                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                                        </span>
                                        Live
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Principles strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 md:mt-8 rounded-[1.5rem] border border-[var(--rule)] bg-[var(--canvas-soft)] py-6 md:py-7 px-6 md:px-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
                >
                    {principles.map((value, i) => (
                        <span
                            key={value}
                            className="inline-flex items-center gap-3 text-[13px] md:text-[15px] tracking-tight text-[var(--ink-soft)]"
                        >
                            <span className="font-medium text-[var(--ink)]">{value}</span>
                            {i < principles.length - 1 && (
                                <span
                                    className="h-1 w-1 rounded-full bg-[var(--ink-faint)]"
                                    aria-hidden="true"
                                />
                            )}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
