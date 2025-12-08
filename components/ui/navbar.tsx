"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const links = [
        { name: "Home", href: "/" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const sentinelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sentinelRef.current) {
                const rect = sentinelRef.current.getBoundingClientRect();
                // 16px (1rem) is the top-4 offset
                setIsSticky(rect.top <= 16);
            }
        };

        // Initial check
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const navbarVariants = {
        initial: {
            backgroundColor: "rgba(253, 251, 247, 0)", // transparent
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
            backdropFilter: "blur(0px)",
            borderColor: "transparent",
        },
        sticky: {
            backgroundColor: "var(--bg-window)",
            boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.8)",
            backdropFilter: "blur(12px)",
            borderColor: "#000000",
        }
    };

    return (
        <>
            {/* Sentinel / Spacer */}
            {/* This element marks where the navbar SHOULD be in the flow. 
                We use its position to toggle sticky state. 
                When sticky, it acts as a spacer to hold height. */}
            <div
                ref={sentinelRef}
                className={`w-full ${isSticky ? 'h-20 md:h-24' : 'h-px absolute opacity-0'}`}
                aria-hidden="true"
            />

            <motion.nav
                layout
                initial="initial"
                animate={isSticky ? "sticky" : "initial"}
                variants={navbarVariants}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    layout: { duration: 0.3, ease: "easeInOut" }
                }}
                className={`z-50 flex items-center justify-between px-6 py-4 md:px-8 border-2 rounded-2xl
                    ${isSticky
                        ? "fixed top-4 left-4 right-4 md:left-8 md:right-8"
                        : "relative w-full border-transparent"
                    }`}
            >
                {/* Brand / Window Title */}
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black/20" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/20" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-black/20" />
                    </div>
                    <span className="font-black uppercase tracking-wider text-sm md:text-base border-l-2 border-black pl-4 ml-2">
                        mohammedbarzinje.com
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-bold uppercase text-xs tracking-widest hover:text-[var(--accent-purple)] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="mailto:mohammedbarzinje@gmail.com"
                        className="retro-btn py-1.5 px-4 text-xs"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-1 hover:bg-black/5 rounded"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[var(--bg-window)] border-2 border-black rounded-xl p-4 flex flex-col gap-4 md:hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-bold uppercase text-sm tracking-widest hover:text-[var(--accent-purple)]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </motion.nav>
        </>
    );
}
