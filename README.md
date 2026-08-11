# Jalaa Gym

Premium gym website. React + Vite + Tailwind CSS + Framer Motion.

See [`PROJECT_GUIDELINES.md`](./PROJECT_GUIDELINES.md) for the full design brief.

## Stack

- React 19 + Vite
- Tailwind CSS 3 (config-driven design system)
- Framer Motion (animation variants in `src/animations`)
- lucide-react (UI icons) + hand-wrapped brand marks (`src/components/ui/BrandIcons.jsx`)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run lint      # oxlint
```

## Architecture

```
src/
  assets/            static images/icons
  components/
    ui/              atomic, presentational components (Button, Card, Input, ...)
    layout/           structural composition (PageWrapper, SectionWrapper, Grid)
    sections/         page sections (Navbar, Hero, ...) — not yet built
  pages/              route-level components — not yet built
  hooks/              reusable hooks (useScrollPosition, useMediaQuery, ...)
  utils/              framework-agnostic helpers (cn, scroll, image, ...)
  constants/           nav links, social links, site info, theme re-exports
  config/
    tokens.js          canonical design tokens — single source of truth,
                        consumed by tailwind.config.js and JS alike
  animations/          Framer Motion variants (fadeUp, staggerContainer, ...)
  styles/
    globals.css         Tailwind layers, base element styles, scrollbar, a11y
  data/                placeholder content shape for each data-driven section
  context/             cross-component UI state (mobile menu, etc.)
```

**Design tokens** live in `src/config/tokens.js` and flow into
`tailwind.config.js` — never hardcode a color, radius, shadow, or spacing
value; extend the token file and consume it via Tailwind classes or JS
import instead.
