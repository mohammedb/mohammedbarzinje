"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

/* -------------------------------------------------------------------------- */
/*  Data — justér tekst og priser direkte her                                  */
/* -------------------------------------------------------------------------- */

const PRICE = "Fra 7 500 kr";
const PRICE_NOTE = "engangspris · eks. mva.";
const SUPPORT_PRICE = "450 kr / mnd";
const SUPPORT_NOTE = "support · eks. mva.";
const EMAIL = "mohammedbarzinje@gmail.com";
const EMAIL_SUBJECT = encodeURIComponent("Forespørsel om nettside");

const benefits = [
  {
    title: "Mobilvennlig landingsside",
    body: "Ser bra ut og laster raskt på mobil — der de fleste lokale kunder finner deg.",
  },
  {
    title: "Tekst tilpasset bedriften",
    body: "Du trenger ikke skrive selv. Jeg skriver tekst som forteller hva du gjør og hvor du holder til.",
  },
  {
    title: "Lokal SEO og Google-optimalisering",
    body: "Bygget for å bli funnet av folk i ditt område når de søker etter tjenestene dine.",
  },
  {
    title: "Strukturert for AI-søk",
    body: "Ferdig satt opp for at ChatGPT, Google AI og andre tjenester forstår hva bedriften din tilbyr.",
  },
  {
    title: "Kontaktskjema og tydelig kontaktinfo",
    body: "Telefon, e-post og kontaktskjema slik at kundene enkelt kommer i kontakt med deg.",
  },
  {
    title: "Rask levering",
    body: "Klar nettside innen 1–2 uker. Ingen lange prosesser eller månedlige byrå-fakturaer.",
  },
];

const audience = [
  "Håndverkere",
  "Rørleggere",
  "Elektrikere",
  "Malere",
  "Vaktmestere",
  "Renhold",
  "Servicebedrifter",
  "Snekkere",
  "Tømrere",
  "Bilverksted",
];

