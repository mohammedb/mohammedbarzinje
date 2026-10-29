"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/brand-mark";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

const links = [
    { label: "Highlights", id: "highlights" },
    { label: "Work", id: "work" },
    { label: "Experience", id: "experience" },
    { label: "Specs", id: "specs" },
    { label: "FAQ", id: "faq" },
];

// On the homepage, plain hash links let Lenis (or native smooth scroll) handle the jump
function SectionLink({
    id,
    onHome,
    ...props
}: { id: string; onHome: boolean } & Omit<React.ComponentProps<"a">, "href">) {
    return onHome ? <a href={`#${id}`} {...props} /> : <Link href={`/#${id}`} {...props} />;
}

export function Navbar() {
    const onHome = usePathname() === "/";
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 12));

    // Covers a reload halfway down the page, before any scroll event fires
    useEffect(() => {
        const frame = requestAnimationFrame(() => setScrolled(window.scrollY > 12));
        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        if (!open) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        // While the menu is open, Lenis leaves the wheel alone so the page behind stays put
        <header className="fixed inset-x-0 top-0 z-[70]" data-lenis-prevent={open ? "" : undefined}>
            <a
                href="#main"
                className="sr-only rounded-full bg-accent px-4 py-2 text-[14px] font-semibold text-accent-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10"
            >
                Skip to content
            </a>

            <div
                className={cn(
                    "border-b transition-[background-color,border-color] duration-500",
                    scrolled || open ? "border-line bg-canvas/80 backdrop-blur-xl" : "border-transparent"
                )}
            >
                <nav
                    aria-label="Main"
                    className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6"
                >
                    <Link
                        href="/"
                        onClick={close}
                        aria-label={`${profile.name}, home`}
                        className="flex items-center gap-2.5 rounded-full"
                    >
                        <BrandMark />
                        <span className="text-[14px] font-medium tracking-tight text-ink">{profile.name}</span>
                    </Link>

                    <ul className="hidden items-center gap-1 lg:flex">
                        {links.map((link) => (
                            <li key={link.id}>
                                <SectionLink
                                    id={link.id}
                                    onHome={onHome}
                                    className="rounded-full px-3 py-2 text-[13.5px] text-ink-soft transition-colors duration-300 hover:text-ink"
                                >
                                    {link.label}
                                </SectionLink>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <a href={`mailto:${profile.email}`} className="btn btn-ghost btn-sm hidden sm:inline-flex">
                            Email me
                        </a>
                        <button
                            type="button"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label={open ? "Close menu" : "Open menu"}
                            onClick={() => setOpen((value) => !value)}
                            className="grid size-10 place-items-center rounded-full border border-line-strong text-ink lg:hidden"
                        >
                            {open ? (
                                <X className="size-4" aria-hidden="true" />
                            ) : (
                                <Menu className="size-4" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </nav>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-canvas/95 backdrop-blur-xl lg:hidden"
                    >
                        <div className="flex min-h-full flex-col px-4 pb-10 pt-2 sm:px-6">
                            <ul>
                                {links.map((link) => (
                                    <li key={link.id} className="border-b border-line">
                                        <SectionLink
                                            id={link.id}
                                            onHome={onHome}
                                            onClick={close}
                                            className="block py-4 text-[28px] font-semibold tracking-[-0.03em] text-ink"
                                        >
                                            {link.label}
                                        </SectionLink>
                                    </li>
                                ))}
                                <li className="border-b border-line">
                                    <Link
                                        href="/case-studies"
                                        onClick={close}
                                        className="block py-4 text-[28px] font-semibold tracking-[-0.03em] text-ink"
                                    >
                                        Case studies
                                    </Link>
                                </li>
                            </ul>

                            <div className="mt-auto grid gap-3 pt-10">
                                <a href={profile.cv} download={profile.cvFileName} className="btn btn-primary">
                                    Download CV
                                    <ArrowDown className="size-4" strokeWidth={2.25} aria-hidden="true" />
                                </a>
                                <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                                    Email me
                                </a>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-ghost"
                                >
                                    LinkedIn
                                    <ArrowUpRight className="size-4" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
