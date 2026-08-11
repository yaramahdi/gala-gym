import { motion } from 'framer-motion';
import { STATISTICS } from '../../../data/statistics.js';
import { fadeUp } from '../../../animations/variants.js';
import { cn } from '../../../utils/cn.js';
import { Icon } from '../../ui/Icon.jsx';

/**
 * Single borderless row at every breakpoint — no card backgrounds, just
 * icon/value/label columns separated by hairline dividers, blending into
 * the photo instead of sitting in boxes. Sizing scales up gradually from
 * mobile to desktop rather than switching to a different layout at `lg`.
 */
export function HeroStats({ className }) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn('grid grid-cols-4 gap-2 divide-x divide-white/10 sm:gap-3 lg:gap-4', className)}
    >
      {STATISTICS.map((stat) => (
        <div
          key={stat.id}
          className="flex min-w-0 flex-col items-center gap-1 px-1.5 text-center first:ps-0 last:pe-0 sm:px-3 lg:items-start lg:px-0 lg:text-start"
        >
          <Icon name={stat.icon} className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          <span className="whitespace-nowrap text-base font-extrabold text-white sm:text-xl lg:text-2xl">
            {stat.value}
            {stat.suffix}
          </span>
          <span dir="rtl" className="w-full truncate text-[10px] leading-tight text-white/60 sm:text-xs lg:text-sm">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
