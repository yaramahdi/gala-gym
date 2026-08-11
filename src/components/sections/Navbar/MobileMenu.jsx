import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '../../../constants/navigation.js';
import { useFocusTrap } from '../../../hooks/useFocusTrap.js';
import { fadeUp, staggerContainer } from '../../../animations/variants.js';
import { motionDuration } from '../../../config/tokens.js';
import { Logo } from '../../ui/Logo.jsx';
import { HamburgerButton } from '../../ui/HamburgerButton.jsx';

/**
 * Full-screen mobile navigation panel. Rendered permanently (visibility is
 * animation-driven via AnimatePresence) so exit transitions can play.
 */
export function MobileMenu({ isOpen, onClose, activeId, onLinkClick }) {
  const panelRef = useRef(null);
  useFocusTrap(panelRef, isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="تنقل الموقع"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: motionDuration.base }}
          className="fixed inset-0 z-navbar flex flex-col bg-background lg:hidden"
        >
          <div className="flex h-24 items-center justify-between px-4 sm:px-6">
            <Logo onClick={onLinkClick('#home')} />
            <HamburgerButton open onClick={onClose} />
          </div>

          <motion.nav
            aria-label="قائمة الجوال"
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col items-center justify-center gap-8 px-6"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.replace('#', '');
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onLinkClick(link.href)}
                  variants={fadeUp}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    'font-heading text-4xl transition-colors duration-300 sm:text-5xl ' +
                    (isActive ? 'text-primary' : 'text-white hover:text-primary')
                  }
                >
                  {link.label}
                </motion.a>
              );
            })}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
