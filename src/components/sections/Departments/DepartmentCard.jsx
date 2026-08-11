import { motion } from 'framer-motion';
import { fadeUp } from '../../../animations/variants.js';
import { Icon } from '../../ui/Icon.jsx';

/**
 * One of the two homepage "sections" cards (Women/Men). Same image-background
 * + icon-placeholder fallback as EquipmentGroupCard (empty `image` in the data
 * shows an icon on a gradient until real photography is supplied), but taller
 * and static (no link/hover-lift) since the bulk of the card is a schedule +
 * pricing readout rather than a single CTA.
 */
export function DepartmentCard({ department }) {
  const { title, icon, image, hours, cardio, pricing } = department;

  return (
    <motion.div
      variants={fadeUp}
      className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-card"
    >
      <div className="relative h-36 w-full shrink-0 overflow-hidden sm:h-48 lg:h-56">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-[50%_20%]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-secondary to-background"
          >
            <Icon name={icon} className="h-10 w-10 text-white/10 sm:h-14 sm:w-14" />
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
        />

        <h3 className="absolute inset-x-0 bottom-0 p-3 text-lg sm:p-5 sm:text-2xl lg:text-3xl">{title}</h3>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-3 sm:gap-5 sm:p-5 lg:p-6">
        <div className="flex flex-col gap-2">
          {hours.map((row) => (
            <div key={row.days} className="flex items-start gap-2 text-xs text-white/80 sm:text-sm">
              <Icon name="CalendarDays" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {row.days}: <span className="text-white">{row.time}</span>
              </span>
            </div>
          ))}
        </div>

        {cardio.length > 0 && (
          <div className="flex min-h-[7.5rem] flex-col gap-2 border-t border-border pt-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary sm:text-sm">
              <Icon name="HeartPulse" className="h-4 w-4 shrink-0" />
              <span>ساعات حصص الكارديو</span>
            </div>
            {cardio.map((row) => (
              <p key={row.days} className="text-xs leading-relaxed text-white/70 sm:text-sm">
                {row.days}: <span className="text-white">{row.slots}</span>
              </p>
            ))}
          </div>
        )}

        {cardio.length === 0 && (
          <div className="flex min-h-[7.5rem] flex-col justify-center gap-2 border-t border-border pt-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary sm:text-sm">
              <Icon name="HeartPulse" className="h-4 w-4 shrink-0" />
              <span>ساعات حصص الكارديو</span>
            </div>
            <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60 sm:text-sm">
              لا يوجد كارديو
            </span>
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
          {pricing.map((tier) => (
            <span
              key={tier.label}
              className="inline-flex items-center gap-1.5 rounded-btn border border-primary/40 bg-background/60 px-2.5 py-1.5 text-[11px] font-bold text-white sm:px-3 sm:text-xs"
            >
              <Icon name="Tag" className="h-3.5 w-3.5 shrink-0 text-primary" />
              {tier.label}: <span className="text-primary">{tier.price}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
