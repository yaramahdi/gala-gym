import { useEffect, useState } from 'react';

/**
 * Tracks which of the given element ids is currently most visible in the
 * viewport, for driving a nav's "active section" indicator. `rootMargin`
 * biases the intersection band toward the vertical center of the screen so
 * a section is marked active as it crosses the midpoint, not merely on
 * first appearance.
 */
export function useActiveSection(ids, { rootMargin = '-45% 0px -50% 0px' } = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin, threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
