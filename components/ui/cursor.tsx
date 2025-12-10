"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
    const [isMagnetic, setIsMagnetic] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a') || target.closest('button') || target.closest('.cursor-pointer');

            setIsHovering(!!isClickable);
            if (isClickable) {
                const rect = (isClickable as HTMLElement).getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Skip magnetic effect for large elements (like images) or elements with no-magnetic class
                const isLargeElement = rect.width > 150 || rect.height > 150;
                const hasNoMagnetic = (isClickable as HTMLElement).classList.contains('no-magnetic');

                if (isLargeElement || hasNoMagnetic) {
                    setIsMagnetic(false);
                    setMousePosition({ x: e.clientX, y: e.clientY });
                } else {
                    // Distance from center
                    const disX = Math.abs(centerX - e.clientX);
                    const disY = Math.abs(centerY - e.clientY);

                    if (disX < rect.width / 2 && disY < rect.height / 2) {
                        setIsMagnetic(true);
                        setMagneticPos({ x: centerX, y: centerY });
                        setMousePosition({ x: e.clientX, y: e.clientY });
                    } else {
                        setIsMagnetic(false);
                        setMousePosition({ x: e.clientX, y: e.clientY });
                    }
                }
            } else {
                setIsMagnetic(false);
                setMousePosition({ x: e.clientX, y: e.clientY });
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-[#cafb42] rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: isMagnetic ? magneticPos.x - 24 : mousePosition.x - 16,
                    y: isMagnetic ? magneticPos.y - 24 : mousePosition.y - 16,
                    scale: isClicking ? 0.8 : (isMagnetic ? 1.5 : (isHovering ? 1.5 : 1)),
                    height: isMagnetic ? 48 : 32,
                    width: isMagnetic ? 48 : 32,
                    rotate: isHovering ? 45 : 0,
                    borderColor: isClicking ? "#b0aefb" : "#cafb42"
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
                    scale: isClicking ? 0.5 : 1
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
