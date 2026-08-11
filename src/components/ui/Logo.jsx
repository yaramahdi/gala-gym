import { cn } from '../../utils/cn.js';
import { SITE } from '../../constants/siteInfo.js';
import logoMark from '../../assets/images/logo.png';

/**
 * Icon + wordmark lockup. Reused by the navbar and footer, so it stays
 * generic (href/onClick pass-through) rather than owning any scroll logic.
 */
export function Logo({ href = '#home', onClick, showWordmark = true, className }) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={`${SITE.name} — العودة للأعلى`}
      className={cn('inline-flex items-center gap-2 sm:gap-3', className)}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white p-1 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
        <img src={logoMark} alt="" className="h-full w-full object-contain" />
      </span>
      {showWordmark && (
        <span
          dir="ltr"
          className="font-heading text-base uppercase leading-none text-white sm:text-xl lg:text-2xl"
        >
          {SITE.name}
        </span>
      )}
    </a>
  );
}
