"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Briefcase } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { Reveal } from "@/components/ui/reveal";
import { Navbar } from "@/components/ui/navbar";

export function CaseStudiesContent() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-4 md:px-8 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Reveal>
            <Link href="/#projects" className="inline-block mb-8">
              <motion.div
                whileHover={{ x: -4 }}
                className="inline-flex items-center gap-2 font-bold uppercase text-xs bg-[var(--bg-window)] border-2 border-black px-4 py-2 rounded-full shadow-[var(--shadow-retro-sm)] hover:shadow-[var(--shadow-retro-md)] transition-shadow"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </motion.div>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="inline-block bg-white border-2 border-black px-4 py-1 mb-6 shadow-[var(--shadow-retro-sm)] transform -rotate-1">
              <span className="type-label text-lg text-black flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Case_Studies
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Deep Dives
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-xl md:text-2xl max-w-2xl text-black/70 font-medium">
              A closer look at the challenges, solutions, and results behind my key projects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 md:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 md:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="window-frame bg-black text-white p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                Want to work together?
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                I'm always open to discussing new projects and opportunities.
              </p>
              <a
                href="mailto:mohammedbarzinje@gmail.com"
                className="inline-block bg-[var(--accent-lime)] text-black font-black px-8 py-3 border-2 border-white rounded-full hover:bg-white transition-colors uppercase tracking-wide text-sm"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
