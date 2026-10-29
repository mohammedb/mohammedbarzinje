"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1100);
            return () => clearTimeout(timer);
        }
    }, []);

    // Lifts the action dock above the banner for as long as it is on screen
    useEffect(() => {
        const node = ref.current;
        if (!isVisible || !node) return;
        const root = document.documentElement;
        const observer = new ResizeObserver(() => {
            root.style.setProperty("--cookie-offset", `${node.offsetHeight + 12}px`);
        });
        observer.observe(node);
        return () => {
            observer.disconnect();
            root.style.removeProperty("--cookie-offset");
        };
    }, [isVisible]);

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
                    ref={ref}
                    role="region"
                    aria-label="Cookie consent"
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 16, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed left-4 right-4 z-[75] max-w-md rounded-surface border border-line-strong bg-surface-hi/95 p-5 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.9)] backdrop-blur-xl sm:left-auto sm:right-6 md:p-6"
                    style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
                >
                    <div className="mb-4 flex items-center justify-between">
                        <span className="label">Cookies</span>
                        <span className="font-mono text-[11px] text-muted">/ EU GDPR</span>
                    </div>
                    <p className="mb-2 text-[15px] font-medium leading-snug tracking-tight text-ink">
                        Just the essentials.
                    </p>
                    <p className="mb-6 text-[13.5px] leading-[1.55] text-ink-soft">
                        This site uses minimal cookies for performance and analytics —
                        nothing creepy, no third-party tracking.
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={handleAccept}
                            className="btn btn-sm bg-ink text-canvas hover:bg-ink-soft"
                        >
                            Accept
                        </button>
                        <button type="button" onClick={handleDecline} className="btn btn-ghost btn-sm">
                            Decline
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
