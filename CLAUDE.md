# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

This is a personal portfolio site built with Next.js 16 (App Router), React 19, and Tailwind CSS 4.

### Project Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with metadata, fonts (Geist), and global providers
  - `page.tsx` - Homepage composing all section components (client component)
  - `globals.css` - Tailwind imports and custom CSS (theme variables, retro utilities)
- `components/ui/` - All UI components for the portfolio sections
- `lib/utils.ts` - `cn()` helper for className merging (clsx + tailwind-merge)

### Key Technologies

- **Framer Motion** - All animations including the `<Reveal>` component for scroll-triggered animations
- **Lenis** - Smooth scrolling (via `<SmoothScroll>` component)
- **Custom cursor** - Site uses `cursor: none` with a custom `<CustomCursor>` component

### Design System

CSS variables defined in `globals.css`:
- `--bg-page-start`, `--bg-page-end` - Gradient background (peach to pink)
- `--bg-window` - Bone white for card backgrounds
- `--accent-lime` (#cafb42) - Primary accent color
- `--accent-purple` (#b0aefb) - Secondary accent
- Retro shadow utilities: `.window-frame`, `.retro-btn`

### Path Aliases

`@/*` maps to project root (configured in `tsconfig.json`)
