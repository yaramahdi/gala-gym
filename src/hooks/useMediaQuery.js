import { useEffect, useState } from 'react';
import { breakpoints } from '../config/tokens.js';

/**
 * Subscribes to a raw media query string.
 * @example useMediaQuery('(min-width: 1024px)')
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handleChange = (e) => setMatches(e.matches);

    setMatches(mql.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

/**
 * Convenience wrapper around a design-system breakpoint key.
 * @example useBreakpoint('lg') // true once viewport >= 1024px
 */
export function useBreakpoint(breakpoint) {
  return useMediaQuery(`(min-width: ${breakpoints[breakpoint]}px)`);
}
