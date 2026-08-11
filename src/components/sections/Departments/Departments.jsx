import { motion } from 'framer-motion';
import { SectionWrapper } from '../../layout/SectionWrapper.jsx';
import { Grid } from '../../layout/Grid.jsx';
import { SectionTitle } from '../../ui/SectionTitle.jsx';
import { DepartmentCard } from './DepartmentCard.jsx';
import { DEPARTMENTS } from '../../../data/departments.js';
import { staggerContainer, viewportReveal } from '../../../animations/variants.js';

/**
 * "الأقسام" — the two gym departments (women/men) side by side, each with
 * its own hours, cardio slots, and pricing. Always 2 columns, even on
 * mobile — the cards are compact schedule readouts, not full-bleed imagery,
 * so they read fine side by side at any width.
 */
export function Departments() {
  return (
    <SectionWrapper id="departments" containerSize="wide">
      <SectionTitle label="الأقسام" title="قسم مخصص لكل احتياج" description="مواعيد الدوام وحصص الكارديو والاشتراكات لكل قسم." />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportReveal}
        className="mt-10"
      >
        <Grid base={2} cols={{}} gap="sm" className="gap-3 sm:gap-4 lg:gap-6">
          {DEPARTMENTS.map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </Grid>
      </motion.div>
    </SectionWrapper>
  );
}
