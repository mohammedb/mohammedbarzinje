"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Copy, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { copyText } from "@/components/ui/toast";
import { profile } from "@/lib/profile";

// The three things a recruiter needs, one tap away. Shows once the hero buttons scroll
// out of view and steps aside while the contact section (which has the same actions) is on screen.
export function ActionDock() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const heroActions = document.getElementById("hero-actions");
        const contact = document.getElementById("contact");
        if (!heroActions) return;

        let pastHero = false;
        let atContact = false;
        const sync = () => setVisible(pastHero && !atContact);

        const heroObserver = new IntersectionObserver(([entry]) => {
            pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
            sync();
        });
        heroObserver.observe(heroActions);

        const contactObserver = new IntersectionObserver(
            ([entry]) => {
                atContact = entry.isIntersecting;
                sync();
            },
            { rootMargin: "0px 0px -15% 0px" }
        );
        if (contact) contactObserver.observe(contact);

        return () => {
            heroObserver.disconnect();
            contactObserver.disconnect();
        };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="dock-position pointer-events-none fixed inset-x-0 z-[60] flex justify-center px-4"
                >
                    <div
                        role="group"
                        aria-label="Quick actions"
                        className="pointer-events-auto flex items-center gap-1 rounded-full border border-line-strong bg-surface-hi/90 p-1.5 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.9)] backdrop-blur-xl"
                    >
                        <a href={profile.cv} download={profile.cvFileName} className="btn btn-primary btn-sm">
                            Download CV
                            <ArrowDown className="hidden size-4 sm:block" strokeWidth={2.25} aria-hidden="true" />
                        </a>
                        <button
                            type="button"
                            onClick={() => copyText(profile.email, "Email copied")}
                            className="btn btn-sm text-ink hover:bg-white/[0.06]"
                        >
                            <Copy className="hidden size-4 sm:block" aria-hidden="true" />
                            Copy email
                        </button>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm text-ink hover:bg-white/[0.06]"
                        >
                            <Linkedin className="hidden size-4 sm:block" aria-hidden="true" />
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
