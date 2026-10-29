"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/lib/profile";
import { cn } from "@/lib/utils";

export function Faq() {
    // The availability answer starts open: it is the first thing recruiters check
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const baseId = useId();

    return (
        <section id="faq" aria-labelledby="faq-title" className="border-t border-line py-24 md:py-32">
            <div className="mx-auto max-w-[820px] px-4 sm:px-6">
                <Reveal className="text-center">
                    <h2
                        id="faq-title"
                        className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-none tracking-[-0.045em] text-ink"
                    >
                        Questions recruiters ask.
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-muted">
                        Straight answers, so the first call can skip the basics.
                    </p>
                </Reveal>

                <Reveal delay={0.1} className="mt-12">
                    <ul className="divide-y divide-line border-y border-line">
                        {faqs.map((faq, index) => {
                            const open = openIndex === index;
                            const panelId = `${baseId}-panel-${index}`;
                            const buttonId = `${baseId}-button-${index}`;
                            return (
                                <li key={faq.question}>
                                    <h3>
                                        <button
                                            id={buttonId}
                                            type="button"
                                            aria-expanded={open}
                                            aria-controls={panelId}
                                            onClick={() => setOpenIndex(open ? null : index)}
                                            className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                                        >
                                            <span className="text-[17px] font-medium tracking-tight text-ink sm:text-[18px]">
                                                {faq.question}
                                            </span>
                                            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-colors duration-300 group-hover:bg-white/5">
                                                <Plus
                                                    className={cn(
                                                        "size-4 transition-transform duration-500 ease-fluid",
                                                        open && "rotate-45"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </button>
                                    </h3>
                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        className="grid transition-[grid-template-rows] duration-500 ease-launch"
                                        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                                    >
                                        <div className="overflow-hidden" inert={!open}>
                                            <p className="max-w-[62ch] pb-6 pr-12 text-pretty text-[16px] leading-relaxed text-muted">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
