import { cn } from '../../../utils/cn.js';

/**
 * Desktop nav link: color transition + animated underline, with an
 * `aria-current="page"` active-section indicator.
 */
export function NavLink({ href, label, isActive, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group relative inline-block py-2 text-sm font-medium transition-colors duration-300',
        isActive ? 'text-primary' : 'text-white/80 hover:text-white',
      )}
    >
      {label}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -bottom-0.5 start-0 h-px bg-primary transition-all duration-300 ease-out',
          isActive ? 'w-full' : 'w-0 group-hover:w-full',
        )}
      />
    </a>
  );
}
