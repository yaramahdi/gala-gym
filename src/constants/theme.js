/**
 * Re-exports the canonical design tokens under `constants/` for ergonomic
 * imports alongside nav/site/social constants. The source of truth remains
 * `src/config/tokens.js` — do not redefine values here.
 */
export {
  colors,
  fontFamily,
  spacing,
  borderRadius,
  boxShadow,
  motionDuration,
  motionEase,
  transitionDuration,
  containers,
  breakpoints,
  zIndex,
} from '../config/tokens.js';
