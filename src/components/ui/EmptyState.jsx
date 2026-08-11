import { Icon } from './Icon.jsx';

/**
 * Centered placeholder for empty data sets (e.g. gallery/testimonials with
 * no items yet). `icon` is a lucide-react component name.
 */
export function EmptyState({ icon = 'Inbox', title, description, action }) {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface-secondary text-white/60">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      {title && <h3 className="text-xl normal-case tracking-normal text-white">{title}</h3>}
      {description && <p className="max-w-sm text-sm text-white/60">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
