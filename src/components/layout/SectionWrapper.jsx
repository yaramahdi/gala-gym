import { cn } from '../../utils/cn.js';
import { Section } from './Section.jsx';
import { Container } from '../ui/Container.jsx';

const BACKGROUNDS = {
  base: 'bg-background',
  surface: 'bg-surface',
  transparent: '',
};

/**
 * Composed wrapper for a full page section: anchor id, vertical rhythm,
 * background, and a centered max-width container. This is what
 * Navbar/Hero/etc. sections should render into.
 */
export function SectionWrapper({
  id,
  spacing = 'md',
  background = 'base',
  containerSize = 'content',
  className,
  containerClassName,
  children,
}) {
  return (
    <Section id={id} spacing={spacing} className={cn(BACKGROUNDS[background], className)}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </Section>
  );
}
