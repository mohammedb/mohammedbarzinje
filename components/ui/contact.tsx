"use client";

import { ArrowUpRight, Copy } from "lucide-react";
import { ConfigSwitch } from "@/components/ui/config-switch";
import { Reveal } from "@/components/ui/reveal";
import { copyText } from "@/components/ui/toast";
import { CONFIGS } from "@/lib/config";
import { useConfig } from "@/lib/hooks/use-config";
import { hiringSummary, profile } from "@/lib/profile";

export function Contact() {
    const active = useConfig();

    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="relative isolate overflow-hidden border-t border-line py-24 md:py-32"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[420px] left-1/2 -z-10 h-[760px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(var(--wine)/0.45),transparent_75%)]"
            />

            <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
                <Reveal>
                    <h2
                        id="contact-title"
                        className="text-balance text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-ink"
                    >
                        Let&apos;s ship the next one.
                    </h2>
                    <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft">
                        Open to Senior PM, Product Lead and AI product roles. Based in Sarpsborg, Norway, working with
                        teams across Europe.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href={`mailto:${profile.email}`} className="btn btn-primary">
                            Email me
                        </a>
                        <a href={profile.cv} download={profile.cvFileName} className="btn btn-ghost">
                            Download CV
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                            LinkedIn
                            <ArrowUpRight className="size-4" aria-hidden="true" />
                        </a>
                    </div>
                    <p className="mt-6 select-all font-mono text-[13px] text-muted">{profile.email}</p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="rounded-surface border border-line bg-surface/80 p-2 backdrop-blur">
                        <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-3 pt-3">
                            <p id="summary-label" className="label">
                                Summary for the hiring manager
                            </p>
                            <ConfigSwitch labelledBy="summary-label" size="sm" />
                        </div>

                        <div className="stack rounded-[20px] border border-line bg-canvas">
                            {CONFIGS.map((id) => (
                                <pre
                                    key={id}
                                    data-variant={id}
                                    className="variant whitespace-pre-wrap break-words p-5 font-mono text-[12.5px] leading-relaxed text-ink-soft sm:p-6"
                                >
                                    {hiringSummary(id)}
                                </pre>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                            <p className="text-[13px] text-muted">Paste it straight into an email or ATS note.</p>
                            <button
                                type="button"
                                onClick={() => copyText(hiringSummary(active), "Summary copied")}
                                className="btn btn-ghost btn-sm"
                            >
                                <Copy className="size-4" aria-hidden="true" />
                                Copy summary
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
