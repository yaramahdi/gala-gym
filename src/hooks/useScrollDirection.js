import { useEffect, useRef, useState } from 'react';

/**
 * Reports whether the page is currently being scrolled 'up' or 'down',
 * ignoring jitter smaller than `threshold` px. Used by the navbar to hide
 * while scrolling down and reappear while scrolling up.
 */
export function useScrollDirection({ threshold = 8 } = {}) {
  const [direction, setDirection] = useState('up');
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    let frame = null;

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const diff = y - lastY.current;

        if (Math.abs(diff) > threshold) {
          setDirection(diff > 0 ? 'down' : 'up');
          lastY.current = y;
        }
        frame = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return direction;
}
