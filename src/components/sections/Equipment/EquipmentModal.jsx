import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useFocusTrap } from '../../../hooks/useFocusTrap.js';
import { setBodyScrollLocked } from '../../../utils/scroll.js';
import { motionDuration, motionEase } from '../../../config/tokens.js';
import { Icon } from '../../ui/Icon.jsx';
import { EquipmentItemDetail } from './EquipmentItemDetail.jsx';

/**
 * Full-detail popup for a single machine (image, how-to, mistakes, tips).
 * `item` is the machine to show, or null when closed. Rendered permanently
 * so AnimatePresence can play the exit transition.
 */
export function EquipmentModal({ item, onClose }) {
  const panelRef = useRef(null);
  const isOpen = Boolean(item);
  useFocusTrap(panelRef, isOpen);

  useEffect(() => {
    setBodyScrollLocked(isOpen);
    return () => setBodyScrollLocked(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: motionDuration.fast }}
          onClick={onClose}
          className="fixed inset-0 z-modal flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="equipment-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: motionDuration.base, ease: motionEase.standard }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-card border border-border bg-surface shadow-card"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="إغلاق"
              className="absolute end-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-white backdrop-blur-sm transition-colors duration-300 hover:text-primary"
            >
              <Icon name="X" className="h-5 w-5" />
            </button>

            <EquipmentItemDetail item={item} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
