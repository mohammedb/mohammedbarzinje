"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { ConfigSwitch } from "@/components/ui/config-switch";
import { CONFIGS } from "@/lib/config";
import { configurations, heroCallouts, profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const calloutAreas = ["c1", "c2", "c3", "c4"] as const;

export function Hero() {
    const ref = useRef<HTMLElement>(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const productY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.9], [1, reduceMotion ? 1 : 0.3]);

    return (
        <section
            ref={ref}
            id="top"
            aria-labelledby="hero-title"
            className="relative isolate min-h-[100dvh] overflow-hidden pb-20 pt-24 sm:pt-28 md:pb-28"
        >
            <motion.div
                aria-hidden="true"
                style={{ opacity: glowOpacity }}
                className="hero-glow pointer-events-none absolute left-1/2 top-[46%] -z-10 h-[900px] w-[1200px] -translate-x-1/2 md:top-[50%]"
            />

            <div className="mx-auto flex max-w-[1200px] flex-col items-center px-4 text-center sm:px-6">
                <p
                    className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.04] py-1.5 pl-3 pr-4 text-[13px] text-ink-soft"
                    style={delay(0)}
                >
                    <span className="relative flex size-2" aria-hidden="true">
                        <span className="ping-soft absolute inset-0 rounded-full bg-accent" />
                        <span className="relative size-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
                    </span>
                    <span className="font-medium text-ink">Available now</span>
                    <span className="sr-only">,</span>
                    <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
                    <span>{profile.location}</span>
                </p>

                <h1
                    id="hero-title"
                    className="rise mt-7 pb-[0.12em] text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-ink"
                    style={delay(90)}
                >
                    <span className="block">Mohammed Barzinje.</span>
                    <span className="block">
                        Built to <em className="font-serif font-normal tracking-[-0.02em] text-accent">ship.</em>
                    </span>
                </h1>

                <div className="rise stack mt-5 max-w-[42rem]" style={delay(180)}>
                    {CONFIGS.map((id) => (
                        <p
                            key={id}
                            data-variant={id}
                            className="variant text-pretty text-[clamp(1.0625rem,1.6vw,1.3125rem)] leading-[1.5] tracking-[-0.01em] text-ink-soft"
                        >
                            {configurations[id].pitch}
                        </p>
                    ))}
                </div>

                <div
                    id="hero-actions"
                    className="rise mt-8 flex flex-wrap items-center justify-center gap-3"
                    style={delay(270)}
                >
                    <a href={profile.cv} download={profile.cvFileName} className="btn btn-primary">
                        Download CV
                        <ArrowDown className="size-4" strokeWidth={2.25} aria-hidden="true" />
                    </a>
                    <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                        Email me
                    </a>
                </div>

                <div className="rise mt-10 flex flex-col items-center gap-3" style={delay(360)}>
                    <span id="hero-config-label" className="label">
                        Choose your configuration
                    </span>
                    <ConfigSwitch labelledBy="hero-config-label" />
                </div>
            </div>

            <motion.div style={{ y: productY }} className="relative mx-auto mt-14 max-w-[1080px] px-4 sm:px-6 md:mt-16">
                <div className="product-grid">
                    <div
                        className="rise-device mx-auto w-full max-w-[320px] [grid-area:device] md:max-w-none"
                        style={delay(420)}
                    >
                        <div className="device">
                            <Image
                                src={profile.portrait}
                                alt="Portrait of Mohammed Barzinje"
                                width={800}
                                height={800}
                                preload
                                sizes="(min-width: 1024px) 340px, (min-width: 768px) 280px, 300px"
                                className="aspect-[4/5] w-full rounded-[26px] object-cover"
                            />
                        </div>
                    </div>

                    {heroCallouts.map((callout, index) => {
                        const onLeft = index < 2;
                        return (
                            <div
                                key={callout.value}
                                className={cn(
                                    "rise relative border-t border-line pt-3 text-left md:border-0 md:pt-0",
                                    onLeft && "md:text-right"
                                )}
                                style={{ gridArea: calloutAreas[index], ...delay(820 + index * 90) }}
                            >
                                <span
                                    aria-hidden="true"
                                    className={cn(
                                        "draw-x absolute top-[1.15rem] hidden h-px w-9 bg-white/30 md:block",
                                        onLeft ? "-right-11 origin-right" : "-left-11 origin-left"
                                    )}
                                    style={delay(700 + index * 90)}
                                />
                                <p className="text-[clamp(1.375rem,2.4vw,1.875rem)] font-semibold leading-tight tracking-[-0.035em] text-ink">
                                    {callout.value}
                                </p>
                                <p className="mt-1 text-[14px] leading-snug text-muted">{callout.label}</p>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
