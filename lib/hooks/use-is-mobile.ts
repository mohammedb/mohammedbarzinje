"use client";

import { useState, useEffect } from "react";

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check for touch capability and screen size
        const checkMobile = () => {
            const hasTouchScreen =
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 768;
            const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

            setIsMobile(hasTouchScreen || isSmallScreen || hasCoarsePointer);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}
