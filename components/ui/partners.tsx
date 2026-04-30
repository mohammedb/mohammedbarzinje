"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const partners = [
    { name: "ESL", logo: "/logos/esl.png" },
    { name: "Toyota", logo: "/logos/toyota.svg" },
    { name: "EWC", logo: "/logos/ewc.png" },
    { name: "Heroic", logo: "/logos/heroic.png" },
    { name: "Microsoft", logo: "/logos/microsoft.png" },
];

export function Partners() {
    const tripled = [...partners, ...partners, ...partners];

    return (
        <section className="relative py-28 md:py-36 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 mb-14 md:mb-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                    <div className="md:col-span-6">
                        <Reveal>
                            <div className="eyebrow mb-5">
                                <span className="dot" />
                                Trusted with <span className="text-[var(--ink-mute)] ml-1">/ N°.06</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h2 className="font-medium text-[clamp(2rem,4.5vw,3.75rem)] h-display text-[var(--ink)]">
                                Worked alongside{" "}
                                <span className="italic font-normal text-[var(--ink-mute)]">
                                    great teams.
                                </span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.15} className="md:col-span-6">
                        <div className="md:max-w-sm md:ml-auto text-[12.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)] leading-[1.7]">
                            A short selection of partners, employers, and clients across
                            esports, automotive, and enterprise tech.
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Marquee */}
            <div className="relative group w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[var(--canvas)] to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[var(--canvas)] to-transparent" />

                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                    {tripled.map((partner, index) => (
                        <div
                            key={`${partner.name}-${index}`}
                            className="flex-shrink-0 mx-3 md:mx-4"
                        >
                            <div className="relative w-44 md:w-56 h-24 md:h-28 rounded-[1.25rem] border border-[var(--rule-strong)] bg-[var(--surface)] flex items-center justify-center px-8 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                                <div className="relative w-full h-full filter grayscale opacity-55 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:grayscale-0 hover:opacity-100 mix-blend-multiply">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 176px, 224px"
                                        priority={index < 5}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
