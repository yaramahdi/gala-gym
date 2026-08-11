import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn.js';
import { scrollToId } from '../../../utils/scroll.js';
import { fadeUp } from '../../../animations/variants.js';
import { Icon } from '../../ui/Icon.jsx';

/**
 * One "destination" tile in the Explore tour. Entrance animation lives on
 * the outer wrapper (Framer Motion, opacity/y only); all hover interaction
 * (lift, image zoom, overlay darken, title nudge, arrow reveal) is plain
 * CSS on the inner link — mixing Framer-driven and CSS-driven `transform`
 * on the same element causes them to fight (see Navbar's header for the
 * same split), so they're kept on separate elements here too.
 */
export function ExploreCard({ item, className }) {
  const { title, description, image, icon, slug } = item;

  const handleClick = (event) => {
    event.preventDefault();
    scrollToId(slug);
  };

  return (
    <motion.li variants={fadeUp} className={cn('h-full list-none', className)}>
      <a
        href={`#${slug}`}
        onClick={handleClick}
        className="group relative flex h-full flex-col overflow-hidden rounded-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
      >
        <div className="absolute inset-0 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={`${title} في Jalaa Gym`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-secondary to-background transition-transform duration-700 ease-out group-hover:scale-110"
            >
              <Icon name={icon} className="h-8 w-8 text-white/10 sm:h-16 sm:w-16" />
            </div>
          )}
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/45 to-background/5 transition-colors duration-500 group-hover:via-background/70"
        />

        {!image && (
          <span className="absolute end-2 top-2 rounded-full border border-border bg-background/60 px-2 py-0.5 text-[9px] font-semibold text-white/50 sm:end-4 sm:top-4 sm:px-3 sm:py-1 sm:text-[11px]">
            الصورة قريباً
          </span>
        )}

        <div className="relative z-10 mt-auto p-3 sm:p-6 lg:p-7">
          <div className="flex items-center gap-1.5 transition-transform duration-500 group-hover:-translate-y-1 sm:gap-2">
            <h3 className="line-clamp-2 text-sm leading-tight sm:text-2xl lg:text-3xl">{title}</h3>
            {/* Points toward reading-forward (left, in RTL); starts tucked
                toward the title and slides outward on hover. */}
            <Icon
              name="ArrowUpLeft"
              className="h-3.5 w-3.5 shrink-0 translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:h-5 sm:w-5"
            />
          </div>
          <p className="mt-1 line-clamp-2 max-w-sm text-[10px] leading-snug text-white/70 sm:mt-2 sm:text-sm lg:text-base">
            {description}
          </p>
        </div>
      </a>
    </motion.li>
  );
}
