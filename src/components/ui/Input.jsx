import { forwardRef } from 'react';
import { cn } from '../../utils/cn.js';

export const Input = forwardRef(function Input({ label, error, id, className, ...props }, ref) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          'h-12 rounded-input border border-border bg-surface px-4 text-sm text-white placeholder:text-white/40 transition-colors duration-300 focus:border-primary focus:outline-none',
          error && 'border-red-500/60',
          className,
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
});
