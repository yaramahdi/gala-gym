import { motion, useReducedMotion } from 'framer-motion';
import { scrollToId } from '../../../utils/scroll.js';

/**
 * Minimal animated "scroll for more" affordance. A real link (not a bare
 * div) so it's keyboard-reachable and announced correctly; smooth-scrolls
 * to the Explore section using the same offset-aware helper as the navbar.
 */
export function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  const handleClick = (event) => {
    event.preventDefault();
    scrollToId('explore');
  };

  return (
    <motion.a
      href="#explore"
      onClick={handleClick}
      aria-label="مرر للأسفل لاستكشاف النادي"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="group absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit items-center justify-center rounded-full focus-visible:outline-offset-4"
    >
      <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5 transition-colors duration-300 group-hover:border-primary">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-primary"
          animate={shouldReduceMotion ? undefined : { y: [0, 14, 0], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </span>
    </motion.a>
  );
}
