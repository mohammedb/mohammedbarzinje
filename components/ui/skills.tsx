"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const skills = [
    "Product Strategy",
    "Roadmapping",
    "User Research",
    "Stakeholder",
    "Sprint Planning",
    "Data & Analytics",
    "SEM / Paid",
    "Leadership",
    "Esports Ops",
];

const languages = [
    { name: "Norwegian", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Kurdish", level: "Native" },
    { name: "German", level: "Conversational" },
    { name: "Arabic", level: "Conversational" },
];

const stack = {
    Frontend: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    Backend: ["PostgreSQL", "Supabase", "Node.js", "REST"],
    Tooling: ["AI-coding", "Git", "Vercel", "VS Code"],
};

const builds = [
    {
        name: "GGWP.no",
        url: "https://ggwp.no",
        note: "Full-stack Next.js + Supabase. Built from zero with AI-assisted dev.",
    },
    {
        name: "Samtakhelse.no",
        url: "https://samtakhelse.no",
        note: "Client project — site build + ongoing technical & IT support.",
    },
];

export function Skills() {
    return (
        <section id="skills" className="relative py-32 md:py-40 px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
                {/* Section header */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 md:mb-24 items-end">
                    <div className="md:col-span-7">
                        <Reveal>
                            <div className="eyebrow mb-6">
                                <span className="dot" />
                                Stack &amp; Skills{" "}
                                <span className="text-[var(--ink-mute)] ml-1">/ N°.07</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h2 className="font-medium text-[clamp(2.5rem,6vw,5.5rem)] h-display text-[var(--ink)]">
                                Tools I reach{" "}
                                <span className="italic font-normal text-[var(--ink-mute)]">
                                    for, daily.
                                </span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.15} className="md:col-span-5">
                        <div className="md:max-w-sm md:ml-auto text-[14px] uppercase tracking-[0.18em] text-[var(--ink-mute)] leading-[1.7]">
                            Senior PM by training, hands-on with the modern web stack — and
                            comfortable wherever code, design, and strategy intersect.
                        </div>
                    </Reveal>
                </div>

                {/* Stack columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
                    {/* Tech stack — large column */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7"
                    >
                        <div className="bezel-shell h-full">
                            <div className="bezel-core h-full p-7 md:p-10">
                                <div className="flex items-center justify-between mb-8 text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                                    <span>Stack</span>
                                    <span className="font-mono">01 / 03</span>
                                </div>
                                <div className="space-y-8">
                                    {Object.entries(stack).map(([group, items]) => (
                                        <div
                                            key={group}
                                            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pb-6 last:pb-0 border-b border-[var(--rule)] last:border-b-0"
                                        >
                                            <div className="md:col-span-3 text-[13.5px] tracking-tight text-[var(--ink)] font-medium">
                                                {group}
                                            </div>
                                            <div className="md:col-span-9 flex flex-wrap gap-2">
                                                {items.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="inline-flex items-center rounded-full border border-[var(--rule-strong)] bg-[var(--canvas)] px-3 py-1.5 text-[12px] font-medium tracking-tight text-[var(--ink-soft)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--canvas-soft)]"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Notable builds */}
                                <div className="mt-10 pt-6 border-t border-[var(--rule)]">
                                    <div className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)] mb-5">
                                        Notable builds
                                    </div>
                                    <div className="space-y-4">
                                        {builds.map((build) => (
                                            <a
                                                key={build.name}
                                                href={build.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex flex-col md:flex-row md:items-baseline md:gap-6 gap-1 py-3 -mx-2 px-2 rounded-2xl transition-colors hover:bg-[var(--canvas)]"
                                            >
                                                <span className="text-[16px] font-medium tracking-tight text-[var(--ink)] inline-flex items-center gap-2">
                                                    {build.name}
                                                    <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5">
                                                        ↗
                                                    </span>
                                                </span>
                                                <span className="text-[13px] text-[var(--ink-soft)] leading-[1.55]">
                                                    {build.note}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills + Languages stack */}
                    <div className="lg:col-span-5 grid grid-cols-1 gap-5 md:gap-6">
                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="rounded-[1.75rem] border border-[var(--rule-strong)] bg-[var(--ink)] text-[var(--canvas-soft)] p-7 md:p-9 relative overflow-hidden"
                                style={{ boxShadow: "0 12px 32px -8px rgba(10,10,10,0.20)" }}>
                                <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none" />
                                <div className="flex items-center justify-between mb-7 text-[10.5px] uppercase tracking-[0.22em] text-white/55">
                                    <span>Skills</span>
                                    <span className="font-mono">02 / 03</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, i) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.05 * i,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] font-medium tracking-tight text-white/85"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Languages */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.85, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="bezel-shell">
                                <div className="bezel-core p-7 md:p-9">
                                    <div className="flex items-center justify-between mb-7 text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                                        <span>Languages</span>
                                        <span className="font-mono">03 / 03</span>
                                    </div>
                                    <ul className="divide-y divide-[var(--rule)]">
                                        {languages.map((lang) => (
                                            <li
                                                key={lang.name}
                                                className="flex items-baseline justify-between py-3 first:pt-0"
                                            >
                                                <span className="text-[16px] font-medium tracking-tight text-[var(--ink)]">
                                                    {lang.name}
                                                </span>
                                                <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--ink-mute)]">
                                                    {lang.level}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
