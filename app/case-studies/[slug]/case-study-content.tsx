"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { Reveal } from "@/components/ui/reveal";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  currentSlug: string;
}

export function CaseStudyContent({ caseStudy, currentSlug }: CaseStudyContentProps) {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Sub navigation */}
      <div className="px-4 md:px-8 pt-32 md:pt-36">
        <div className="max-w-[1024px] mx-auto flex justify-between items-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors duration-300"
          >
            <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-x-1">
              ←
            </span>
            All cases
          </Link>

          {caseStudy.externalLink && (
            <a
              href={caseStudy.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] pl-4 pr-1 py-1 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--ink-soft)]"
            >
              <span className="text-[12.5px] font-medium tracking-tight">
                Visit site
              </span>
              <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white/10 ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 md:px-8 pt-12 md:pt-16 pb-12">
        <div className="max-w-[1024px] mx-auto">
          <Reveal>
            <div className="eyebrow mb-8">
              <span className="dot" />
              {caseStudy.category} <span className="text-[var(--ink-mute)] ml-1">/ {caseStudy.timeline}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-medium text-[clamp(3rem,8vw,8rem)] h-display-lg text-[var(--ink)]">
              {caseStudy.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-[clamp(1.25rem,2.4vw,1.75rem)] tracking-tight text-[var(--ink-soft)] max-w-3xl leading-[1.35]">
              <span className="italic font-normal text-[var(--ink-mute)]">{caseStudy.tagline}</span>
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 pt-6 border-t border-[var(--rule)] grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-8">
              <Meta label="Timeline" value={caseStudy.timeline} />
              <Meta label="Role" value={caseStudy.role} />
              <Meta label="Status" value={caseStudy.results[0]?.value ?? "—"} />
              <Meta label="Stack" value={`${caseStudy.technologies.length} tools`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      {caseStudy.logo && (
        <section className="px-4 md:px-8 pb-16 md:pb-20">
          <div className="max-w-[1024px] mx-auto">
            <Reveal>
              <div className="bezel-shell">
                <div className="bezel-core overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={caseStudy.logo}
                      alt={`${caseStudy.title} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="px-4 md:px-8 pb-32">
        <div className="max-w-[1024px] mx-auto space-y-6 md:space-y-8">
          <ContentBlock
            label="01 — The Challenge"
            title="The challenge"
            body={caseStudy.challenge}
          />
          <ContentBlock
            label="02 — The Solution"
            title="The solution"
            body={caseStudy.solution}
            tone="dark"
          />

          {/* Results grid */}
          <Reveal delay={0.1}>
            <div className="bezel-shell">
              <div className="bezel-core p-8 md:p-12">
                <div className="flex items-center justify-between mb-10 text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                  <span>03 — Results</span>
                  <span className="font-mono">Measured</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                  {caseStudy.results.map((result, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="border-l border-[var(--rule-strong)] pl-4"
                    >
                      <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-mute)] mb-2">
                        {result.metric}
                      </div>
                      <div className="text-[36px] md:text-[48px] font-medium tracking-[-0.035em] leading-[1] text-[var(--ink)] tabular-nums">
                        {result.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Tech */}
          <Reveal delay={0.2}>
            <div className="rounded-[1.75rem] border border-[var(--rule)] bg-[var(--canvas-soft)] p-8 md:p-10">
              <div className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)] mb-5">
                04 — Technologies
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-[var(--rule-strong)] bg-[var(--surface)] px-3 py-1.5 text-[12.5px] font-medium tracking-tight text-[var(--ink-soft)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Other case studies */}
          <Reveal delay={0.3}>
            <div className="pt-10 mt-10 border-t border-[var(--rule)]">
              <div className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)] mb-6">
                Continue reading
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudies
                  .filter((cs) => cs.slug !== currentSlug)
                  .map((cs) => (
                    <Link
                      key={cs.slug}
                      href={`/case-studies/${cs.slug}`}
                      className="group block rounded-[1.5rem] border border-[var(--rule-strong)] bg-[var(--surface)] p-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                    >
                      <div className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)] mb-3">
                        {cs.category}
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-medium text-[24px] md:text-[28px] tracking-[-0.03em] text-[var(--ink)]">
                          {cs.title}
                        </span>
                        <span className="text-[var(--ink-mute)] inline-block transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                      <p className="mt-3 text-[13px] text-[var(--ink-soft)] leading-[1.55]">
                        {cs.tagline}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)] mb-1.5">
        {label}
      </div>
      <div className="text-[14px] md:text-[15px] font-medium tracking-tight text-[var(--ink)]">
        {value}
      </div>
    </div>
  );
}

function ContentBlock({
  label,
  title,
  body,
  tone = "light",
}: {
  label: string;
  title: string;
  body: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <Reveal>
      <div
        className={`relative rounded-[1.75rem] border ${
          isDark
            ? "bg-[var(--ink)] text-[var(--canvas-soft)] border-white/10"
            : "bg-[var(--surface)] border-[var(--rule-strong)]"
        } p-8 md:p-12 overflow-hidden`}
        style={{
          boxShadow: isDark
            ? "0 12px 32px -8px rgba(10,10,10,0.20)"
            : "var(--shadow-sm)",
        }}
      >
        {isDark && (
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none" />
        )}
        <div className={`flex items-center justify-between mb-8 text-[10.5px] uppercase tracking-[0.22em] ${
          isDark ? "text-white/55" : "text-[var(--ink-mute)]"
        }`}>
          <span>{label}</span>
          <span className="h-3 w-px bg-current opacity-40" aria-hidden="true" />
        </div>
        <h2 className={`font-medium text-[clamp(1.75rem,3.5vw,2.75rem)] tracking-[-0.03em] leading-[1.05] mb-6 ${
          isDark ? "text-[var(--canvas-soft)]" : "text-[var(--ink)]"
        }`}>
          {title}
        </h2>
        <p className={`text-[16px] md:text-[18px] leading-[1.65] max-w-3xl ${
          isDark ? "text-white/75" : "text-[var(--ink-soft)]"
        }`}>
          {body}
        </p>
      </div>
    </Reveal>
  );
}
