import { cn } from '../../utils/cn.js';

export function Divider({ orientation = 'horizontal', className }) {
  if (orientation === 'vertical') {
    return <div className={cn('w-px self-stretch bg-border', className)} />;
  }

  return <div className={cn('h-px w-full bg-border', className)} />;
}