const inclusions = [
  "Én tilpasset nettside (one-pager)",
  "Mobil- og PC-tilpasset design",
  "Tekst skrevet for din bedrift",
  "Lokal SEO og Google Search Console",
  "Strukturert data for AI-søk",
  "Kontaktskjema rett til e-post",
  "1 runde med revisjon",
  "Hjelp med domene og publisering",
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export function NettsideContent() {
  return (
    <main className="relative min-h-screen">
      <MinimalNav />
      <Hero />
      <Benefits />
      <Audience />
      <Testimonial />
      <Pricing />
      <About />
      <FinalCta />
    </main>
  );
}

/* ---------------------------------- Nav ---------------------------------- */

function MinimalNav() {
  return (
    <div className="fixed top-5 inset-x-0 z-[70] flex justify-center pointer-events-none px-4">
      <div
        className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-[var(--rule-strong)] backdrop-blur-2xl py-1.5 pl-2 pr-1.5 bg-white/70"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.7), 0 8px 24px -4px rgba(10,10,10,0.08)",
        }}
      >
        <div className="flex items-center gap-2 pl-2.5 pr-3 py-1.5">
          <span className="relative h-7 w-7 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] flex items-center justify-center font-medium text-[12px] tracking-tight">
            <span className="relative z-10">MB</span>
            <span className="absolute inset-[2px] rounded-full ring-1 ring-white/15 pointer-events-none" />
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-medium tracking-tight text-[var(--ink-soft)]">
            Mohammed
            <span className="text-[var(--ink-mute)]">Barzinje</span>
          </span>
        </div>
        <span className="hidden md:block h-5 w-px bg-[var(--rule-strong)] mx-1" aria-hidden="true" />
        <a
          href="#pris"
          className="hidden md:block px-3.5 py-1.5 text-[12.5px] font-medium tracking-tight text-[var(--ink-soft)] rounded-full hover:text-[var(--ink)] hover:bg-[var(--ink)]/5 transition-colors duration-300"
        >
          Pris
        </a>
        <a
          href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`}
          className="ml-1 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] pl-3.5 pr-1 py-1 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--ink-soft)]"
        >
          <span className="text-[12.5px] font-medium tracking-tight">Kontakt</span>
          <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/10 ring-1 ring-white/15">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

/* ---------------------------------- Hero --------------------------------- */

function Hero() {
  return (
    <section className="relative pt-40 md:pt-52 pb-20 md:pb-28 px-4 md:px-8">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-8">
            <Reveal>
              <div className="eyebrow mb-6">
                <span className="dot" />
                Nettside for lokale bedrifter <span className="text-[var(--ink-mute)] ml-1">/ Sarpsborg</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-medium text-[clamp(2.5rem,6.5vw,5.75rem)] h-display-lg text-[var(--ink)]">
                En enkel nettside som gjør det{" "}
                <span className="italic font-normal text-[var(--ink-mute)]">
                  lettere for lokale kunder
                </span>{" "}
                å finne deg.
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-2xl text-[16px] md:text-[17.5px] leading-[1.7] text-[var(--ink-soft)]">
                Driver du en lokal håndverker- eller servicebedrift uten nettside?
                Jeg lager en ryddig, mobilvennlig side som forteller hva du gjør —
                til en fast pris, ferdig levert på 1–2 uker.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`}
                  className="group/cta inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] pl-5 pr-1.5 py-1.5 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--ink-soft)]"
                >
                  <span className="text-[13.5px] font-medium tracking-tight">
                    Be om et uforpliktende forslag
                  </span>
                  <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white/10 ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/cta:translate-x-[2px] group-hover/cta:-translate-y-[1px]">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#pris"
                  className="text-[13.5px] font-medium tracking-tight text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors duration-300 underline-offset-4 hover:underline"
                >
                  Se hva som er inkludert
                </a>
              </div>
            </Reveal>
          </div>

          {/* Price callout card */}
          <Reveal delay={0.2} className="md:col-span-4">
            <div className="bezel-shell">
              <div className="bezel-core p-7 md:p-8 flex flex-col gap-5">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-mute)] inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Pris
                </span>

                {/* Engangspris */}
                <div>
                  <div className="font-medium text-[40px] md:text-[48px] tracking-[-0.04em] leading-[0.95] text-[var(--ink)]">
                    {PRICE}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)]">
                    {PRICE_NOTE}
                  </div>
                </div>

                <div className="hairline" />

                {/* Månedlig support */}
                <div>
                  <div className="font-medium text-[22px] md:text-[24px] tracking-[-0.03em] leading-[1.1] text-[var(--ink)]">
                    + {SUPPORT_PRICE}
                  </div>
                  <div className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)]">
                    {SUPPORT_NOTE}
                  </div>
                </div>

                <div className="hairline" />

                {/* Kommer i tillegg */}
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)] mb-2">
                    Kommer i tillegg
                  </div>
                  <p className="text-[13px] leading-[1.55] text-[var(--ink-soft)]">
                    Domene (~300 kr/år) og hosting (~100 kr/mnd) faktureres
                    direkte fra leverandør.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Benefits ------------------------------- */

