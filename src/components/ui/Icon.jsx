import {
  Dumbbell,
  Users,
  Clock,
  Inbox,
  HeartPulse,
  DoorOpen,
  GlassWater,
  ArrowUpLeft,
  X,
  Target,
  ListChecks,
  AlertTriangle,
  Lightbulb,
  Building2,
  CalendarDays,
  ChevronRight,
  Tag,
  MapPin,
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon, YoutubeIcon } from './BrandIcons.jsx';

/**
 * Explicit icon registry, keyed by the string names used in constants/data
 * files. Named imports (rather than `import * as icons`) keep tree-shaking
 * intact — lucide-react ships 1000+ icons and a wildcard import bundles
 * all of them. Add new icons here as they're used.
 */
const REGISTRY = {
  Dumbbell,
  Users,
  Clock,
  Inbox,
  HeartPulse,
  DoorOpen,
  GlassWater,
  ArrowUpLeft,
  X,
  Target,
  ListChecks,
  AlertTriangle,
  Lightbulb,
  Building2,
  CalendarDays,
  ChevronRight,
  Tag,
  MapPin,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
  Youtube: YoutubeIcon,
};

/**
 * Resolves an icon by name so data files (constants/data) can reference
 * icons as plain strings instead of importing components directly.
 * @example <Icon name="Instagram" className="h-5 w-5" />
 */
export function Icon({ name, className, ...props }) {
  const IconComponent = REGISTRY[name];

  if (!IconComponent) {
    if (import.meta.env.DEV) {
      console.warn(`Icon "${name}" is not registered in components/ui/Icon.jsx.`);
    }
    return null;
  }

  return <IconComponent className={className} {...props} />;
}
