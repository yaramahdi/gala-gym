/**
 * Primary navigation links. `href` values are in-page anchors matching each
 * section's `id` (see PROJECT_GUIDELINES.md "Website Sections") — ids stay
 * in English/kebab-case; only the visible `label` is translated.
 */
export const NAV_LINKS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'استكشف النادي', href: '#explore' },
  { label: 'الأقسام', href: '#departments' },
  { label: 'الأجهزة', href: '#equipment' },
  { label: 'الموقع', href: '#location' },
];

// Derived once at module load — a stable array reference so consumers (e.g.
// useActiveSection) don't need to re-memoize it themselves.
export const NAV_IDS = NAV_LINKS.map((link) => link.href.replace('#', ''));
