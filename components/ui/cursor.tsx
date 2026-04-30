"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";

export function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    const [magnetic, setMagnetic] = useState({ active: false, x: 0, y: 0 });
    const [clicking, setClicking] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isMobile) return;

        const onMove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest("a, button, .cursor-pointer");

            if (interactive) {
                setHovering(true);
                const rect = (interactive as HTMLElement).getBoundingClientRect();
                const isLarge = rect.width > 220 || rect.height > 220;
                const noMag = (interactive as HTMLElement).classList.contains("no-magnetic");

                if (isLarge || noMag) {
                    setMagnetic({ active: false, x: 0, y: 0 });
                } else {
                    const cx = rect.left + rect.width / 2;
                    const cy = rect.top + rect.height / 2;
                    const dx = Math.abs(cx - e.clientX);
                    const dy = Math.abs(cy - e.clientY);
                    if (dx < rect.width / 2 && dy < rect.height / 2) {
                        setMagnetic({ active: true, x: cx, y: cy });
                    } else {
                        setMagnetic({ active: false, x: 0, y: 0 });
                    }
                }
            } else {
                setHovering(false);
                setMagnetic({ active: false, x: 0, y: 0 });
            }
            setPos({ x: e.clientX, y: e.clientY });
        };

        const onDown = () => setClicking(true);
        const onUp = () => setClicking(false);

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
        };
    }, [isMobile]);

    if (isMobile) return null;

    const ringX = magnetic.active ? magnetic.x : pos.x;
    const ringY = magnetic.active ? magnetic.y : pos.y;
    const ringSize = magnetic.active ? 56 : hovering ? 40 : 28;
    const dotSize = clicking ? 4 : 3;

    return (
        <>
            {/* Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
                style={{
                    borderColor: "rgba(10, 10, 10, 0.35)",
                    mixBlendMode: "multiply",
                }}
                animate={{
                    x: ringX - ringSize / 2,
                    y: ringY - ringSize / 2,
                    width: ringSize,
                    height: ringSize,
                    scale: clicking ? 0.85 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                    mass: 0.18,
                }}
            />
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[var(--ink)]"
                animate={{
                    x: pos.x - dotSize / 2,
                    y: pos.y - dotSize / 2,
                    width: dotSize,
                    height: dotSize,
                }}
                transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 28,
                    mass: 0.1,
                }}
            />
        </>
    );
}
