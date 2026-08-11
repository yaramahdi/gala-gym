import { cn } from '../../utils/cn.js';

const SPACING = {
  sm: 'py-section-y-sm',
  md: 'py-section-y',
  lg: 'py-section-y-lg',
};

/**
 * Low-level `<section>` primitive: vertical rhythm only, no max-width or id
 * logic. Prefer `SectionWrapper` for actual page sections — this exists for
 * cases that need custom inner structure (e.g. full-bleed backgrounds).
 */
export function Section({ as: Tag = 'section', spacing = 'md', className, children, ...props }) {
  return (
    <Tag className={cn(SPACING[spacing], className)} {...props}>
      {children}
    </Tag>
  );
}
