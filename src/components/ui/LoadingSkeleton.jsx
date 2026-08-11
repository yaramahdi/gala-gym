import { cn } from '../../utils/cn.js';

const SHAPES = {
  text: 'h-4 rounded-md',
  circle: 'aspect-square rounded-full',
  rect: 'rounded-card',
};

/**
 * Animated placeholder block for content that loads asynchronously
 * (images, remote data). Defaults to a full-width text line.
 */
export function LoadingSkeleton({ shape = 'text', className }) {
  return <div className={cn('animate-pulse bg-surface-secondary', SHAPES[shape], className)} />;
}
