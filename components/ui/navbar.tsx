"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const links = [
        { name: "Home", href: "/" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`window-header sticky top-4 mx-4 md:mx-8 z-50 transition-all duration-300 rounded-2xl ${isScrolled
            ? "bg-[var(--bg-window)]/80 backdrop-blur-md shadow-lg border-2 border-black translate-y-2"
            : "bg-transparent border-b-0 border-transparent p-0 translate-y-0"
            }`}>
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
                    className="absolute top-full left-0 right-0 bg-[var(--bg-window)] border-b-2 border-black p-4 flex flex-col gap-4 md:hidden shadow-xl"
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
        </nav>
    );
}