function Benefits() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 border-y border-[var(--rule)] bg-[var(--canvas-soft)]/70">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 md:mb-16 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <div className="eyebrow mb-6">
                <span className="dot" />
                Hva du får <span className="text-[var(--ink-mute)] ml-1">/ N°.01</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-medium text-[clamp(2rem,5vw,4.25rem)] h-display text-[var(--ink)]">
                Alt du trenger.{" "}
                <span className="italic font-normal text-[var(--ink-mute)]">
                  Ingenting du ikke gjør.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="md:col-span-5">
            <p className="md:max-w-sm md:ml-auto text-[14px] leading-[1.7] text-[var(--ink-soft)]">
              Jeg tar meg av tekst, design, oppsett og publisering. Du trenger
              bare bidra med litt info om bedriften.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bezel-shell h-full">
                <div className="bezel-core h-full p-6 md:p-7 flex flex-col gap-3.5">
                  <div className="font-mono tabular-nums text-[11.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-medium text-[19px] md:text-[21px] tracking-[-0.025em] leading-[1.2] text-[var(--ink)]">
                    {b.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-[var(--ink-soft)]">
                    {b.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Audience ------------------------------- */

function Audience() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 md:mb-14 items-end">
          <div className="md:col-span-8">
            <Reveal>
              <div className="eyebrow mb-6">
                <span className="dot" />
                For hvem <span className="text-[var(--ink-mute)] ml-1">/ N°.02</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-medium text-[clamp(2rem,5vw,4.25rem)] h-display text-[var(--ink)]">
                Lagd for lokale{" "}
                <span className="italic font-normal text-[var(--ink-mute)]">
                  bedrifter som leverer faget sitt —
                </span>{" "}
                ikke nettsider.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="md:col-span-4">
            <p className="md:max-w-xs md:ml-auto text-[14px] leading-[1.7] text-[var(--ink-soft)]">
              Du er god i håndverket. Jeg er god på nettsider. Sammen sørger vi
              for at flere finner deg lokalt.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2.5 md:gap-3">
            {audience.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 rounded-full border border-[var(--rule-strong)] bg-[var(--canvas)] px-4 md:px-5 py-2 md:py-2.5 text-[13px] md:text-[14px] font-medium tracking-tight text-[var(--ink-soft)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                {label}
              </span>
            ))}
            <span className="inline-flex items-center gap-2.5 rounded-full border border-dashed border-[var(--rule-strong)] bg-transparent px-4 md:px-5 py-2 md:py-2.5 text-[13px] md:text-[14px] font-medium tracking-tight text-[var(--ink-mute)]">
              … og andre småbedrifter
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonial ------------------------------ */

function Testimonial() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 border-y border-[var(--rule)] bg-[var(--canvas-soft)]/70">
      <div className="max-w-[1080px] mx-auto">
        <Reveal>
          <div className="eyebrow mb-10 md:mb-12">
            <span className="dot" />
            Hva kundene sier
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bezel-shell">
            <div className="bezel-core p-9 md:p-14 lg:p-16">
              {/* Quote mark */}
              <div
                aria-hidden="true"
                className="font-medium text-[80px] md:text-[120px] leading-[0.7] text-[var(--accent)]/35 select-none -mb-2 md:-mb-4"
              >
                &ldquo;
              </div>

              <blockquote className="font-medium text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.025em] leading-[1.3] text-[var(--ink)] max-w-3xl">
                Mohammed er{" "}
                <span className="italic font-normal text-[var(--ink-soft)]">
                  utrolig dyktig.
                </span>{" "}
                Vi har fått ny nettside, og han leverer kontinuerlig support.{" "}
                <span className="italic font-normal text-[var(--ink-soft)]">
                  Ekstremt pålitelig.
                </span>
              </blockquote>

              <div className="mt-9 md:mt-12 pt-7 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <span className="h-11 w-11 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] flex items-center justify-center font-medium text-[14px] tracking-tight">
                    NK
                  </span>
                  <div className="flex flex-col">
                    <span className="font-medium text-[15.5px] tracking-tight text-[var(--ink)]">
                      Nikolai Kaspersen
                    </span>
                    <a
                      href="https://samtakhelse.no"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12.5px] uppercase tracking-[0.2em] text-[var(--ink-mute)] hover:text-[var(--ink-soft)] transition-colors duration-300 inline-flex items-center gap-1.5"
                    >
                      Samtak
                      <span className="text-[var(--ink-faint)]">·</span>
                      <span className="lowercase tracking-normal">samtakhelse.no</span>
                    </a>
                  </div>
                </div>
                <a
                  href="https://samtakhelse.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--rule-strong)] bg-[var(--canvas)] px-4 py-1.5 text-[12px] font-medium tracking-tight text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--canvas-deep)] transition-colors duration-300"
                >
                  Se nettsiden
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------- Pricing ------------------------------- */

