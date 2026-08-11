import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn.js';
import { motionDuration } from '../../config/tokens.js';

const VARIANTS = {
  primary: 'bg-primary text-background hover:bg-primary-hover',
  secondary: 'bg-surface-secondary text-white border border-border hover:border-primary/50',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-background',
  ghost: 'text-white hover:text-primary',
};

const SIZES = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-7 text-sm',
  lg: 'h-14 px-9 text-base',
};

/**
 * Polymorphic button: renders an <a> when `href` is passed, otherwise a <button>.
 */
export const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', href, className, children, ...props },
  ref,
) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: motionDuration.fast }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-btn font-body font-semibold tracking-wide transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
});
