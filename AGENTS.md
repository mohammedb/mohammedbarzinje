# AGENTS.md

This file provides guidance to Codex and other AI coding agents when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

Portfolio and recruiter landing page for Mohammed Barzinje, built with Next.js 16 (App Router), React 19 and Tailwind CSS 4. The design is a dark "product launch": Mohammed is presented like a product, with configurations, a lineup, a changelog and tech specs.

### Project Structure

- `app/`
  - `layout.tsx` - Root layout: metadata, fonts (Geist, Geist Mono, and Instrument Serif for the hero's italic "ship." only), the `?for=` boot script, and global UI (`SmoothScroll`, `ScrollProgress`, `CookieBanner`, `Toaster`) inside `MotionProvider`
  - `page.tsx` - Homepage (server component): one JSON-LD graph (Person, founded Organizations, ProfilePage, WebSite, FAQPage) plus the sections
  - `opengraph-image.tsx` - 1200x630 share card; fetches Geist from Google Fonts at build time and falls back to the next/og font
  - `case-studies/` - Index and `[slug]` pages, content from `lib/case-studies.ts`
  - `globals.css` - Tailwind import, design tokens and component classes
- `components/ui/`
  - Sections in page order: `hero`, `highlights`, `lineup`, `changelog`, `specs`, `faq`, `contact`
  - Shared: `navbar`, `footer`, `action-dock` (sticky CV / copy email / LinkedIn bar), `config-switch`, `toast` (`toast()`, `copyText()`), `reveal`, `logo-stage`, `brand-mark`, `case-study-card`, `cookie-banner`, `smooth-scroll`, `scroll-progress`, `motion-provider`
- `lib/profile.ts` - Single source of truth for landing-page copy and data: profile, configurations, highlights, products, releases, specs, clients and FAQ. The JSON-LD reads from it too.
- `lib/config.ts`, `lib/hooks/use-config.ts` - The configuration system (below)
- `lib/case-studies.ts` - Case-study content
- `lib/utils.ts` - `cn()` helper (clsx + tailwind-merge)
- `public/Resume.pdf` - The CV behind every "Download CV" button (saved as `Mohammed-Barzinje-CV.pdf`). Built with LuaLaTeX from the latest English PM CV in the ai-job-search project (`Z:\Web Projects\ai-job-search\applications\`), with the phone number removed for the public copy.
- `public/projects/*.jpg` - 1600x1000 product screenshots; `public/logos/` - client logos, rendered white with `brightness(0) invert(1)`

### Configurations (tailored links)

The page has three configurations: `pm` (Senior PM, the default), `lead` (Product Lead) and `ai` (AI product). A link with `?for=lead` or `?for=ai` opens the page in that configuration.

- An inline `<head>` script (`configBootScript`) sets `<html data-config>` from `?for=` before first paint.
- Configurable elements render every variant as `.variant[data-variant~=id]` siblings inside a `.stack` grid, and CSS shows the active one, so there is no flash and no hydration mismatch.
- `useConfig()` reads the attribute through `useSyncExternalStore`. `setConfig()` updates the attribute and the URL (`history.replaceState`) and dispatches a `configchange` event.
- Per-configuration copy lives in `configurations` and `highlights` in `lib/profile.ts`.

### Animation and scrolling

- Above-the-fold entrances are plain CSS (`.rise`, `.rise-device`, `.draw-x`, delayed with `--d`) so the hero paints before hydration. Below the fold, `<Reveal>` (Framer Motion `whileInView`) handles entrances.
- `MotionProvider` sets `reducedMotion="user"`, and `globals.css` zeroes CSS animations under `prefers-reduced-motion`.
- Lenis runs on desktop only (skipped on touch or small screens and with reduced motion). It animates hash links with a -64px offset for the fixed navbar; native jumps use `scroll-padding-top: 4rem`.
- Section links: plain `<a href="#id">` on the homepage, `<Link href="/#id">` elsewhere (see `SectionLink` in `navbar.tsx`).

### Design System

Tokens are defined on `:root` and mapped to Tailwind in `@theme inline` (`app/globals.css`):

- Surfaces: `canvas` (#08080a), `raised`, `surface`, `surface-hi`. Lines: `line`, `line-strong`.
- Text: `ink`, `ink-soft`, `muted`, and `faint` (decorative only).
- One accent: `accent` (#cafb42 lime), with `accent-ink` for text on it. `--wine` (an RGB triplet) tints the glows.
- Radius: interactive elements are pills, surfaces use `rounded-surface` (28px), and nested radii subtract the inset (20px inside `p-2`).
- Component classes: `.btn` with `.btn-primary` (lime, one per view), `.btn-ghost` and `.btn-sm`; `.label` (mono caption); `.stack` / `.variant`; `.hero-glow`, `.device`, `.product-grid`, `.rail`, `.dock-position`.
- Easing utilities: `ease-launch`, `ease-fluid`.

### Copy rules

- No em or en dashes in visible copy (write "2023-24", "27-1").
- American spelling ("personalized").
- The FAQ section and the FAQPage JSON-LD both render `faqs` from `lib/profile.ts`, so edit it there.
- Facts (titles, dates, education, languages, venture status) must match the CV and the candidate profile in the ai-job-search project (`.claude/skills/job-application-assistant/01-candidate-profile.md` there). It records corrections such as: no bachelor's degree, no Scrum or sprint experience, and ReddMaten never launched.

### Path Aliases

`@/*` maps to project root (configured in `tsconfig.json`)
