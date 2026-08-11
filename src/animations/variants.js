import { motionDuration, motionEase } from '../config/tokens.js';

const transition = (duration = motionDuration.base, delay = 0) => ({
  duration,
  delay,
  ease: motionEase.standard,
});

const DISTANCE = 32;

export const fadeUp = {
  hidden: { opacity: 0, y: DISTANCE },
  visible: { opacity: 1, y: 0, transition: transition() },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -DISTANCE },
  visible: { opacity: 1, y: 0, transition: transition() },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: DISTANCE },
  visible: { opacity: 1, x: 0, transition: transition() },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -DISTANCE },
  visible: { opacity: 1, x: 0, transition: transition() },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition() },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: transition() },
};

/**
 * Apply as the `variants` prop on a parent; children with their own variants
 * (e.g. fadeUp) will animate in sequence.
 */
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Standard viewport-triggered entrance: use with `whileInView="visible"` + `initial="hidden"`. */
export const viewportReveal = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -80px 0px',
};

/** Subtle hover lift for cards/buttons. */
export const hoverLift = {
  y: -6,
  transition: transition(motionDuration.fast),
};

/** Subtle hover scale for images/icons. */
export const hoverScale = {
  scale: 1.03,
  transition: transition(motionDuration.fast),
};

/** Page-level transition for route changes. */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: transition(motionDuration.base) },
  exit: { opacity: 0, transition: transition(motionDuration.fast) },
};
