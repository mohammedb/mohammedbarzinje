import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function CaseStudiesContent() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section
          id="top"
          aria-labelledby="case-studies-title"
          className="relative isolate overflow-hidden pb-14 pt-32 md:pb-20 md:pt-40"
        >
          <div
            aria-hidden="true"
            className="hero-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-[720px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-60"
          />

          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <Link
              href="/#work"
              className="rise inline-flex items-center gap-2 rounded-full text-[14px] text-muted transition-colors duration-300 hover:text-ink"
              style={delay(0)}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to work
            </Link>
            <h1
              id="case-studies-title"
              className="rise mt-10 text-balance text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-ink"
              style={delay(90)}
            >
              Selected deep dives.
            </h1>
            <p className="rise mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft" style={delay(180)}>
              A closer look at the challenges, decisions, and outcomes behind a few of the projects I&apos;ve owned
              end-to-end.
            </p>
          </div>
        </section>

        <div className="pb-24 md:pb-32">
          <ul className="mx-auto grid max-w-[1200px] gap-4 px-4 sm:px-6 lg:grid-cols-2">
            {caseStudies.map((caseStudy, index) => (
              <li key={caseStudy.slug}>
                <CaseStudyCard caseStudy={caseStudy} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
