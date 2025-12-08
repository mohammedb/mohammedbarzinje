"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
    const [isMagnetic, setIsMagnetic] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a') || target.closest('button');

            setIsHovering(!!isClickable);

            if (isClickable) {
                const rect = (isClickable as HTMLElement).getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Distance from center
                const disX = Math.abs(centerX - e.clientX);
                const disY = Math.abs(centerY - e.clientY);

                // If close to center, snap
                if (disX < rect.width / 2 && disY < rect.height / 2) {
                    setIsMagnetic(true);
                    setMagneticPos({ x: centerX, y: centerY });
                    // Still update mouse pos but blend it? 
                    // For simple magnetic, we just override the cursor pos to be center
                    // But usually we want some "pull". 
                    // Let's just track raw mouse for now and handle "stick" in animation
                    setMousePosition({ x: e.clientX, y: e.clientY });
                } else {
                    setIsMagnetic(false);
                    setMousePosition({ x: e.clientX, y: e.clientY });
                }
            } else {
                setIsMagnetic(false);
                setMousePosition({ x: e.clientX, y: e.clientY });
            }
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-[#cafb42] rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: isMagnetic ? magneticPos.x - 24 : mousePosition.x - 16,
                    y: isMagnetic ? magneticPos.y - 24 : mousePosition.y - 16,
                    scale: isMagnetic ? 1.5 : (isHovering ? 1.5 : 1),
                    height: isMagnetic ? 48 : 32,
                    width: isMagnetic ? 48 : 32,
                    rotate: isHovering ? 45 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#ccff00] rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.1
                }}
            />
        </>
    );
}
