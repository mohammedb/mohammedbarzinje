"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="h-full"
    >
      <Link href={`/case-studies/${caseStudy.slug}`} className="h-full block">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="window-frame flex flex-col group bg-[var(--bg-window)] cursor-pointer h-full relative overflow-hidden"
        >
          {/* Animated Background Gradient */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-transparent to-black pointer-events-none`}
          />

          {/* Window Header */}
          <div className="window-header py-3 bg-white border-b-2 border-black relative z-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full border border-black bg-[#ff5f56] group-hover:scale-110 transition-transform" />
              <div className="w-3 h-3 rounded-full border border-black bg-[#ffbd2e] group-hover:scale-110 transition-transform delay-75" />
              <div className="w-3 h-3 rounded-full border border-black bg-[#27c93f] group-hover:scale-110 transition-transform delay-150" />
            </div>
            <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-mono uppercase tracking-widest">
                {caseStudy.slug}.tsx
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className={`p-8 flex-1 flex flex-col relative z-10 transition-colors duration-500 ease-in-out ${caseStudy.bg}`}>
            {/* Category Badge & Role */}
            <div className="flex justify-between items-start mb-6">
              <span className="inline-block text-[10px] font-bold bg-black text-white px-3 py-1.5 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                {caseStudy.category}
              </span>
              <span className="text-xs font-bold uppercase tracking-wide opacity-70">
                {caseStudy.role}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-4xl lg:text-5xl font-black mb-4 uppercase tracking-tighter leading-[0.9] group-hover:translate-x-1 transition-transform duration-300">
              {caseStudy.title}
            </h3>

            {/* Tagline */}
            <p className="font-medium text-black/80 text-lg mb-8 leading-relaxed max-w-md">
              {caseStudy.tagline}
            </p>

            <div className="mt-auto">
              {/* Results Preview (Hidden by default, slides up/in on hover) */}
              <div className="grid grid-cols-2 gap-4 mb-6 opacity-80 lg:opacity-60 lg:group-hover:opacity-100 transition-opacity duration-300">
                {caseStudy.results.slice(0, 2).map((result, i) => (
                  <div key={i} className="border-l-2 border-black pl-3">
                    <span className="block text-[10px] uppercase tracking-wider opacity-60 font-bold">{result.metric}</span>
                    <span className="block font-black text-xl">{result.value}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack (Horizontal Scroll/Wrap) */}
              <div className="flex flex-wrap gap-2 mb-6 opacity-0 lg:group-hover:opacity-100 lg:-translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300 ease-out delay-100 h-0 lg:h-auto overflow-hidden lg:overflow-visible group-hover:h-auto">
                {caseStudy.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-[10px] font-mono border border-black/20 bg-white/50 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {caseStudy.technologies.length > 4 && (
                  <span className="text-[10px] font-mono px-2 py-1 opacity-50">+{caseStudy.technologies.length - 4}</span>
                )}
              </div>


              {/* CTA */}
              <div className="flex items-center justify-between border-t-2 border-black/10 pt-4 mt-2">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                  {caseStudy.timeline}
                </span>
                <div className="flex items-center gap-2 font-black uppercase text-sm group-hover:gap-3 transition-all">
                  View Case
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
