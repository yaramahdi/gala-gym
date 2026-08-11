import { useEffect, useState } from 'react';

/**
 * Tracks viewport dimensions (debounced via rAF). Useful for canvas/SVG work
 * or logic that can't be expressed as a CSS media query.
 */
export function useWindowSize() {
  const [size, setSize] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  }));

  useEffect(() => {
    let frame = null;

    const handleResize = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
        frame = null;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return size;
}
