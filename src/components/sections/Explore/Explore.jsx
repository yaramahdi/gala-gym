import { motion } from 'framer-motion';
import { SectionWrapper } from '../../layout/SectionWrapper.jsx';
import { SectionTitle } from '../../ui/SectionTitle.jsx';
import { ExploreCard } from './ExploreCard.jsx';
import { EXPLORE_ITEMS } from '../../../data/explore.js';
import { staggerContainer, viewportReveal } from '../../../animations/variants.js';

/**
 * Desktop uses a 3-column, 2-row bento grid where the first two cards claim
 * extra space (Strength Equipment tall, Cardio Zone wide across the other
 * row) so the four tiles read as an asymmetric, editorial layout rather
 * than a uniform grid. Grid `col-span`/`row-span` follow the document's
 * `dir` automatically — under RTL the tall card lands at the grid's start
 * (physical right) instead of the left, no extra mirroring needed. Below
 * `lg` these span classes simply don't apply, so it falls back to a plain,
 * uniform 2-column grid (see Explore.jsx) all the way down to mobile.
 */
const CARD_SPANS = ['lg:col-span-1 lg:row-span-2', 'lg:col-span-2 lg:row-span-1', '', ''];

export function Explore() {
  return (
    <SectionWrapper id="explore" containerSize="wide">
      <SectionTitle
        label="استكشف Jalaa Gym"
        title="كل ما تحتاجه في مكان واحد"
        description="اكتشف مساحات تدريبنا الحديثة وأجهزتنا المتطورة ومرافقنا المصممة لمساعدتك على تحقيق أهدافك."
      />

      <motion.ul
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportReveal}
        className="mt-12 grid grid-cols-2 gap-3 auto-rows-[200px] sm:gap-4 sm:auto-rows-[280px] md:gap-6 md:auto-rows-[320px] lg:grid-cols-3 lg:auto-rows-[280px]"
      >
        {EXPLORE_ITEMS.map((item, index) => (
          <ExploreCard key={item.id} item={item} className={CARD_SPANS[index]} />
        ))}
      </motion.ul>
    </SectionWrapper>
  );
}
