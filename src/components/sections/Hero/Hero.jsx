import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../../animations/variants.js';
import { SITE } from '../../../constants/siteInfo.js';
import { scrollToId } from '../../../utils/scroll.js';
import { Container } from '../../ui/Container.jsx';
import { Button } from '../../ui/Button.jsx';
import { SectionLabel } from '../../ui/SectionLabel.jsx';
import { ParticleField } from './ParticleField.jsx';
import { ScrollIndicator } from './ScrollIndicator.jsx';
import { HeroStats } from './HeroStats.jsx';
import heroImage from '../../../assets/images/hero.webp';

// Centers every breakpoint's crop on the illuminated "Jalaa Gym" wall sign
// (~64%/35% into the source photo), so cover-cropping always trims the
// emptier left/bottom field first and the logo is never the part that's cut.
// `object-position` and gradient direction below are physical CSS (never
// logical/dir-aware), which is intentional here — the site is RTL, but the
// photo's composition is fixed pixels, so both stay pointed the same way
// regardless of language; see the content block's own comment for how text
// reconciles with that.
const IMAGE_FOCAL_POINT = 'object-[64%_35%]';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleAnchorClick = (id) => (event) => {
    event.preventDefault();
    scrollToId(id);
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-stretch overflow-hidden bg-background pt-40 sm:pt-44 md:pt-48 lg:items-start lg:pt-32"
    >
      <div aria-hidden="true" className="absolute inset-0 h-full w-full">
        <img
          src={heroImage}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={`h-full w-full object-cover ${IMAGE_FOCAL_POINT}`}
        />

        {/* Left-to-right scrim for text legibility — the welcome/stats
            content sits directly over the image at every breakpoint, not
            just desktop, so this now renders everywhere. */}
        <div className="absolute inset-0 bg-gradient-to-r from-background from-5% via-background/80 via-30% to-transparent to-[55%]" />

        {/* Bottom fade — grounds the scroll indicator against the photo. */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>

      {!shouldReduceMotion && <ParticleField />}

      <Container className="relative z-10 lg:min-h-[calc(100vh-8rem)]">
        {/* Site-wide RTL is a deliberate exception for this whole block: the
            photo's empty field, the Latin wordmark, and the client's
            preference all keep it reading left-to-right regardless of
            viewport. Below `lg`, this is a full-height flex column with 3
            items — text, buttons, stats — spread out by `justify-between`
            instead of stacked tight under each other; that scales with the
            actual viewport height instead of fixed margins, so the buttons
            land in the same relative spot on a short phone and a tall one.
            At `lg` it's a plain top-to-bottom stack instead (label/title,
            buttons, stats), capped to `lg:max-w-2xl` — stats stay off the
            photo's illustration entirely rather than living in their own
            column beside it. */}
        <motion.div
          dir="ltr"
          variants={staggerContainer(0.15, shouldReduceMotion ? 0 : 0.1)}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          animate="visible"
          className="flex h-full flex-col justify-between pb-24 sm:pb-28 md:pb-32 lg:block lg:h-auto lg:pb-0"
        >
          <div className="lg:max-w-2xl">
            <motion.div variants={fadeUp}>
              <SectionLabel className="text-xs sm:text-sm">PREMIUM FITNESS CLUB</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-3 text-4xl uppercase leading-[1.05] sm:mt-4 sm:text-6xl md:text-7xl lg:mt-5 lg:font-hero lg:text-7xl lg:leading-[0.92] lg:tracking-[0.03em] xl:text-8xl"
            >
              {SITE.name}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 hidden max-w-md text-sm font-semibold tracking-[0.08em] text-white/80 lg:block lg:text-base xl:text-lg">
              FORGE YOUR STRENGTH. OWN YOUR STORY.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 lg:mt-12">
            <Button
              href="#explore"
              variant="outline"
              onClick={handleAnchorClick('explore')}
              className="h-12 px-7 text-sm transition-shadow duration-300 hover:shadow-glow sm:h-14 sm:px-8 lg:h-16 lg:px-10 lg:text-lg"
            >
              استكشف النادي
            </Button>

            <Button
              href="#departments"
              variant="primary"
              onClick={handleAnchorClick('departments')}
              className="h-12 px-7 text-sm transition-shadow duration-300 hover:shadow-glow sm:h-14 sm:px-8 lg:h-16 lg:px-10 lg:text-lg"
            >
              الأقسام
            </Button>
          </motion.div>

          <HeroStats className="w-full mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:absolute lg:inset-x-auto lg:bottom-24 lg:right-0 lg:mx-0 lg:mt-0 lg:w-[26rem] lg:max-w-none" />
        </motion.div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
