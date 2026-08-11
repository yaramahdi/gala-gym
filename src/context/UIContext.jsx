import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { setBodyScrollLocked } from '../utils/scroll.js';

const UIContext = createContext(null);

/**
 * Shared UI state that spans multiple future components (Navbar, mobile
 * drawer, modals) so it isn't reinvented per-component. Locks body scroll
 * automatically whenever the mobile menu is open.
 */
export function UIProvider({ children }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setBodyScrollLocked(isMobileMenuOpen);
    return () => setBodyScrollLocked(false);
  }, [isMobileMenuOpen]);

  const value = useMemo(
    () => ({
      isMobileMenuOpen,
      openMobileMenu: () => setMobileMenuOpen(true),
      closeMobileMenu: () => setMobileMenuOpen(false),
      toggleMobileMenu: () => setMobileMenuOpen((open) => !open),
    }),
    [isMobileMenuOpen],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) throw new Error('useUI must be used within a UIProvider');
  return context;
}
