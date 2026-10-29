"use client";

import { motion } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
}

// Fades content up once it scrolls into view. MotionProvider (reducedMotion="user") drops the movement.
export const Reveal = ({
    children,
    width = "100%",
    delay = 0,
    duration = 0.8,
    yOffset = 24,
    className,
}: RevealProps) => (
    <motion.div
        initial={{ opacity: 0, y: yOffset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ width }}
        className={className}
    >
        {children}
    </motion.div>
);
