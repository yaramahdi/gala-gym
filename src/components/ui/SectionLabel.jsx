import { cn } from '../../utils/cn.js';

/**
 * Small eyebrow/kicker shown above a SectionTitle (e.g. "— استكشف —").
 * No letter-tracking/uppercase — those are Latin-typography conventions
 * that don't apply to (and visually break) Arabic script.
 */
export function SectionLabel({ className, children }) {
  return (
    <span
      className={cn('inline-flex items-center gap-3 text-sm font-bold text-primary', className)}
    >
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}
