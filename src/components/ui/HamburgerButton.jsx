import { motion } from 'framer-motion';
import { cn } from '../../utils/cn.js';
import { motionDuration } from '../../config/tokens.js';

const LINE_OFFSET = 6; // px, distance of top/bottom bars from center when closed

/**
 * Accessible hamburger <-> close toggle. `open` drives the icon morph;
 * the caller owns the actual open/close state (see UIContext).
 */
export function HamburgerButton({ open, onClick, className, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
      aria-expanded={open}
      aria-controls="mobile-nav"
      className={cn(
        'relative inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors duration-300 hover:text-primary',
        className,
      )}
      {...props}
    >
      <span className="relative block h-4 w-6">
        <motion.span
          className="absolute left-0 h-0.5 w-6 rounded-full bg-current"
          style={{ top: 'calc(50% - 1px)' }}
          animate={{ y: open ? 0 : -LINE_OFFSET, rotate: open ? 45 : 0 }}
          transition={{ duration: motionDuration.fast }}
        />
        <motion.span
          className="absolute left-0 h-0.5 w-6 rounded-full bg-current"
          style={{ top: 'calc(50% - 1px)' }}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: motionDuration.fast }}
        />
        <motion.span
          className="absolute left-0 h-0.5 w-6 rounded-full bg-current"
          style={{ top: 'calc(50% - 1px)' }}
          animate={{ y: open ? 0 : LINE_OFFSET, rotate: open ? -45 : 0 }}
          transition={{ duration: motionDuration.fast }}
        />
      </span>
    </button>
  );
}
