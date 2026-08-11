import { motion } from 'framer-motion';
import { fadeUp } from '../../../animations/variants.js';
import { Icon } from '../../ui/Icon.jsx';

/**
 * One machine tile on a category page (/equipment/:slug) — photo up top,
 * name, and a small target-muscle icon+label row. Tapping opens the full
 * detail modal. Same image-zoom/lift hover treatment as EquipmentGroupCard
 * for visual consistency across the equipment browsing flow.
 */
export function EquipmentItemCard({ equipment, onSelect }) {
  const { name, image, muscleIcon, targetMuscles } = equipment;

  return (
    <motion.div variants={fadeUp} className="h-full">
      <button
        type="button"
        onClick={onSelect}
        className="group flex h-full w-full flex-col overflow-hidden rounded-card border border-border bg-surface-secondary/50 text-start shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
      >
        <div className="relative aspect-square w-full overflow-hidden sm:aspect-[4/3]">
          {image ? (
            <img
              src={image}
              alt={name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-secondary to-background transition-transform duration-700 ease-out group-hover:scale-110"
            >
              <Icon name="Dumbbell" className="h-8 w-8 text-white/10" />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
          <h3 className="text-sm leading-snug sm:text-base">{name}</h3>
          <div className="mt-auto flex items-center gap-2 text-[10px] text-white/50 sm:text-xs">
            {muscleIcon && (
              <img
                src={muscleIcon}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-9 w-9 shrink-0 rounded-md object-contain sm:h-11 sm:w-11"
              />
            )}
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Icon name="Target" className="h-2.5 w-2.5 text-primary" />
            </span>
            <span className="truncate">{targetMuscles.join('، ')}</span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
