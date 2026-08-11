/**
 * Builds a `sizes` attribute string for responsive images from a list of
 * `[mediaCondition, size]` pairs, falling back to the last size.
 * @example buildSizes([['(min-width: 1024px)', '33vw'], ['(min-width: 640px)', '50vw']], '100vw')
 */
export function buildSizes(rules, fallback = '100vw') {
  return [...rules.map(([condition, size]) => `${condition} ${size}`), fallback].join(', ');
}

/**
 * Returns initials (up to 2 characters) from a full name, for avatar fallbacks.
 * @example getInitials('Jane Doe') // 'JD'
 */
export function getInitials(name = '') {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

/**
 * Resolves an image source, falling back to a placeholder when empty/undefined.
 * Keeps components from having to null-check every data-driven image field.
 */
export function resolveImageSrc(src, placeholder = '/placeholder.svg') {
  return src && src.trim().length > 0 ? src : placeholder;
}
