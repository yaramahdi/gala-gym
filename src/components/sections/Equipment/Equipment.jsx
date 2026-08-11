import { motion } from 'framer-motion';
import { SectionWrapper } from '../../layout/SectionWrapper.jsx';
import { Grid } from '../../layout/Grid.jsx';
import { SectionTitle } from '../../ui/SectionTitle.jsx';
import { EquipmentGroupCard } from './EquipmentGroupCard.jsx';
import { EQUIPMENT, EQUIPMENT_GROUPS } from '../../../data/equipment.js';
import { staggerContainer, viewportReveal } from '../../../animations/variants.js';

/**
 * Homepage teaser: exactly the 3 top-level groups, each linking out to its
 * own /equipment/:slug page (see pages/EquipmentCategoryPage.jsx) rather
 * than listing every machine here — this section only introduces the
 * equipment, it isn't the full library.
 */
export function Equipment() {
  return (
    <SectionWrapper id="equipment" containerSize="wide">
      <SectionTitle
        label="مكتبة الأجهزة"
        title="تعرّف على كل جهاز قبل أن تتدرب"
        description="استكشف أجهزتنا الاحترافية وتعرّف على استخدام كل جهاز."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportReveal}
        className="mt-10"
      >
        <Grid base={2} cols={{}} gap="sm" className="gap-3 sm:gap-4 lg:gap-6">
          {EQUIPMENT_GROUPS.map((equipmentGroup) => {
            const machineCount = EQUIPMENT.filter((equipment) =>
              equipmentGroup.categories.includes(equipment.category),
            ).length;

            return <EquipmentGroupCard key={equipmentGroup.id} group={equipmentGroup} machineCount={machineCount} />;
          })}
        </Grid>
      </motion.div>
    </SectionWrapper>
  );
}
