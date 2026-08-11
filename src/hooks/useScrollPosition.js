import { useEffect, useState } from 'react';

/**
 * Tracks the current vertical scroll position (throttled via rAF).
 * Used by the navbar to switch to a "scrolled" style, scroll-progress bars, etc.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(() => (typeof window !== 'undefined' ? window.scrollY : 0));

  useEffect(() => {
    let frame = null;

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frame = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return scrollY;
}
