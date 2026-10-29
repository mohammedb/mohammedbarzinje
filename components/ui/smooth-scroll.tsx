"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";

export function SmoothScroll() {
    const isMobile = useIsMobile();

    useEffect(() => {
        // Skip Lenis on mobile (native scroll is more performant) and when the OS asks for reduced motion
        if (isMobile || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            autoRaf: true,
            // Hash links glide to their section and clear the fixed 64px navbar
            anchors: { offset: -64 },
            // The product rail keeps its own native horizontal scrolling
            allowNestedScroll: true,
        });

        return () => {
            lenis.destroy();
        };
    }, [isMobile]);

    return null;
}
