import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../../animations/variants.js';
import { formatMachineCount } from '../../../data/equipment.js';
import { Icon } from '../../ui/Icon.jsx';

/**
 * One of the homepage's 3 top-level category cards (Chest/Back/Lower Body).
 * Links out to its dedicated /equipment/:slug page rather than opening a
 * modal — the homepage only introduces the equipment. Same image-background
 * + gradient-overlay treatment as ExploreCard, and the same split between
 * Framer-driven entrance (outer wrapper) and CSS-driven hover (inner link)
 * to avoid the two fighting over `transform`.
 */
export function EquipmentGroupCard({ group, machineCount }) {
  const { title, icon, image, slug } = group;

  return (
    <motion.div variants={fadeUp} className="h-full">
      <Link
        to={`/equipment/${slug}`}
        className="group relative flex h-52 w-full flex-col justify-end overflow-hidden rounded-card border border-border shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow sm:h-80 lg:h-[26rem]"
      >
        <div className="absolute inset-0 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-secondary to-background transition-transform duration-700 ease-out group-hover:scale-110"
            >
              <Icon name={icon} className="h-8 w-8 text-white/10 sm:h-14 sm:w-14" />
            </div>
          )}
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/55 to-background/10 transition-colors duration-500 group-hover:via-background/75"
        />

        <div className="relative z-10 flex flex-col gap-1 p-3 pb-4 sm:gap-2 sm:p-6 sm:pb-6 lg:p-7">
          <div className="flex items-center gap-1.5 transition-transform duration-500 group-hover:-translate-y-1 sm:gap-2">
            <h3 className="line-clamp-2 text-sm leading-tight sm:text-2xl lg:text-3xl">{title}</h3>
          </div>

          <div className="mt-0.5 flex items-center gap-1 text-[10px] font-semibold text-primary sm:mt-1 sm:gap-1.5 sm:text-xs">
            <Icon name="Dumbbell" className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <span>{formatMachineCount(machineCount)}</span>
          </div>

          <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-btn border border-primary/40 bg-background/40 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-background sm:mt-3 sm:gap-1.5 sm:px-4 sm:py-2 sm:text-sm">
            استكشف الأجهزة
            <Icon
              name="ArrowUpLeft"
              className="h-3 w-3 shrink-0 -translate-x-0.5 transition-transform duration-300 group-hover:translate-x-0 sm:h-4 sm:w-4"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
