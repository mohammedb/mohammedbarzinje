import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { currentReleases, pastReleases, profile, type Release } from "@/lib/profile";

export function Changelog() {
    return (
        <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-24 md:py-32">
            <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[320px_1fr] lg:gap-16">
                <Reveal className="lg:sticky lg:top-28 lg:self-start">
                    <p className="label">Changelog</p>
                    <h2
                        id="experience-title"
                        className="mt-4 text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold leading-none tracking-[-0.045em] text-ink"
                    >
                        Every release since 2015.
                    </h2>
                    <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-muted">
                        Roles, launches and founder seats, newest first.
                    </p>
                    <a href={profile.cv} download={profile.cvFileName} className="btn btn-ghost btn-sm mt-8">
                        Download CV
                        <ArrowDown className="size-4" strokeWidth={2.25} aria-hidden="true" />
                    </a>
                </Reveal>

                <Reveal delay={0.1}>
                    <ol className="border-t border-line">
                        <li className="grid gap-4 border-b border-line py-7 sm:grid-cols-[140px_1fr] sm:gap-6">
                            <p className="flex items-center gap-2 self-start font-mono text-[13px] text-ink-soft sm:pt-1">
                                Now
                                <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-accent-ink">
                                    Latest
                                </span>
                            </p>
                            <ul className="grid gap-6">
                                {currentReleases.map((release) => (
                                    <li key={release.org}>
                                        <ReleaseEntry release={release} showPeriod />
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {pastReleases.map((release) => (
                            <li
                                key={release.org}
                                className="grid gap-2 border-b border-line py-7 sm:grid-cols-[140px_1fr] sm:gap-6"
                            >
                                <p className="font-mono text-[13px] text-ink-soft sm:pt-1">{release.period}</p>
                                <ReleaseEntry release={release} />
                            </li>
                        ))}
                    </ol>
                </Reveal>
            </div>
        </section>
    );
}

function ReleaseEntry({ release, showPeriod = false }: { release: Release; showPeriod?: boolean }) {
    const orgClass = "transition-colors duration-300 hover:text-accent";

    return (
        <div>
            <h3 className="text-[19px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                {release.role},{" "}
                {release.href?.startsWith("/") ? (
                    <Link href={release.href} className={orgClass}>
                        {release.org}
                    </Link>
                ) : release.href ? (
                    <a href={release.href} target="_blank" rel="noopener noreferrer" className={orgClass}>
                        {release.org}
                    </a>
                ) : (
                    release.org
                )}
            </h3>
            <p className="mt-1.5 max-w-[60ch] text-pretty text-[15px] leading-relaxed text-muted">{release.summary}</p>
            {showPeriod && release.period && (
                <p className="mt-2 font-mono text-[12px] text-muted">{release.period}</p>
            )}
        </div>
    );
}
