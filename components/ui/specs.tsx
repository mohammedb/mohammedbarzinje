"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { clients, featuredSpecs, specGroups } from "@/lib/profile";
import { cn } from "@/lib/utils";

export function Specs() {
    const [open, setOpen] = useState(false);

    return (
        <section id="specs" aria-labelledby="specs-title" className="border-t border-line py-24 md:py-32">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
                <Reveal>
                    <h2
                        id="specs-title"
                        className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-none tracking-[-0.045em] text-ink"
                    >
                        Tech specs.
                    </h2>
                    <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
                        The details hiring teams ask about, on one sheet.
                    </p>
                </Reveal>

                <Reveal delay={0.1} className="mt-12">
                    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-surface border border-line bg-line lg:grid-cols-4">
                        {featuredSpecs.map((spec) => (
                            <div key={spec.label} className="flex flex-col-reverse justify-end bg-canvas p-6 sm:p-8">
                                <dt className="mt-4">
                                    <span className="block text-[15px] font-medium tracking-tight text-ink">
                                        {spec.label}
                                    </span>
                                    <span className="mt-1 block text-[13.5px] leading-snug text-muted">{spec.note}</span>
                                </dt>
                                <dd className="text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.06em] text-ink">
                                    {spec.value}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    <div className="mt-4 rounded-surface border border-line">
                        <button
                            type="button"
                            aria-expanded={open}
                            aria-controls="full-specs"
                            onClick={() => setOpen((value) => !value)}
                            className="group flex w-full items-center justify-between gap-4 rounded-surface px-6 py-5 text-left sm:px-8"
                        >
                            <span>
                                <span className="block text-[17px] font-medium tracking-tight text-ink">
                                    Full specifications
                                </span>
                                <span className="mt-0.5 block text-[14px] text-muted">
                                    Skills, stack, languages, education and the Riddle record
                                </span>
                            </span>
                            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-colors duration-300 group-hover:bg-white/5">
                                <Plus
                                    className={cn(
                                        "size-4 transition-transform duration-500 ease-fluid",
                                        open && "rotate-45"
                                    )}
                                    aria-hidden="true"
                                />
                            </span>
                        </button>

                        <div
                            id="full-specs"
                            className="grid transition-[grid-template-rows] duration-500 ease-launch"
                            style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                        >
                            <div className="overflow-hidden" inert={!open}>
                                <dl className="border-t border-line px-6 sm:px-8">
                                    {specGroups.map((group) => {
                                        const longItems = group.items.some((item) => item.length > 34);
                                        return (
                                            <div
                                                key={group.label}
                                                className="grid gap-3 border-b border-line py-5 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-8"
                                            >
                                                <dt className="label pt-1">{group.label}</dt>
                                                <dd>
                                                    <ul
                                                        className={cn(
                                                            longItems
                                                                ? "grid gap-1.5 text-[15px] leading-relaxed text-ink-soft"
                                                                : "flex flex-wrap gap-2"
                                                        )}
                                                    >
                                                        {group.items.map((item) => (
                                                            <li
                                                                key={item}
                                                                className={cn(
                                                                    !longItems &&
                                                                        "rounded-full border border-line px-3 py-1 text-[14px] text-ink-soft"
                                                                )}
                                                            >
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </dd>
                                            </div>
                                        );
                                    })}
                                </dl>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.1} className="mt-20">
                    <p className="label text-center">Worked with</p>
                    <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
                        {clients.map((client) => (
                            <li key={client.alt}>
                                <Image
                                    src={client.src}
                                    alt={client.alt}
                                    width={client.width}
                                    height={client.height}
                                    sizes="200px"
                                    style={{ height: client.displayHeight, width: "auto" }}
                                    className="opacity-60 transition-opacity duration-300 [filter:brightness(0)_invert(1)] hover:opacity-100"
                                />
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
