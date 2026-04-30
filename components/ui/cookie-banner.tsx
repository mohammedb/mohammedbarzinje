"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1100);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "false");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: 16, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-4 right-4 left-4 sm:left-auto z-[75] sm:right-6 sm:bottom-6 max-w-md"
                >
                    <div className="bezel-shell">
                        <div className="bezel-core p-5 md:p-6 relative">
                            <div className="flex items-center justify-between mb-4 text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                                <span className="inline-flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                                    Cookies
                                </span>
                                <span className="font-mono">/ EU GDPR</span>
                            </div>
                            <p className="text-[15px] font-medium tracking-tight text-[var(--ink)] leading-snug mb-2">
                                Just the essentials.
                            </p>
                            <p className="text-[13.5px] leading-[1.55] text-[var(--ink-soft)] mb-6">
                                This site uses minimal cookies for performance and analytics —
                                nothing creepy, no third-party tracking.
                            </p>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleAccept}
                                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] pl-4 pr-1 py-1 transition-colors duration-500 hover:bg-[var(--ink-soft)]"
                                >
                                    <span className="text-[12.5px] font-medium tracking-tight">
                                        Accept
                                    </span>
                                    <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white/10 ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                            <path d="M2.5 6.2 5 8.6 9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="px-4 py-2 rounded-full text-[12.5px] font-medium tracking-tight text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--canvas-deep)] transition-colors duration-300"
                                >
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
