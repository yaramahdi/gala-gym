import { motion } from 'framer-motion';
import { SectionWrapper } from '../../layout/SectionWrapper.jsx';
import { SectionTitle } from '../../ui/SectionTitle.jsx';
import { Icon } from '../../ui/Icon.jsx';
import { SITE } from '../../../constants/siteInfo.js';
import { fadeUp, staggerContainer, viewportReveal } from '../../../animations/variants.js';
import locationImage from '../../../assets/images/location.webp';

/**
 * "الموقع" — building photo + address, two columns at `lg`. No `dir`
 * override here (unlike Hero), so normal RTL flow already puts the image
 * (first in markup) on the right and the address block on the left, which
 * is the requested layout. Single column, image first, on smaller screens.
 */
export function Location() {
  return (
    <SectionWrapper id="location" containerSize="wide">
      <SectionTitle label="الموقع" title="وين نلاقيك" />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportReveal}
        className="mt-10 grid items-center gap-6 lg:grid-cols-2 lg:gap-10"
      >
        <motion.div
          variants={fadeUp}
          className="relative h-64 w-full overflow-hidden rounded-card border border-border sm:h-80 lg:h-[26rem]"
        >
          <img
            src={locationImage}
            alt={SITE.address}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background/60 text-primary">
            <Icon name="MapPin" className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">العنوان</h3>
            <p className="mt-1 text-sm text-white/70 sm:text-base">{SITE.address}</p>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
