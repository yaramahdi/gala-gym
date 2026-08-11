import { breakpoints } from '../config/tokens.js';

/**
 * Builds a `(min-width: ...)` media query string for a token breakpoint key.
 * @example toMediaQuery('lg') // '(min-width: 1024px)'
 */
export function toMediaQuery(breakpoint) {
  return `(min-width: ${breakpoints[breakpoint]}px)`;
}

/**
 * Picks a value based on the current width against the design system's
 * breakpoints, mobile-first (base < sm < md < lg < xl < 2xl).
 * @example pickByWidth(window.innerWidth, { base: 1, lg: 3, xl: 4 })
 */
export function pickByWidth(width, values) {
  const order = ['2xl', 'xl', 'lg', 'md', 'sm'];
  for (const key of order) {
    if (key in values && width >= breakpoints[key]) return values[key];
  }
  return values.base;
}
