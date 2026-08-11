import { UIProvider } from '../../context/UIContext.jsx';

/**
 * Top-level page shell: hosts global providers and guards against
 * horizontal overflow from full-bleed sections/animations.
 */
export function PageWrapper({ children }) {
  return (
    <UIProvider>
      <div className="overflow-x-hidden bg-background">{children}</div>
    </UIProvider>
  );
}
