import { motion } from 'framer-motion';
import { cn } from '../../utils/cn.js';
import { fadeUp, staggerContainer, viewportReveal } from '../../animations/variants.js';
import { SectionLabel } from './SectionLabel.jsx';

/**
 * Standard section heading block: eyebrow label + heading + optional
 * description, animating in as a group on scroll into view.
 */
export function SectionTitle({ label, title, description, align = 'center', className }) {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {label && <motion.div variants={fadeUp}>{typeof label === 'string' ? <SectionLabel>{label}</SectionLabel> : label}</motion.div>}
      {title && <motion.h2 variants={fadeUp}>{title}</motion.h2>}
      {description && (
        <motion.p variants={fadeUp} className={cn('max-w-2xl text-base sm:text-lg', align === 'center' && 'mx-auto')}>
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