function Pricing() {
  return (
    <section
      id="pris"
      className="relative py-28 md:py-36 px-4 md:px-8 bg-[var(--canvas-soft)]/70 border-y border-[var(--rule)]"
    >
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 md:mb-16 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <div className="eyebrow mb-6">
                <span className="dot" />
                Pris <span className="text-[var(--ink-mute)] ml-1">/ N°.03</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-medium text-[clamp(2rem,5vw,4.25rem)] h-display text-[var(--ink)]">
                Én fast pris.{" "}
                <span className="italic font-normal text-[var(--ink-mute)]">
                  Ingen overraskelser.
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* 3-line cost breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {/* 01 — Engangspris */}
          <div className="bezel-shell">
            <div className="bezel-core h-full p-7 md:p-8 flex flex-col">
              <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                <span className="font-mono tabular-nums">01</span>
                <span className="h-3 w-px bg-[var(--rule-strong)]" aria-hidden="true" />
                <span>Engangspris</span>
              </div>
              <div className="mt-6 font-medium text-[44px] md:text-[52px] tracking-[-0.04em] leading-[0.95] text-[var(--ink)]">
                {PRICE}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)]">
                {PRICE_NOTE}
              </div>
              <p className="mt-5 text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                Oppstart, design, tekstskriving, oppsett, lokal SEO og
                publisering. Betales ved leveranse.
              </p>
            </div>
          </div>

          {/* 02 — Månedlig support */}
          <div className="bezel-shell">
            <div className="bezel-core h-full p-7 md:p-8 flex flex-col ring-1 ring-[var(--accent)]/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                  <span className="font-mono tabular-nums">02</span>
                  <span className="h-3 w-px bg-[var(--rule-strong)]" aria-hidden="true" />
                  <span>Månedlig support</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] text-white px-2.5 py-1 text-[9.5px] uppercase tracking-[0.2em] font-medium">
                  Løpende
                </span>
              </div>
              <div className="mt-6 font-medium text-[44px] md:text-[52px] tracking-[-0.04em] leading-[0.95] text-[var(--ink)]">
                {SUPPORT_PRICE}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)]">
                {SUPPORT_NOTE}
              </div>
              <p className="mt-5 text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                Mindre tekst- og bildeoppdateringer, sikkerhetsoppdateringer,
                oppfølging og support når du trenger det. Kan sies opp månedlig.
              </p>
            </div>
          </div>

          {/* 03 — Domene + hosting */}
          <div className="bezel-shell">
            <div className="bezel-core h-full p-7 md:p-8 flex flex-col">
              <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                <span className="font-mono tabular-nums">03</span>
                <span className="h-3 w-px bg-[var(--rule-strong)]" aria-hidden="true" />
                <span>Domene + hosting</span>
              </div>
              <div className="mt-6 font-medium text-[40px] md:text-[44px] tracking-[-0.04em] leading-[1] text-[var(--ink)]">
                Etter forbruk
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)]">
                faktureres direkte fra leverandør
              </div>
              <ul className="mt-5 flex flex-col gap-2.5 text-[14px] leading-[1.55] text-[var(--ink-soft)]">
                <li className="flex items-start justify-between gap-3">
                  <span className="flex items-start gap-2.5">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--ink)]" />
                    Domene (.no)
                  </span>
                  <span className="text-[var(--ink-mute)] whitespace-nowrap">
                    ~300 kr / år
                  </span>
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span className="flex items-start gap-2.5">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--ink)]" />
                    Hosting
                  </span>
                  <span className="text-[var(--ink-mute)] whitespace-nowrap">
                    fra ~100 kr / mnd
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-[12.5px] leading-[1.55] text-[var(--ink-mute)]">
                Jeg hjelper deg å sette opp begge — du står som eier.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Inclusions list */}
        <Reveal delay={0.2}>
          <div className="mt-8 md:mt-10 bezel-shell">
            <div className="bezel-core p-7 md:p-9">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
                <h3 className="text-[12px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">
                  Dette er inkludert i engangsprisen
                </h3>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                  Levering på 1–2 uker
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3.5">
                {inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-[1.55] text-[var(--ink-soft)]"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 pt-7 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-4">
                <p className="text-[14px] leading-[1.6] text-[var(--ink-soft)] max-w-xl">
                  Klar for et konkret tilbud? Send en kort e-post om bedriften
                  din, så får du forslag og fast pris innen 24 timer.
                </p>
                <a
                  href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`}
                  className="group/cta inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] pl-5 pr-1.5 py-1.5 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--ink-soft)] whitespace-nowrap"
                >
                  <span className="text-[13.5px] font-medium tracking-tight">
                    Be om uforpliktende forslag
                  </span>
                  <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white/10 ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/cta:translate-x-[2px] group-hover/cta:-translate-y-[1px]">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- About -------------------------------- */

function About() {
  return (
    <section className="relative py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-4">
            <Reveal>
              <div className="eyebrow mb-6">
                <span className="dot" />
                Om Mohammed <span className="text-[var(--ink-mute)] ml-1">/ N°.04</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="text-[12px] uppercase tracking-[0.22em] text-[var(--ink-mute)] leading-[1.7]">
                <div className="text-[var(--ink-soft)] font-medium mb-1">Sarpsborg</div>
                Østfold, Norge
                <div className="mt-5 text-[var(--ink-soft)] font-medium mb-1">Språk</div>
                Norsk · Engelsk
                <div className="mt-5 text-[var(--ink-soft)] font-medium mb-1">Svartid</div>
                Innen 24 timer
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <p className="font-medium text-[clamp(1.5rem,2.6vw,2.25rem)] tracking-[-0.025em] leading-[1.3] text-[var(--ink)]">
                Jeg holder til i Sarpsborg og hjelper små lokale bedrifter med
                <span className="italic font-normal text-[var(--ink-mute)]">
                  {" "}enkle, ryddige nettsider{" "}
                </span>
                som faktisk virker på mobil — uten å koste mer enn det de skal.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 text-[15.5px] md:text-[16px] leading-[1.7] text-[var(--ink-soft)] max-w-2xl">
                De fleste håndverkere og servicebedrifter jeg jobber med har
                ingen tid til å fikse nettside selv — og ingen lyst til å betale
                tusenvis i måneden til et byrå. Jeg lager én ryddig side, til
                fast pris, som du eier og kan stole på.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA ------------------------------ */

function FinalCta() {
  return (
    <section className="relative py-28 md:py-36 px-4 md:px-8 bg-[var(--canvas-soft)]/70 border-t border-[var(--rule)]">
      <div className="max-w-[1080px] mx-auto">
        <div className="bezel-shell">
          <div className="bezel-core p-10 md:p-16 lg:p-20 text-center">
            <Reveal>
              <div className="eyebrow mb-7 mx-auto">
                <span className="dot" />
                Klar til å komme i gang?
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-medium text-[clamp(2.25rem,5.5vw,4.75rem)] h-display-lg text-[var(--ink)] max-w-3xl mx-auto">
                Vil du se et konkret forslag{" "}
                <span className="italic font-normal text-[var(--ink-mute)]">
                  for din bedrift?
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-xl mx-auto text-[15.5px] md:text-[16.5px] leading-[1.7] text-[var(--ink-soft)]">
                Send en kort e-post med hva bedriften din driver med, så svarer
                jeg innen 24 timer med et konkret forslag og fast pristilbud.
                Helt uforpliktende.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`}
                  className="group/cta inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--canvas-soft)] pl-5 pr-1.5 py-1.5 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--ink-soft)]"
                >
                  <span className="text-[13.5px] font-medium tracking-tight">
                    {EMAIL}
                  </span>
                  <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white/10 ring-1 ring-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/cta:translate-x-[2px] group-hover/cta:-translate-y-[1px]">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 9 9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <p className="mt-10 text-center text-[11px] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
          © {new Date().getFullYear()} Mohammed Barzinje · Sarpsborg, Norge
        </p>
      </div>
    </section>
  );
}
