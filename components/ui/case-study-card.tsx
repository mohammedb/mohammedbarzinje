import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="group relative flex h-full flex-col rounded-surface border border-line bg-surface p-2 transition-colors duration-500 hover:border-line-strong has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-accent">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-raised">
          {caseStudy.logo && (
            <Image
              src={caseStudy.logo}
              alt=""
              fill
              // The first row sits above the fold on the case-studies page
              loading={index < 2 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
              sizes="(min-width: 1024px) 580px, 100vw"
              className="object-cover transition-transform duration-1000 ease-fluid group-hover:scale-[1.03]"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col px-4 pb-4 pt-6 md:px-6 md:pb-6">
          <p className="flex items-center justify-between gap-4 text-[13px] text-muted">
            <span>{caseStudy.category}</span>
            <span className="font-mono">{caseStudy.timeline}</span>
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-none tracking-[-0.045em] text-ink">
            {/* Stretched link: the whole card is clickable, but its accessible name stays short */}
            <Link
              href={`/case-studies/${caseStudy.slug}`}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              {caseStudy.title}
            </Link>
          </h2>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">{caseStudy.tagline}</p>

          <dl className="mt-6 grid grid-cols-2 gap-6">
            {caseStudy.results.slice(0, 2).map((result) => (
              <div key={result.metric} className="border-l border-line-strong pl-4">
                <dt className="text-[13px] text-muted">{result.metric}</dt>
                <dd className="mt-1 text-[clamp(1.375rem,2.4vw,1.75rem)] font-semibold tracking-[-0.035em] text-ink tabular-nums">
                  {result.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-auto pt-8">
            <div className="flex items-center justify-between gap-4 border-t border-line pt-5">
              <span className="text-[13px] text-muted">{caseStudy.role}</span>
              <span
                aria-hidden="true"
                className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-ink transition-colors duration-300 group-hover:text-accent"
              >
                Read the case study
                <ArrowUpRight className="size-4 transition-transform duration-500 ease-fluid group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
