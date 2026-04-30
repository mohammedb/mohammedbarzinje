"use client";

import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { Reveal } from "@/components/ui/reveal";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export function CaseStudiesContent() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,var(--mesh-warm),transparent_60%)] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,var(--mesh-cool),transparent_60%)] blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto">
          <Reveal>
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 mb-12 text-[12px] uppercase tracking-[0.22em] text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors duration-300"
            >
              <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-x-1">
                ←
              </span>
              Back to work
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <Reveal delay={0.05}>
                <div className="eyebrow mb-6">
                  <span className="dot" />
                  Case Studies <span className="text-[var(--ink-mute)] ml-1">/ Deep dives</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-medium text-[clamp(3rem,8vw,8rem)] h-display-lg text-[var(--ink)]">
                  Selected{" "}
                  <span className="italic font-normal text-[var(--ink-mute)]">
                    deep dives.
                  </span>
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="md:col-span-4">
              <p className="md:max-w-sm md:ml-auto text-[15px] md:text-[16px] leading-[1.6] text-[var(--ink-soft)]">
                A closer look at the challenges, decisions, and outcomes behind a few
                of the projects I&apos;ve owned end-to-end.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 md:px-8 pb-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
