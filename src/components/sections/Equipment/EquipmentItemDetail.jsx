import { EQUIPMENT_DIFFICULTY_LEVELS } from '../../../data/equipment.js';
import { Icon } from '../../ui/Icon.jsx';
import { Badge } from '../../ui/Badge.jsx';

function ListSection({ icon, title, items, ordered }) {
  if (!items || items.length === 0) return null;
  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2">
        <Icon name={icon} className="h-5 w-5 text-primary" />
        <h3 className="text-lg">{title}</h3>
      </div>
      <ListTag className={ordered ? 'mt-3 list-decimal space-y-2 ps-5 text-white/80' : 'mt-3 space-y-2 text-white/80'}>
        {items.map((text) => (
          <li
            key={text}
            className={
              ordered
                ? ''
                : 'flex items-start gap-2 before:mt-2.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-primary/60'
            }
          >
            <span>{text}</span>
          </li>
        ))}
      </ListTag>
    </div>
  );
}

/** Full detail body for one machine (image, description, how-to, mistakes, tips). */
export function EquipmentItemDetail({ item }) {
  const difficultyLabel = EQUIPMENT_DIFFICULTY_LEVELS.find((level) => level.key === item.difficulty)?.label;
  const { muscleIcon } = item;

  return (
    <div>
      <div className="relative flex h-[min(46vh,28rem)] w-full items-center justify-center overflow-hidden bg-black p-2 sm:p-3">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full rounded-xl object-contain"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-secondary to-background"
          >
            <Icon name="Dumbbell" className="h-16 w-16 text-white/10" />
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="equipment-modal-title" className="text-3xl sm:text-4xl">
            {item.name}
          </h2>
          {difficultyLabel && <Badge variant="neutral">{difficultyLabel}</Badge>}
        </div>

        <div className="mt-4 flex items-start gap-2 text-sm text-white/60">
          <Icon name="Target" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          {muscleIcon && (
            <img
              src={muscleIcon}
              alt=""
              aria-hidden="true"
              className="h-10 w-10 shrink-0 rounded-md object-contain sm:h-12 sm:w-12"
            />
          )}
          <span>{item.targetMuscles.join('، ')}</span>
        </div>

        <p className="mt-6 leading-relaxed text-white/80">{item.fullDescription}</p>

        <ListSection icon="ListChecks" title="طريقة الاستخدام" items={item.howToUse} ordered />
        <ListSection icon="AlertTriangle" title="أخطاء شائعة" items={item.commonMistakes} />
        <ListSection icon="Lightbulb" title="نصائح للتدريب" items={item.tips} />
      </div>
    </div>
  );
}
