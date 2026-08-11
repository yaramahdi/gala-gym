/**
 * Smooth-scrolls to an element by id, accounting for a fixed navbar height.
 */
export function scrollToId(id, offset = 96) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Locks/unlocks body scroll — used for mobile nav drawers and modals.
 */
export function setBodyScrollLocked(locked) {
  document.body.style.overflow = locked ? 'hidden' : '';
}

/**
 * Returns whether the page has been scrolled past `threshold` px.
 * Intended for use inside a scroll event handler (see useScrollPosition).
 */
export function isPastThreshold(scrollY, threshold = 24) {
  return scrollY > threshold;
}
