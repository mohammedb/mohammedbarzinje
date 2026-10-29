"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LogoStage } from "@/components/ui/logo-stage";
import { Reveal } from "@/components/ui/reveal";
import { alsoBuilt, products, type Product } from "@/lib/profile";

export function Lineup() {
    const rail = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const [edges, setEdges] = useState({ start: true, end: false });

    useEffect(() => {
        const element = rail.current;
        if (!element) return;

        const update = () => {
            const start = element.scrollLeft <= 4;
            const end = element.scrollLeft + element.clientWidth >= element.scrollWidth - 4;
            setEdges((previous) => (previous.start === start && previous.end === end ? previous : { start, end }));
        };

        // ResizeObserver also fires once on observe, which sets the initial state
        const observer = new ResizeObserver(update);
        observer.observe(element);
        element.addEventListener("scroll", update, { passive: true });
        return () => {
            observer.disconnect();
            element.removeEventListener("scroll", update);
        };
    }, []);

    const scrollByCard = (direction: 1 | -1) => {
        const element = rail.current;
        if (!element) return;
        const card = element.querySelector<HTMLElement>("[data-card]");
        const step = card ? card.offsetWidth + 16 : element.clientWidth * 0.8;
        element.scrollBy({ left: direction * step, behavior: reduceMotion ? "auto" : "smooth" });
    };

    return (
        <section id="work" aria-labelledby="work-title" className="border-t border-line py-24 md:py-32">
            <div className="mx-auto flex max-w-[1200px] items-end justify-between gap-6 px-4 sm:px-6">
                <Reveal>
                    <h2
                        id="work-title"
                        className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-none tracking-[-0.045em] text-ink"
                    >
                        The lineup.
                    </h2>
                    <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
                        Products founded, co-founded or shipped, with the role played in each.
                    </p>
                </Reveal>

                <div className="hidden shrink-0 gap-2 md:flex">
                    <RailButton label="Previous products" disabled={edges.start} onClick={() => scrollByCard(-1)}>
                        <ArrowLeft className="size-4" aria-hidden="true" />
                    </RailButton>
                    <RailButton label="Next products" disabled={edges.end} onClick={() => scrollByCard(1)}>
                        <ArrowRight className="size-4" aria-hidden="true" />
                    </RailButton>
                </div>
            </div>

            <Reveal delay={0.1}>
                <div
                    ref={rail}
                    role="region"
                    aria-label="Product lineup"
                    className="rail no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
                >
                    {products.map((product) => (
                        <ProductCard key={product.name} product={product} />
                    ))}

                    <div className="flex w-[64vw] max-w-[300px] shrink-0 snap-start flex-col justify-between rounded-surface border border-dashed border-line-strong p-6 sm:w-[300px]">
                        <p className="label">Also built</p>
                        <div>
                            <a
                                href={alsoBuilt.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[20px] font-semibold tracking-[-0.03em] text-ink transition-colors hover:text-accent"
                            >
                                samtakhelse.no
                                <ArrowUpRight className="size-4" aria-hidden="true" />
                            </a>
                            <p className="mt-2 text-[15px] leading-relaxed text-muted">
                                {alsoBuilt.name}: {alsoBuilt.note}.
                            </p>
                            <Link
                                href="/case-studies"
                                className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent"
                            >
                                All case studies
                                <ArrowRight className="size-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

function RailButton({
    label,
    disabled,
    onClick,
    children,
}: {
    label: string;
    disabled: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            aria-label={label}
            disabled={disabled}
            onClick={onClick}
            className="grid size-11 place-items-center rounded-full border border-line-strong text-ink transition-[background-color,opacity] duration-300 hover:bg-white/5 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
        >
            {children}
        </button>
    );
}

function ProductCard({ product }: { product: Product }) {
    return (
        <article
            data-card
            className="group flex w-[82vw] max-w-[420px] shrink-0 snap-start flex-col overflow-hidden rounded-surface border border-line bg-surface sm:w-[420px]"
        >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-raised">
                {product.image ? (
                    <Image
                        src={product.image.src}
                        alt={product.image.alt}
                        fill
                        sizes="(min-width: 640px) 420px, 82vw"
                        className="object-cover object-top transition-transform duration-[900ms] ease-launch group-hover:scale-[1.04]"
                    />
                ) : product.logo ? (
                    <LogoStage logo={product.logo} />
                ) : null}

                {product.status && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-canvas/80 px-2.5 py-1 text-[12px] font-medium text-ink backdrop-blur">
                        {product.status.live && <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />}
                        {product.status.label}
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-ink">{product.name}</h3>
                    {product.period && (
                        <span className="shrink-0 font-mono text-[12px] text-muted">{product.period}</span>
                    )}
                </div>
                <p className="mt-1 text-[14px] text-ink-soft">{product.role}</p>
                <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted">{product.description}</p>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-[14px] font-medium">
                    <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit site: ${product.name}`}
                        className="inline-flex items-center gap-1 text-ink transition-colors hover:text-accent"
                    >
                        Visit site
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                    {product.caseStudy && (
                        <Link
                            href={product.caseStudy}
                            aria-label={`Case study: ${product.name}`}
                            className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                        >
                            Case study
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}
