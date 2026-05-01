"use client";

import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer id="contact" className="relative pt-20 md:pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
                {/* Massive editorial CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden rounded-[2rem] border border-[var(--rule-strong)] bg-[var(--ink)] text-[var(--canvas-soft)] px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28"
                    style={{ boxShadow: "0 24px 56px -16px rgba(10,10,10,0.20)" }}
                >
                    {/* Soft accent glow */}
                    <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[var(--indigo)]/12 blur-3xl pointer-events-none" />

                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-medium text-white/65 mb-8">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                                </span>
                                Available for new work · 2026
                            </div>
                            <h2 className="font-medium tracking-[-0.045em] leading-[0.92] text-[clamp(2.75rem,8vw,8rem)] text-[var(--canvas-soft)]">
                                Let&apos;s build{" "}
                                <span className="italic font-normal text-white/55">
                                    something real.
                                </span>
                            </h2>
                            <p className="mt-8 text-[15px] md:text-[17px] leading-[1.6] text-white/65 max-w-xl">
                                Whether it&apos;s a zero-to-one product, a tournament platform,
                                or product strategy work — I&apos;m always up for a thoughtful
                                conversation.
                            </p>
                        </div>

                        <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                            <a
                                href="mailto:mohammedbarzinje@gmail.com"
                                className="group inline-flex items-center gap-2 rounded-full bg-[var(--canvas-soft)] text-[var(--ink)] pl-5 pr-1.5 py-1.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white active:scale-[0.98]"
                            >
                                <span className="text-sm font-medium tracking-tight">
                                    mohammedbarzinje@gmail.com
                                </span>
                                <span className="flex items-center justify-center h-9 w-9 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105">
                                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                        <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mohammed-barzinje-9237b5a5/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 pl-5 pr-1.5 py-1.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10"
                            >
                                <span className="text-sm font-medium tracking-tight text-white/85">
                                    LinkedIn
                                </span>
                                <span className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                        <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="/Resume.pdf"
                                download
                                className="group inline-flex items-center gap-2 rounded-full pl-5 pr-1.5 py-1.5 transition-colors duration-500 hover:bg-white/5"
                            >
                                <span className="text-sm font-medium tracking-tight text-white/65 group-hover:text-white/90">
                                    Résumé / PDF
                                </span>
                                <span className="flex items-center justify-center h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/10 text-white/65 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[1px] group-hover:text-white/90">
                                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                        <path d="M6 2v6m0 0L3 5.5M6 8l3-2.5M2 10h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Footer rail */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-[var(--rule)] flex flex-col md:flex-row md:items-center justify-between gap-6 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <span>© 2026 Mohammed Barzinje</span>
                        <span className="hidden md:inline h-3 w-px bg-[var(--rule-strong)]" aria-hidden="true" />
                        <span>Designed &amp; built in Sarpsborg</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <span className="font-mono tabular-nums">v3.0</span>
                        <span className="hidden md:inline h-3 w-px bg-[var(--rule-strong)]" aria-hidden="true" />
                        <a
                            href="#top"
                            className="inline-flex items-center gap-1.5 hover:text-[var(--ink)] transition-colors"
                        >
                            Back to top ↑
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
