import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { viewportReveal } from '../animations/variants.js';

/**
 * Ref + boolean pair for scroll-triggered reveals in cases that need the
 * `inView` state directly (e.g. to also trigger a non-Framer side effect).
 * For simple entrance animations, prefer `whileInView` + variants directly.
 *
 * @example
 * const { ref, isInView } = useScrollReveal();
 * <div ref={ref} className={isInView ? 'opacity-100' : 'opacity-0'} />
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { ...viewportReveal, ...options });

  return { ref, isInView };
}
