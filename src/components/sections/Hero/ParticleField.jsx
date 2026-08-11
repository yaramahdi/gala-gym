import { motion } from 'framer-motion';

/**
 * Fixed, hand-placed positions (never randomized per render — that would
 * cause the field to reshuffle on every re-render and thrash layout).
 * Kept sparse and confined to the darker left/lower field so it reads as
 * atmosphere, not decoration competing with the hero content or the logo.
 */
const PARTICLES = [
  { top: '20%', left: '10%', size: 3, duration: 9, delay: 0 },
  { top: '34%', left: '20%', size: 2, duration: 11, delay: 1.2 },
  { top: '54%', left: '7%', size: 2, duration: 10, delay: 0.6 },
  { top: '70%', left: '24%', size: 3, duration: 13, delay: 2 },
  { top: '26%', left: '34%', size: 2, duration: 12, delay: 0.4 },
  { top: '80%', left: '16%', size: 2, duration: 10, delay: 1.6 },
  { top: '46%', left: '40%', size: 2, duration: 14, delay: 0.9 },
  { top: '62%', left: '32%', size: 3, duration: 11, delay: 2.4 },
];

/**
 * Extremely subtle floating particles for the hero background. Desktop-only
 * (see Hero.jsx) — on the shorter mobile banner they'd add noise rather
 * than atmosphere. Skipped entirely by the caller when reduced motion is
 * preferred.
 */
export function ParticleField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block">
      {PARTICLES.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-primary/40"
          style={{ top: particle.top, left: particle.left, width: particle.size, height: particle.size }}
          animate={{ y: [0, -18, 0], opacity: [0.12, 0.3, 0.12] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
