import { motion } from 'framer-motion';
import { useUI } from '../../../context/UIContext.jsx';
import { useScrollPosition } from '../../../hooks/useScrollPosition.js';
import { useScrollDirection } from '../../../hooks/useScrollDirection.js';
import { useActiveSection } from '../../../hooks/useActiveSection.js';
import { NAV_LINKS, NAV_IDS } from '../../../constants/navigation.js';
import { scrollToId, isPastThreshold } from '../../../utils/scroll.js';
import { motionDuration, motionEase } from '../../../config/tokens.js';
import { cn } from '../../../utils/cn.js';
import { Container } from '../../ui/Container.jsx';
import { Logo } from '../../ui/Logo.jsx';
import { HamburgerButton } from '../../ui/HamburgerButton.jsx';
import { NavLink } from './NavLink.jsx';
import { MobileMenu } from './MobileMenu.jsx';

// Matches the bar's unscrolled height (h-24 / 96px) — keeps anchor scroll
// targets from landing underneath the fixed header.
const NAVBAR_OFFSET = 96;
const SCROLL_HIDE_THRESHOLD = 120;

export function Navbar() {
  const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useUI();
  const scrollY = useScrollPosition();
  const direction = useScrollDirection({ threshold: 8 });
  const activeId = useActiveSection(NAV_IDS);

  const isScrolled = isPastThreshold(scrollY, 24);
  const isHidden = direction === 'down' && scrollY > SCROLL_HIDE_THRESHOLD && !isMobileMenuOpen;

  const handleNavClick = (href) => (event) => {
    event.preventDefault();
    closeMobileMenu();
    scrollToId(href.replace('#', ''), NAVBAR_OFFSET);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only-focusable fixed start-4 top-4 z-modal rounded-btn bg-primary px-4 py-2 text-sm font-semibold text-background"
      >
        تخطي إلى المحتوى
      </a>

      <motion.header
        animate={{ y: isHidden ? '-100%' : '0%' }}
        transition={{ duration: motionDuration.base, ease: motionEase.standard }}
        className={cn(
          'fixed inset-x-0 top-0 z-navbar transition-[background-color,border-color,box-shadow,backdrop-filter] duration-600 ease-out',
          isScrolled
            ? 'border-b border-border bg-background/70 shadow-card backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <Container>
          <div
            className={cn(
              'grid grid-cols-[auto_1fr_auto] items-center gap-4 transition-[padding] duration-600 ease-out lg:grid-cols-[1fr_auto_1fr]',
              isScrolled ? 'py-4' : 'py-6',
            )}
          >
            <Logo className="justify-self-start" onClick={handleNavClick('#home')} />

            <nav aria-label="التنقل الرئيسي" className="hidden justify-self-center lg:block">
              <ul className="flex items-center gap-10">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      href={link.href}
                      label={link.label}
                      isActive={activeId === link.href.replace('#', '')}
                      onClick={handleNavClick(link.href)}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center justify-self-end gap-2">
              <HamburgerButton open={isMobileMenuOpen} onClick={toggleMobileMenu} className="lg:hidden" />
            </div>
          </div>
        </Container>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        activeId={activeId}
        onLinkClick={handleNavClick}
      />
    </>
  );
}
