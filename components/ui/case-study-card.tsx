"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const accents = [
  { mesh: "bg-[var(--accent-soft)]" },
  { mesh: "bg-[var(--indigo-soft)]" },
];

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const accent = accents[index % accents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <Link href={`/case-studies/${caseStudy.slug}`} className="h-full block group">
        <div className="bezel-shell h-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1">
          <div className="bezel-core h-full overflow-hidden flex flex-col">
            {/* Header rail */}
            <div className="px-6 md:px-8 py-4 flex items-center justify-between border-b border-[var(--rule)]">
              <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                <span className="font-mono tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-3 w-px bg-[var(--rule-strong)]" aria-hidden="true" />
                <span>{caseStudy.category}</span>
              </div>
              <span className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)] hidden md:inline">
                {caseStudy.timeline}
              </span>
            </div>

            {/* Preview */}
            <div className={`relative w-full aspect-[16/10] ${accent.mesh} overflow-hidden`}>
              {caseStudy.logo ? (
                <Image
                  src={caseStudy.logo}
                  alt={caseStudy.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-medium text-[clamp(3rem,9vw,7rem)] tracking-[-0.04em] text-[var(--ink)]/8 select-none">
                    {caseStudy.title}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Body */}
            <div className="px-6 md:px-8 py-7 md:py-8 flex-1 flex flex-col gap-5">
              <h3 className="font-medium tracking-[-0.035em] leading-[1] text-[var(--ink)] text-[40px] md:text-[48px]">
                {caseStudy.title}
              </h3>
              <p className="text-[14.5px] md:text-[15.5px] leading-[1.6] text-[var(--ink-soft)] max-w-2xl">
                {caseStudy.tagline}
              </p>

              {/* Results preview */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-2">
                {caseStudy.results.slice(0, 2).map((result) => (
                  <div key={result.metric} className="border-l border-[var(--rule-strong)] pl-3">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-mute)] mb-1">
                      {result.metric}
                    </div>
                    <div className="text-[22px] md:text-[26px] font-medium tracking-[-0.025em] text-[var(--ink)]">
                      {result.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-5 border-t border-[var(--rule)] flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                  {caseStudy.role}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] pl-3.5 pr-1 py-1 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-[var(--ink-soft)]">
                  <span className="text-[12.5px] font-medium tracking-tight">
                    Read case
                  </span>
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/10 ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
