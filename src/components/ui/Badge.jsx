import { cn } from '../../utils/cn.js';

const VARIANTS = {
  primary: 'bg-primary/10 text-primary border border-primary/30',
  outline: 'bg-transparent text-white border border-border',
  neutral: 'bg-surface-secondary text-white/80 border border-border',
};

export function Badge({ variant = 'primary', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold',
        VARIANTS[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
