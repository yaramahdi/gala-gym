import strengthImage from '../assets/images/power machine.webp';
import cardioImage from '../assets/images/cardio hall.webp';
import lockerRoomsImage from '../assets/images/Changing rooms.webp';
import proteinBarImage from '../assets/images/proten par.webp';

// "Explore Jalaa Gym" section — a quick visual tour of the gym's spaces.
// `slug`/`id`/`icon` stay in English — they're internal identifiers, not
// visible copy.
export const EXPLORE_ITEMS = [
  {
    id: 'explore-strength',
    slug: 'equipment',
    icon: 'Dumbbell',
    title: 'أجهزة القوة',
    description: 'تدرب باستخدام أجهزة قوة متميزة مصممة للمبتدئين والرياضيين المحترفين.',
    image: strengthImage,
  },
  {
    id: 'explore-cardio',
    slug: 'cardio',
    icon: 'HeartPulse',
    title: 'منطقة الكارديو',
    description: 'حسّن لياقتك القلبية واحرق السعرات الحرارية في منطقة الكارديو المخصصة لدينا.',
    image: cardioImage,
  },
  {
    id: 'explore-locker-rooms',
    slug: 'locker-rooms',
    icon: 'DoorOpen',
    title: 'غرف تبديل الملابس',
    description: 'غرف تبديل ملابس حديثة ونظيفة ومريحة، مصممة لراحتك قبل وبعد كل تمرين.',
    image: lockerRoomsImage,
  },
  {
    id: 'explore-protein-bar',
    slug: 'protein-bar',
    icon: 'GlassWater',
    title: 'بار البروتين',
    description: 'استعد نشاطك بعد التمرين مع مشروبات طازجة وعصائر بروتين ووجبات خفيفة صحية.',
    image: proteinBarImage,
  },
];
