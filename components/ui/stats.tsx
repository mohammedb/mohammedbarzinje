"use client";

import { motion, useInView } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { useRef } from "react";

type Stat = {
    value: string;
    label: string;
    description: string;
    span: "lg" | "md" | "sm";
    accent?: "warm" | "cool" | "ink";
};

const stats: Stat[] = [
    {
        value: "27–1",
        label: "Historic Record",
        description:
            "Over three consecutive seasons, undefeated across two of them — the cleanest run Norwegian competitive LoL has seen.",
        span: "lg",
        accent: "ink",
    },
    {
        value: "5×",
        label: "National Titles",
        description: "Telenorligaen, Telialigaen, GGLigaen, NLC Spring 2023.",
        span: "md",
        accent: "warm",
    },
    {
        value: "$48,904",
        label: "Prize Money",
        description: "Combined LoL earnings across NLC, EU Masters, and national leagues.",
        span: "md",
        accent: "cool",
    },
    {
        value: "Top 4",
        label: "NLC Placement",
        description:
            "Nordic & British region — 17th in European rankings (May 2023).",
        span: "sm",
    },
    {
        value: "6+",
        label: "Titles Competed",
        description:
            "LoL, CS:GO, Hearthstone, Apex, PUBG, Rainbow Six, Smash.",
        span: "sm",
    },
    {
        value: "10",
        label: "Years Active",
        description: "From founding in 2015 to international recognition in 2025.",
        span: "sm",
    },
];

function AnimatedNumber({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    return (
        <span
            ref={ref}
            className={`inline-block tabular-nums transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 translate-y-3 blur-[6px]"
            }`}
        >
            {value}
        </span>
    );
}

export function Stats() {
    return (
        <section id="stats" className="relative py-32 md:py-40 px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
                {/* Section header */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 md:mb-24 items-end">
                    <div className="md:col-span-7">
                        <Reveal>
                            <div className="eyebrow mb-6">
                                <span className="dot" />
                                Riddle Esports / 2015 — 2025{" "}
                                <span className="text-[var(--ink-mute)] ml-1">/ N°.05</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h2 className="font-medium text-[clamp(2.5rem,6vw,5.5rem)] h-display text-[var(--ink)]">
                                A decade,{" "}
                                <span className="italic font-normal text-[var(--ink-mute)]">
                                    by the numbers.
                                </span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.15} className="md:col-span-5">
                        <div className="md:max-w-sm md:ml-auto text-[14px] uppercase tracking-[0.18em] text-[var(--ink-mute)] leading-[1.7]">
                            What ten years of operating an esports organization adds up to —
                            in titles, players, and prize money.
                        </div>
                    </Reveal>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 auto-rows-[minmax(180px,auto)]">
                    {stats.map((stat, i) => {
                        const span =
                            stat.span === "lg"
                                ? "col-span-2 lg:col-span-7 row-span-2"
                                : stat.span === "md"
                                ? "col-span-2 lg:col-span-5"
                                : "col-span-1 lg:col-span-4";

                        const isInk = stat.accent === "ink";
                        const accentBg = isInk
                            ? "bg-[var(--ink)] text-[var(--canvas-soft)]"
                            : "bg-[var(--surface)]";
                        const accentRule = isInk
                            ? "border-white/10"
                            : "border-[var(--rule-strong)]";
                        const accentLabel = isInk
                            ? "text-white/55"
                            : "text-[var(--ink-mute)]";
                        const accentDesc = isInk
                            ? "text-white/65"
                            : "text-[var(--ink-soft)]";
                        const accentDecorBg =
                            stat.accent === "warm"
                                ? "bg-[var(--accent-soft)]"
                                : stat.accent === "cool"
                                ? "bg-[var(--indigo-soft)]"
                                : "";

                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.85,
                                    delay: i * 0.06,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className={`${span} relative group`}
                            >
                                <div
                                    className={`relative h-full rounded-[1.75rem] border ${accentRule} ${accentBg} p-6 md:p-8 flex flex-col overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1`}
                                    style={{
                                        boxShadow: isInk
                                            ? "0 12px 32px -8px rgba(10,10,10,0.20)"
                                            : "var(--shadow-sm)",
                                    }}
                                >
                                    {accentDecorBg && (
                                        <div
                                            className={`absolute -top-12 -right-12 h-40 w-40 rounded-full ${accentDecorBg} blur-2xl opacity-60 pointer-events-none`}
                                            aria-hidden="true"
                                        />
                                    )}
                                    <div
                                        className={`flex items-center justify-between text-[10.5px] uppercase tracking-[0.22em] ${accentLabel} mb-6`}
                                    >
                                        <span>{stat.label}</span>
                                        <span className="font-mono tabular-nums">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div
                                        className={`font-medium tracking-[-0.045em] leading-[0.95] ${
                                            stat.span === "lg"
                                                ? "text-[clamp(4rem,11vw,9rem)]"
                                                : stat.span === "md"
                                                ? "text-[clamp(3rem,7vw,5.5rem)]"
                                                : "text-[clamp(2.25rem,5vw,4rem)]"
                                        }`}
                                    >
                                        <AnimatedNumber value={stat.value} />
                                    </div>
                                    <p
                                        className={`mt-6 text-[13.5px] md:text-[14.5px] leading-[1.6] max-w-md ${accentDesc}`}
                                    >
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
