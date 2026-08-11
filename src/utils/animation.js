/**
 * Helpers for composing Framer Motion variants defined in `src/animations`.
 * Keeping this logic here (rather than duplicated per-component) is what lets
 * every section reuse the same fade/stagger variants with per-instance timing.
 */

/**
 * Clones a variant and overrides its transition delay — for staggering
 * elements that aren't direct children of a `staggerChildren` container.
 */
export function withDelay(variant, delay = 0) {
  return {
    ...variant,
    visible: {
      ...variant.visible,
      transition: {
        ...variant.visible?.transition,
        delay,
      },
    },
  };
}

/**
 * Standard viewport config for scroll-triggered animations: fires once,
 * slightly before the element is fully in view.
 */
export function getViewportOptions({ amount = 0.2, once = true } = {}) {
  return { once, amount, margin: '0px 0px -80px 0px' };
}
