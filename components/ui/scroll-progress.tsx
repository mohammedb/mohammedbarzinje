"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 28,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100] bg-[var(--ink)]"
            style={{ scaleX, opacity: 0.85 }}
        />
    );
}
