"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
    { name: "About", href: "/#about" },
    { name: "Work", href: "/#work" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Skills", href: "/#skills" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 24);
    });

    // Lock body scroll when menu open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <div className="fixed top-5 inset-x-0 z-[70] flex justify-center pointer-events-none px-4">
                <motion.nav
                    initial={false}
                    animate={{
                        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.72)" : "rgba(255, 255, 255, 0.55)",
                        boxShadow: isScrolled
                            ? "0 8px 24px -4px rgba(10,10,10,0.10), 0 24px 56px -16px rgba(10,10,10,0.08)"
                            : "0 2px 6px rgba(10,10,10,0.04), 0 8px 16px -4px rgba(10,10,10,0.04)",
                    }}
                    transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                    className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-[var(--rule-strong)] backdrop-blur-2xl py-1.5 pl-2 pr-1.5 max-w-full"
                    style={{
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
                    }}
                >
                    {/* Brand */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 pl-2.5 pr-3 py-1.5 rounded-full hover:bg-[var(--ink)]/5 transition-colors duration-300"
                        aria-label="Mohammed Barzinje — home"
                    >
                        <span className="relative h-7 w-7 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] flex items-center justify-center font-medium text-[12px] tracking-tight">
                            <span className="relative z-10">MB</span>
                            <span className="absolute inset-[2px] rounded-full ring-1 ring-white/15 pointer-events-none" />
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-medium tracking-tight text-[var(--ink-soft)]">
                            Mohammed
                            <span className="text-[var(--ink-mute)]">Barzinje</span>
                        </span>
                    </Link>

                    {/* Hairline divider */}
                    <span className="hidden md:block h-5 w-px bg-[var(--rule-strong)] mx-1" aria-hidden="true" />

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="block px-3.5 py-1.5 text-[12.5px] font-medium tracking-tight text-[var(--ink-soft)] rounded-full hover:text-[var(--ink)] hover:bg-[var(--ink)]/5 transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA — button-in-button */}
                    <a
                        href="mailto:mohammedbarzinje@gmail.com"
                        className="group hidden md:inline-flex items-center gap-2 ml-1 pl-4 pr-1 py-1 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] hover:bg-[var(--ink-soft)] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                        <span className="text-[12.5px] font-medium tracking-tight">Get in touch</span>
                        <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white/10 ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden ml-1 h-9 w-9 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] flex items-center justify-center"
                        aria-label="Open menu"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2 4h10M2 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </motion.nav>
            </div>

            {/* Full-screen mobile overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                        className="fixed inset-0 z-[80] flex flex-col md:hidden"
                        style={{
                            backgroundColor: "rgba(244, 244, 242, 0.92)",
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)",
                        }}
                    >
                        {/* Close bar */}
                        <div className="flex items-center justify-between p-5">
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2"
                            >
                                <span className="h-8 w-8 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] flex items-center justify-center font-medium text-[12px] tracking-tight">
                                    MB
                                </span>
                                <span className="text-[13px] font-medium tracking-tight text-[var(--ink-soft)]">
                                    Mohammed Barzinje
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="h-10 w-10 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] flex items-center justify-center"
                                aria-label="Close menu"
                            >
                                <span className="relative block h-3 w-3">
                                    <motion.span
                                        className="absolute left-0 top-1/2 h-px w-full bg-current origin-center"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 45 }}
                                        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
                                    />
                                    <motion.span
                                        className="absolute left-0 top-1/2 h-px w-full bg-current origin-center"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: -45 }}
                                        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
                                    />
                                </span>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 pb-12 flex flex-col justify-between">
                            <ul className="mt-8 space-y-2">
                                {links.map((link, i) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ y: 32, opacity: 0, filter: "blur(6px)" }}
                                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                        transition={{
                                            duration: 0.7,
                                            delay: 0.08 + i * 0.06,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-baseline justify-between border-b border-[var(--rule)] py-5"
                                        >
                                            <span className="text-[44px] font-medium tracking-[-0.04em] leading-none text-[var(--ink)]">
                                                {link.name}
                                            </span>
                                            <span className="text-[var(--ink-mute)] text-xs font-mono tabular-nums">
                                                0{i + 1}
                                            </span>
                                        </Link>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ y: 32, opacity: 0, filter: "blur(6px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.08 + links.length * 0.06,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    <a
                                        href="/Resume.pdf"
                                        download
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-baseline justify-between border-b border-[var(--rule)] py-5"
                                    >
                                        <span className="text-[44px] font-medium tracking-[-0.04em] leading-none text-[var(--ink)]">
                                            Résumé
                                        </span>
                                        <span className="text-[var(--ink-mute)] text-xs font-mono tabular-nums">
                                            PDF
                                        </span>
                                    </a>
                                </motion.li>
                            </ul>

                            <motion.div
                                initial={{ y: 24, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-12 space-y-6"
                            >
                                <a
                                    href="mailto:mohammedbarzinje@gmail.com"
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-center justify-between rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] pl-5 pr-1.5 py-1.5"
                                >
                                    <span className="text-sm font-medium tracking-tight">
                                        Get in touch
                                    </span>
                                    <span className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/15">
                                        <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                            <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                                    <span>Oslo / Norway</span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                                        Available
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
