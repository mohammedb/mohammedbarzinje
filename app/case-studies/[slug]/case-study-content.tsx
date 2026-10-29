import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function CaseStudyContent({ caseStudy, currentSlug }: CaseStudyContentProps) {
  const others = caseStudies.filter((cs) => cs.slug !== currentSlug);

  return (
    <>
      <Navbar />
      <main id="main">
        <article>
          {/* Above the fold: CSS entrances, so it paints before hydration */}
          <header id="top" className="relative isolate overflow-hidden pt-28 md:pt-36">
            <div
              aria-hidden="true"
              className="hero-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-[720px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-60"
            />

            <div className="mx-auto max-w-[1024px] px-4 sm:px-6">
              <div className="rise flex items-center justify-between gap-4" style={delay(0)}>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full text-[14px] text-muted transition-colors duration-300 hover:text-ink"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  All cases
                </Link>
                {caseStudy.externalLink && (
                  <a
                    href={caseStudy.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    Visit site
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                )}
              </div>

              <h1
                className="rise mt-14 text-balance text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-ink"
                style={delay(90)}
              >
                {caseStudy.title}
              </h1>
              <p
                className="rise mt-6 max-w-3xl text-pretty text-[clamp(1.25rem,2.4vw,1.625rem)] leading-[1.35] tracking-[-0.015em] text-ink-soft"
                style={delay(180)}
              >
                {caseStudy.tagline}
              </p>

              <dl
                className="rise mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-6 md:grid-cols-4"
                style={delay(270)}
              >
                <Meta label="Timeline" value={caseStudy.timeline} />
                <Meta label="Role" value={caseStudy.role} />
                <Meta label="Category" value={caseStudy.category} />
                <Meta label="Stack" value={`${caseStudy.technologies.length} tools`} />
              </dl>

              {caseStudy.logo && (
                <div className="rise mt-12 rounded-surface border border-line bg-surface p-2" style={delay(360)}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-raised">
                    <Image
                      src={caseStudy.logo}
                      alt={`${caseStudy.title} website`}
                      fill
                      preload
                      sizes="(min-width: 1024px) 960px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </header>

          <div className="mx-auto max-w-[1024px] px-4 pb-24 pt-16 sm:px-6 md:pb-32 md:pt-24">
            <Chapter index="01" title="The challenge">
              <p>{caseStudy.challenge}</p>
            </Chapter>

            <Chapter index="02" title="The solution">
              <p>{caseStudy.solution}</p>
            </Chapter>

            <Chapter index="03" title="Results">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-line bg-line md:grid-cols-4">
                {caseStudy.results.map((result) => (
                  <div key={result.metric} className="bg-canvas p-5">
                    <dt className="text-[13px] text-muted">{result.metric}</dt>
                    <dd className="mt-2 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-none tracking-[-0.04em] text-ink tabular-nums">
                      {result.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Chapter>

            <Chapter index="04" title="Technologies">
              <ul className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line-strong px-3.5 py-1.5 text-[13.5px] text-ink-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Chapter>
          </div>
        </article>

        {others.length > 0 && (
          <section aria-labelledby="more-cases-title" className="border-t border-line py-20 md:py-24">
            <div className="mx-auto max-w-[1024px] px-4 sm:px-6">
              <h2 id="more-cases-title" className="label">
                Continue reading
              </h2>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {others.map((cs) => (
                  <li key={cs.slug}>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="group flex h-full flex-col rounded-surface border border-line bg-surface p-6 transition-colors duration-500 hover:border-line-strong md:p-8"
                    >
                      <span className="text-[13px] text-muted">{cs.category}</span>
                      <span className="mt-3 flex items-baseline justify-between gap-4">
                        <span className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.04em] text-ink">
                          {cs.title}
                        </span>
                        <ArrowRight
                          className="size-5 shrink-0 text-muted transition-[color,transform] duration-500 ease-fluid group-hover:translate-x-1 group-hover:text-ink"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{cs.tagline}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[13px] text-muted">{label}</dt>
      <dd className="mt-1 text-[15px] font-medium tracking-tight text-ink">{value}</dd>
    </div>
  );
}

function Chapter({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="grid gap-4 border-t border-line py-12 md:grid-cols-[160px_1fr] md:gap-10 md:py-16">
        <p className="font-mono text-[13px] text-muted">{index}</p>
        <div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
            {title}
          </h2>
          <div className="mt-6 max-w-[65ch] text-[17px] leading-[1.7] text-ink-soft md:text-[18px]">{children}</div>
        </div>
      </section>
    </Reveal>
  );
}
