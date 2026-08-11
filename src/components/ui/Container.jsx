import { cn } from '../../utils/cn.js';

const SIZES = {
  content: 'max-w-content',
  narrow: 'max-w-narrow',
  wide: 'max-w-wide',
};

/**
 * Horizontally-centered max-width wrapper. Use `size` to match the content
 * type: "content" (default page width), "narrow" (copy-heavy text), "wide"
 * (full-bleed galleries).
 */
export function Container({ as: Tag = 'div', size = 'content', className, children, ...props }) {
  return (
    <Tag className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', SIZES[size], className)} {...props}>
      {children}
    </Tag>
  );
}
