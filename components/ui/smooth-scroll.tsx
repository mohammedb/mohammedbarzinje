"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";

export function SmoothScroll() {
    const isMobile = useIsMobile();

    useEffect(() => {
        // Skip Lenis on mobile - native scroll is more performant
        if (isMobile) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [isMobile]);

    return null;
}
