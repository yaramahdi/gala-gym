import womenSectionImage from '../assets/images/women section.webp';
import menSectionImage from '../assets/images/men section.webp';

// "Sections" (الأقسام) homepage section — one entry per gym department.
// `image` falls back to an icon placeholder (DepartmentCard) when empty,
// same convention as EQUIPMENT_GROUPS.
export const DEPARTMENTS = [
  {
    id: 'women',
    icon: 'Users',
    title: 'قسم النساء',
    image: womenSectionImage,
    hours: [
      { days: 'سبت - اثنين', time: '8:00 صباحاً - 3:00 عصراً' },
      { days: 'أحد - أربعاء - خميس', time: '7:00 صباحاً - 2:30 عصراً' },
    ],
    cardio: [
      { days: 'سبت - اثنين', slots: '8 - 9 - 10 - 11 - 12 - 1' },
      { days: 'أحد - أربعاء - خميس', slots: '7 - 9 - 10 - 11 - 12 - 1' },
    ],
    pricing: [
      { label: 'اشتراك يومي', price: '150 ₪' },
      { label: 'يوم بعد يوم', price: '100 ₪' },
    ],
  },
  {
    id: 'men',
    icon: 'Dumbbell',
    title: 'قسم الرجال',
    image: menSectionImage,
    hours: [{ days: 'يومياً ما عدا الجمعة والثلاثاء', time: '4:00 عصراً - 11:00 ليلاً' }],
    cardio: [],
    pricing: [
      { label: 'اشتراك يومي', price: '120 ₪' },
      { label: 'يوم بعد يوم', price: '100 ₪' },
    ],
  },
];
