"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { Reveal } from "@/components/ui/reveal";
import { Navbar } from "@/components/ui/navbar";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  currentSlug: string;
}

export function CaseStudyContent({ caseStudy, currentSlug }: CaseStudyContentProps) {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Sub Navigation */}
      <div className="px-4 md:px-8 pt-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/case-studies">
            <motion.div
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 font-bold uppercase text-xs bg-[var(--bg-window)] border-2 border-black px-4 py-2 rounded-full shadow-[var(--shadow-retro-sm)] hover:shadow-[var(--shadow-retro-md)] transition-shadow"
            >
              <ArrowLeft className="w-4 h-4" />
              All Cases
            </motion.div>
          </Link>

          {caseStudy.externalLink && (
            <a
              href={caseStudy.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 font-bold uppercase text-xs bg-black text-white border-2 border-black px-4 py-2 rounded-full shadow-[var(--shadow-retro-sm)]"
              >
                Visit Site
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </a>
          )}
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 md:px-8 pt-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-[10px] font-bold bg-black text-white px-3 py-1.5 uppercase mb-6">
              {caseStudy.category}
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
              {caseStudy.title}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-2xl md:text-3xl text-black/70 font-medium mb-8">
              {caseStudy.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-black/50 uppercase text-xs font-bold block mb-1">Timeline</span>
                <span className="font-bold">{caseStudy.timeline}</span>
              </div>
              <div>
                <span className="text-black/50 uppercase text-xs font-bold block mb-1">Role</span>
                <span className="font-bold">{caseStudy.role}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Preview Image */}
      {caseStudy.logo && (
        <section className="px-4 md:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <motion.div
                whileHover={{ y: -4, rotateZ: -0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="window-frame overflow-hidden"
              >
                <div className="window-header py-2 bg-white">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#27c93f]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase">preview.png</span>
                </div>
                <div className={`border-t-2 border-black ${caseStudy.bg} p-4`}>
                  <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-black">
                    <Image
                      src={caseStudy.logo}
                      alt={`${caseStudy.title} preview`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="px-4 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* The Challenge */}
          <Reveal>
            <motion.div
              whileHover={{ y: -4, rotateZ: -0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="window-frame bg-[var(--bg-window)]"
            >
              <div className="window-header py-2 bg-white">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#27c93f]" />
                </div>
                <span className="text-[10px] font-mono uppercase">01_challenge.txt</span>
              </div>
              <div className="p-8 border-t-2 border-black">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
                  The Challenge
                </h2>
                <p className="text-lg leading-relaxed text-black/80">
                  {caseStudy.challenge}
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* The Solution */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -4, rotateZ: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`window-frame ${caseStudy.bg}`}
            >
              <div className="window-header py-2 bg-white">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#27c93f]" />
                </div>
                <span className="text-[10px] font-mono uppercase">02_solution.txt</span>
              </div>
              <div className="p-8 border-t-2 border-black">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
                  The Solution
                </h2>
                <p className="text-lg leading-relaxed text-black/80">
                  {caseStudy.solution}
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* The Results */}
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="window-frame bg-[var(--bg-window)]"
            >
              <div className="window-header py-2 bg-white">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full border border-black bg-[#27c93f]" />
                </div>
                <span className="text-[10px] font-mono uppercase">03_results.txt</span>
              </div>
              <div className="p-8 border-t-2 border-black">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
                  The Results
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-black mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs uppercase font-bold text-black/60">
                        {result.metric}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Technologies */}
          <Reveal delay={0.3}>
            <div className="pt-8">
              <h3 className="text-sm uppercase font-bold text-black/50 mb-4">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="text-sm font-bold bg-black text-white px-3 py-1.5 border-2 border-black"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Navigation to other case studies */}
          <Reveal delay={0.4}>
            <div className="pt-16 border-t-2 border-black/10">
              <h3 className="text-sm uppercase font-bold text-black/50 mb-6">
                Other Case Studies
              </h3>
              <div className="flex flex-wrap gap-4">
                {caseStudies
                  .filter((cs) => cs.slug !== currentSlug)
                  .map((cs) => (
                    <Link key={cs.slug} href={`/case-studies/${cs.slug}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`${cs.bg} border-2 border-black px-6 py-4 rounded-xl shadow-[var(--shadow-retro-sm)] hover:shadow-[var(--shadow-retro-md)] transition-shadow`}
                      >
                        <div className="text-xs uppercase font-bold text-black/60 mb-1">
                          {cs.category}
                        </div>
                        <div className="font-black uppercase">{cs.title}</div>
                      </motion.div>
                    </Link>
                  ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
