import { cn } from '../../utils/cn.js';

// Fully static so Tailwind's class scanner can find every combination
// (dynamically templated class strings like `${bp}:grid-cols-${n}` are
// invisible to Tailwind's JIT scanner and get silently dropped).
const COL_CLASSES = {
  sm: { 1: 'sm:grid-cols-1', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4' },
  md: { 1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' },
  lg: { 1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4' },
  xl: { 1: 'xl:grid-cols-1', 2: 'xl:grid-cols-2', 3: 'xl:grid-cols-3', 4: 'xl:grid-cols-4' },
};

const BASE_COL_CLASSES = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4' };

const GAP_CLASSES = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
};

/**
 * Responsive grid helper. Mobile is single-column by default (`base`
 * overrides that starting point); `cols` sets the column count per
 * breakpoint from a fixed 1-4 range.
 * @example <Grid cols={{ sm: 2, lg: 3 }} gap="lg">...</Grid>
 * @example <Grid base={3} gap="sm">...</Grid> // fixed 3 columns on every screen
 */
export function Grid({ base = 1, cols = { sm: 2, lg: 3 }, gap = 'md', className, children }) {
  const colClasses = Object.entries(cols).map(([breakpoint, count]) => COL_CLASSES[breakpoint]?.[count]);

  return (
    <div className={cn('grid', BASE_COL_CLASSES[base], ...colClasses, GAP_CLASSES[gap], className)}>{children}</div>
  );
}
