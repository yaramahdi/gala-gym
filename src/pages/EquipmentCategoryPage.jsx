import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container.jsx';
import { Logo } from '../components/ui/Logo.jsx';
import { Icon } from '../components/ui/Icon.jsx';
import { Grid } from '../components/layout/Grid.jsx';
import { EquipmentModal } from '../components/sections/Equipment/EquipmentModal.jsx';
import { EquipmentItemCard } from '../components/sections/Equipment/EquipmentItemCard.jsx';
import { EQUIPMENT, EQUIPMENT_GROUPS, formatMachineCount } from '../data/equipment.js';
import { staggerContainer, fadeUp, viewportReveal } from '../animations/variants.js';

/** Dedicated per-category page: /equipment/:slug — every machine in that group, each opening its full detail on tap. */
export function EquipmentCategoryPage() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);

  const group = EQUIPMENT_GROUPS.find((candidate) => candidate.slug === slug);
  if (!group) return <Navigate to="/" replace />;

  const items = EQUIPMENT.filter((equipment) => group.categories.includes(equipment.category));

  return (
    <>
      <header className="border-b border-border">
        <Container size="wide" className="flex h-20 items-center justify-between">
          <Logo />
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-primary"
          >
            <Icon name="ChevronRight" className="h-4 w-4" />
            العودة للرئيسية
          </Link>
        </Container>
      </header>

      <main className="py-section-y">
        <Container size="wide">
          <motion.div variants={staggerContainer()} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-sm font-bold text-primary">
              {formatMachineCount(items.length)}
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-2 text-4xl sm:text-5xl">
              {group.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-base text-white/70 sm:text-lg">
              {group.description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            className="mt-10"
          >
            <Grid base={2} cols={{ md: 3, lg: 4 }} gap="sm" className="gap-3 sm:gap-4 lg:gap-6">
              {items.map((equipment) => (
                <EquipmentItemCard key={equipment.id} equipment={equipment} onSelect={() => setItem(equipment)} />
              ))}
            </Grid>
          </motion.div>
        </Container>
      </main>

      <EquipmentModal item={item} onClose={() => setItem(null)} />
    </>
  );
}
