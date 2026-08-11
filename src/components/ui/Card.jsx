import { motion } from 'framer-motion';
import { cn } from '../../utils/cn.js';
import { motionDuration } from '../../config/tokens.js';

/**
 * Base surface for equipment/coach/plan/testimonial cards. Pass `hover` to
 * enable a subtle lift + glow on hover (avoid on cards that are already
 * inside a hover-driven parent, to prevent double motion).
 */
export function Card({ hover = false, className, children, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: '0 0 40px rgba(255,193,7,0.2)' } : undefined}
      transition={{ duration: motionDuration.fast }}
      className={cn(
        'rounded-card border border-border bg-surface p-6 shadow-card sm:p-8',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
