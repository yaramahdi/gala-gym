import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn.js';
import { motionDuration } from '../../config/tokens.js';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-14 w-14',
};

/**
 * Circular icon-only button, for social links, close buttons, carousel arrows.
 * Pass either `icon` (lucide component name string) or `children` (custom SVG).
 */
export const IconButton = forwardRef(function IconButton(
  { icon, size = 'md', href, label, className, children, ...props },
  ref,
) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      aria-label={label}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: motionDuration.fast }}
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-border bg-surface-secondary text-white transition-colors duration-300 hover:border-primary hover:text-primary',
        SIZES[size],
        className,
      )}
      {...props}
    >
      {icon ? <Icon name={icon} className="h-[45%] w-[45%]" /> : children}
    </Component>
  );
});
