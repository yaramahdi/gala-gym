/**
 * Design Tokens — single source of truth for the Jalaa Gym design system.
 *
 * This file is consumed by both `tailwind.config.js` (build-time, Node/CommonJS-safe
 * ESM) and by application code (Framer Motion variants, hooks, inline styles) so the
 * values never drift between Tailwind utility classes and JS-driven logic.
 *
 * Do not hardcode any of these values elsewhere — import from here instead.
 */

export const colors = {
  primary: '#FFC107',
  primaryHover: '#FFD54F',
  background: '#0A0A0A',
  surface: '#141414',
  surfaceSecondary: '#1E1E1E',
  white: '#FFFFFF',
  gray: '#F7F7F7',
  border: 'rgba(255,255,255,0.08)',
};

// Zain gives the Arabic interface a more distinctive, contemporary character
// while staying clear enough for schedules, prices, and equipment details.
export const fontFamily = {
  heading: ['Zain', 'sans-serif'],
  body: ['Zain', 'sans-serif'],
  hero: ['Barlow Condensed', 'sans-serif'],
};

// Tailwind's default spacing scale (0.25rem / 4px increments) already lands on every
// value the guidelines call for: 2->8px 4->16px 6->24px 8->32px 12->48px 16->64px
// 24->96px 32->128px 40->160px. These are semantic aliases for section rhythm on top
// of that scale, used by <Section>/<SectionWrapper> vertical padding.
export const spacing = {
  sectionYSm: '3rem', // 48px
  sectionY: '6rem', // 96px
  sectionYLg: '10rem', // 160px
};

export const borderRadius = {
  btn: '16px',
  card: '24px',
  image: '28px',
  input: '16px',
};

export const boxShadow = {
  card: '0 8px 30px rgba(0, 0, 0, 0.35)',
  glow: '0 0 40px rgba(255, 193, 7, 0.35)',
  glowLg: '0 0 80px rgba(255, 193, 7, 0.45)',
};

// Seconds, for Framer Motion. Guidelines specify a 0.5-0.8s duration range.
export const motionDuration = {
  fast: 0.3,
  base: 0.6,
  slow: 0.8,
};

export const motionEase = {
  standard: [0.16, 1, 0.3, 1],
};

// Milliseconds, mirrors motionDuration for non-Framer contexts (CSS transitions).
export const transitionDuration = {
  fast: 300,
  base: 600,
  slow: 800,
};

export const containers = {
  content: '1280px', // main content max-width
  narrow: '768px', // copy-heavy sections (FAQ, testimonials text)
  wide: '1440px', // full-bleed galleries
};

// Mirrors Tailwind's default breakpoints; exported for JS consumers (useMediaQuery).
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const zIndex = {
  behind: -1,
  base: 0,
  dropdown: 40,
  navbar: 50,
  overlay: 90,
  modal: 100,
  toast: 110,
};

const tokens = {
  colors,
  fontFamily,
  spacing,
  borderRadius,
  boxShadow,
  motionDuration,
  motionEase,
  transitionDuration,
  containers,
  breakpoints,
  zIndex,
};

export default tokens;
