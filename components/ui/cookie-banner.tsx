"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Cookie } from "lucide-react";

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage after mount to avoid hydration mismatch
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Small delay for better UX on load
            const timer = setTimeout(() => setIsVisible(true), 1000);
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
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-4 right-4 z-50 w-[90vw] max-w-md sm:right-8 sm:bottom-8"
                >
                    <div className="window-frame bg-[var(--bg-window)] flex flex-col shadow-[var(--shadow-retro-lg)]">
                        {/* Window Header */}
                        <div className="window-header py-3">
                            <div className="flex items-center gap-2">
                                <Cookie className="w-5 h-5 text-[var(--text-main)]" />
                                <span className="type-label text-sm">COOKIE_POLICY.EXE</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
                                <div className="w-3 h-3 rounded-full bg-green-500 border border-black" />
                                <div className="w-3 h-3 rounded-full bg-red-500 border border-black cursor-pointer" onClick={handleDecline} />
                            </div>
                        </div>

                        {/* Window Body */}
                        <div className="p-6">
                            <p className="font-bold text-lg mb-2 uppercase">We use cookies!</p>
                            <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
                                This website uses cookies to ensure you get the best retro experience possible.
                                We don't track anything weird, just the essentials to keep things running smoothly.
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleAccept}
                                    className="retro-btn flex-1 text-center justify-center"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="px-6 py-2 border-2 border-black rounded-full font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors duration-300"
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
