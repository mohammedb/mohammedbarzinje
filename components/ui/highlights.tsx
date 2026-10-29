import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LogoStage } from "@/components/ui/logo-stage";
import { Reveal } from "@/components/ui/reveal";
import { CONFIGS } from "@/lib/config";
import { configurations, highlights, type Highlight } from "@/lib/profile";
import { cn } from "@/lib/utils";

const tileClass =
    "group relative flex flex-col overflow-hidden rounded-surface border border-line bg-surface has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-accent";

export function Highlights() {
    return (
        <section id="highlights" aria-labelledby="highlights-title" className="border-t border-line py-24 md:py-32">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
                <Reveal>
                    <h2
                        id="highlights-title"
                        className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-none tracking-[-0.045em] text-ink"
                    >
                        Proof, not promises.
                    </h2>
                    <div className="stack mt-4 max-w-xl">
                        {CONFIGS.map((id) => (
                            <p key={id} data-variant={id} className="variant text-[17px] leading-relaxed text-muted">
                                {configurations[id].highlightsIntro}
                            </p>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.1} className="mt-12">
                    <div className="stack">
                        {CONFIGS.map((id) => (
                            <div key={id} data-variant={id} className="variant grid gap-4 lg:grid-cols-12">
                                <FeatureTile item={highlights[id].feature} />
                                {highlights[id].side.map((item) => (
                                    <SideTile key={item.org} item={item} />
                                ))}
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function FeatureTile({ item }: { item: Highlight }) {
    return (
        <article className={cn(tileClass, "lg:col-span-7 lg:row-span-2")}>
            <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-raised lg:aspect-auto lg:min-h-[340px] lg:flex-1">
                {item.image ? (
                    <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 1200px) 680px, (min-width: 1024px) 56vw, 100vw"
                        className="object-cover object-top transition-transform duration-[900ms] ease-launch group-hover:scale-[1.03]"
                    />
                ) : item.logo ? (
                    <LogoStage logo={item.logo} />
                ) : null}
            </div>

            <div className="p-6 sm:p-8">
                <TileMeta item={item} />
                <h3 className="mt-3 text-balance text-[clamp(1.5rem,2.6vw,2.125rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
                    {item.title}
                </h3>
                <p className="mt-3 max-w-[54ch] text-pretty text-[15px] leading-relaxed text-muted">{item.body}</p>

                {item.stats && (
                    <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-5">
                        {item.stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col-reverse">
                                <dt className="mt-1 text-[13px] text-muted">{stat.label}</dt>
                                <dd className="text-[clamp(1.375rem,2.4vw,1.75rem)] font-semibold tracking-[-0.03em] text-ink">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                )}

                {item.href && <TileLink href={item.href} />}
            </div>
        </article>
    );
}

function SideTile({ item }: { item: Highlight }) {
    return (
        <article
            className={cn(
                tileClass,
                "lg:col-span-5 lg:min-h-[340px]",
                !item.image && "bg-[radial-gradient(90%_70%_at_100%_0%,rgb(202_251_66/0.07),transparent_60%)] bg-surface"
            )}
        >
            {item.image && (
                <div className="relative aspect-[2.4/1] overflow-hidden border-b border-line bg-raised">
                    <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 1200px) 480px, (min-width: 1024px) 40vw, 100vw"
                        className="object-cover object-top transition-transform duration-[900ms] ease-launch group-hover:scale-[1.03]"
                    />
                </div>
            )}

            <div className="flex flex-1 flex-col p-6 sm:p-7">
                <TileMeta item={item} />

                {item.value ? (
                    <>
                        <p className="mt-auto pt-10 text-[clamp(4rem,9vw,6.5rem)] font-semibold leading-[0.85] tracking-[-0.06em] text-ink">
                            {item.value.replace("+", "")}
                            {item.value.includes("+") && <span className="text-accent">+</span>}
                        </p>
                        <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.02em] text-ink">{item.title}</h3>
                        <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-muted">{item.body}</p>
                    </>
                ) : (
                    <div className={cn(!item.image && "mt-auto pt-10")}>
                        <h3 className="mt-3 text-balance text-[clamp(1.25rem,1.9vw,1.5rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-ink">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-pretty text-[15px] leading-relaxed text-muted">{item.body}</p>
                    </div>
                )}

                {item.href && <TileLink href={item.href} />}
            </div>
        </article>
    );
}

function TileMeta({ item }: { item: Highlight }) {
    return (
        <p className="label">
            {item.org}
            <span className="mx-2 text-faint" aria-hidden="true">
                /
            </span>
            <span className="sr-only">, </span>
            {item.meta}
        </p>
    );
}

// The whole tile is clickable through the link's ::after overlay
function TileLink({ href }: { href: string }) {
    const className =
        "mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-medium text-ink transition-colors duration-300 after:absolute after:inset-0 after:content-[''] focus-visible:outline-none group-hover:text-accent";
    const icon = (
        <ArrowUpRight
            className="size-4 transition-transform duration-500 ease-fluid group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
        />
    );

    if (href.startsWith("/")) {
        return (
            <Link href={href} className={className}>
                Read the case study
                {icon}
            </Link>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            Visit {new URL(href).hostname.replace(/^www\./, "")}
            {icon}
        </a>
    );
}
