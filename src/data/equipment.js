import bicepsCurlImage from '../assets/images/equipment/biciepsCurl.webp';
import flatBenchPressImage from '../assets/images/equipment/FlatBarbellBenchPress.webp';
import inclineBenchPressImage from '../assets/images/equipment/InclineBarbellBenchPress.webp';
import inclineChestPressImage from '../assets/images/equipment/inclineChestPress.webp';
import isoLateralInclineChestPressImage from '../assets/images/equipment/Iso-Lateral Incline Chest press.webp';
import isoLateralLatPulldownImage from '../assets/images/equipment/Iso-Lateral Lat Pulldown.webp';
import legExtensionImage from '../assets/images/equipment/legExtintion.webp';
import cableJungleImage from '../assets/images/equipment/Multi-Station Cable Jungle.webp';
import horizontalBenchPressImage from '../assets/images/equipment/Plate Loaded Iso-LateralHorizontalBenchpress.webp';
import tBarRowImage from '../assets/images/equipment/Plate-Loaded Chest-Supported T-Bar Row.webp';
import hipAbductorImage from '../assets/images/equipment/Plate-Loaded HipAbductor.webp';
import seatedRowImage from '../assets/images/equipment/Plate-Loaded Seated Row.webp';
import preacherCurlImage from '../assets/images/equipment/Preacher Curl Bench with EZ Bar.webp';
import proneLegCurlImage from '../assets/images/equipment/prone Leg Curl.webp';
import rearDeltPecFlyImage from '../assets/images/equipment/Rear DeltPec Fly Machine.webp';
import romanChairImage from '../assets/images/equipment/Roman Chair.webp';
import shoulderPressImage from '../assets/images/equipment/Shoulder Press Machine.webp';
import wideChestPressImage from '../assets/images/equipment/wideChestPress.webp';
import legPressImage from '../assets/images/equipment/Leg Press Machine.webp';
import smithMachineImage from '../assets/images/equipment/Smith Machine.webp';
import legPressMuscleIcon from '../assets/images/Muscle Target Icons/Leg Press Machine.webp';
import bicepsCurlMuscleIcon from '../assets/images/Muscle Target Icons/biciepsCurl icon.webp';
import flatBenchPressMuscleIcon from '../assets/images/Muscle Target Icons/FlatBarbellBenchPress.webp';
import inclineBenchPressMuscleIcon from '../assets/images/Muscle Target Icons/InclineBarbellBenchPress.webp';
import inclineChestPressMuscleIcon from '../assets/images/Muscle Target Icons/inclineChestPress.webp';
import isoLateralInclineChestPressMuscleIcon from '../assets/images/Muscle Target Icons/Iso-Lateral Incline Chest press.webp';
import isoLateralLatPulldownMuscleIcon from '../assets/images/Muscle Target Icons/Iso-Lateral Lat Pulldown.webp';
import legExtensionMuscleIcon from '../assets/images/Muscle Target Icons/legExtintion.webp';
import horizontalBenchPressMuscleIcon from '../assets/images/Muscle Target Icons/Plate Loaded Iso-LateralHorizontalBenchpress.webp';
import tBarRowMuscleIcon from '../assets/images/Muscle Target Icons/Plate-Loaded Chest-Supported T-Bar Row.webp';
import hipAbductorMuscleIcon from '../assets/images/Muscle Target Icons/Plate-Loaded HipAbductor.webp';
import seatedRowMuscleIcon from '../assets/images/Muscle Target Icons/Plate-Loaded Seated Row.webp';
import preacherCurlMuscleIcon from '../assets/images/Muscle Target Icons/Preacher Curl Bench with EZ Bar.webp';
import proneLegCurlMuscleIcon from '../assets/images/Muscle Target Icons/prone Leg Curl.webp';
import rearDeltPecFlyMuscleIcon from '../assets/images/Muscle Target Icons/Rear DeltPec Fly Machine.webp';
import romanChairMuscleIcon from '../assets/images/Muscle Target Icons/Roman Chair.webp';
import shoulderPressMuscleIcon from '../assets/images/Muscle Target Icons/Shoulder Press Machine.webp';
import wideChestPressMuscleIcon from '../assets/images/Muscle Target Icons/wideChestPress.webp';
import smithMachineMuscleIcon from '../assets/images/Muscle Target Icons/Smith Machine.webp';

export const EQUIPMENT_GROUPS = [
  {
    id: 'group-upper-body',
    slug: 'upper-body',
    icon: 'Dumbbell',
    title: 'أجهزة الجزء العلوي',
    description: 'تشمل أجهزة الصدر والظهر والكتف والذراعين.',
    image: wideChestPressImage,
    categories: ['chest', 'back', 'shoulders', 'arms'],
  },
  {
    id: 'group-lower-body',
    slug: 'lower-body',
    icon: 'Dumbbell',
    title: 'أجهزة الجزء السفلي',
    description: 'أجهزة للفخذين والمؤخرة وأسفل الظهر.',
    image: legPressImage,
    categories: ['legs'],
  },
];

export function formatMachineCount(count) {
  return count === 1 ? 'جهاز واحد' : count === 2 ? 'جهازان' : `${count} أجهزة`;
}

export const EQUIPMENT_DIFFICULTY_LEVELS = [
  { key: 'beginner', label: 'مبتدئ' },
  { key: 'intermediate', label: 'متوسط' },
];

const MUSCLE_ICONS_BY_ID = {
  'flat-barbell-bench-press': flatBenchPressMuscleIcon,
  'incline-barbell-bench-press': inclineBenchPressMuscleIcon,
  'incline-chest-press': inclineChestPressMuscleIcon,
  'iso-lateral-incline-chest-press': isoLateralInclineChestPressMuscleIcon,
  'horizontal-bench-press': horizontalBenchPressMuscleIcon,
  'wide-chest-press': wideChestPressMuscleIcon,
  'iso-lateral-lat-pulldown': isoLateralLatPulldownMuscleIcon,
  'seated-row': seatedRowMuscleIcon,
  'chest-supported-t-bar-row': tBarRowMuscleIcon,
  'leg-extension': legExtensionMuscleIcon,
  'prone-leg-curl': proneLegCurlMuscleIcon,
  'hip-abductor': hipAbductorMuscleIcon,
  'roman-chair': romanChairMuscleIcon,
  'shoulder-press': shoulderPressMuscleIcon,
  'rear-delt-pec-fly': rearDeltPecFlyMuscleIcon,
  'biceps-curl': bicepsCurlMuscleIcon,
  'preacher-curl': preacherCurlMuscleIcon,
};

const machine = ({ id, name, category, image, muscleIcon, targetMuscles, shortDescription, difficulty = 'beginner' }) => ({
  id, name, category, image, muscleIcon: muscleIcon ?? MUSCLE_ICONS_BY_ID[id], targetMuscles, shortDescription, difficulty,
  fullDescription: `${name} يستهدف ${targetMuscles.join('، ')}، ويُستخدم بمسار حركة ثابت يساعد على التدريب بتحكم وأمان.`,
  howToUse: ['اضبط المقعد أو وضعية البداية لتناسب طولك.', 'اختر وزناً مناسباً قبل بدء الحركة.', 'نفّذ الحركة ببطء وتحكم.', 'أعد الوزن تدريجياً إلى وضع البداية.'],
  commonMistakes: ['اختيار وزن أكبر من القدرة على التحكم.', 'استخدام الزخم بدلاً من العضلة المستهدفة.'],
  tips: ['ابدأ بوزن خفيف لتتعلم مسار الحركة.', 'حافظ على تنفّس منتظم ووضعية ظهر مستقرة.'],
});

export const EQUIPMENT = [
  machine({
    id: 'smith-machine',
    name: 'Smith Machine',
    category: 'legs',
    image: smithMachineImage,
    muscleIcon: smithMachineMuscleIcon,
    targetMuscles: ['الفخذ الأمامي', 'المؤخرة', 'الفخذ الخلفي'],
    shortDescription: 'جهاز متعدد الاستخدامات لتمارين السكوات واللانج مع تركيز على الجزء السفلي.',
    difficulty: 'intermediate',
  }),
  machine({ id: 'flat-barbell-bench-press', name: 'Flat Barbell Bench Press', category: 'chest', image: flatBenchPressImage, targetMuscles: ['الصدر الأوسط', 'الترايسبس', 'الكتف الأمامي'], shortDescription: 'بنش مستوٍ بالبار لتطوير قوة وحجم الصدر.', difficulty: 'intermediate' }),
  machine({ id: 'incline-barbell-bench-press', name: 'Incline Barbell Bench Press', category: 'chest', image: inclineBenchPressImage, targetMuscles: ['الصدر العلوي', 'الترايسبس', 'الكتف الأمامي'], shortDescription: 'بنش مائل بالبار مع تركيز أكبر على الصدر العلوي.', difficulty: 'intermediate' }),
  machine({ id: 'incline-chest-press', name: 'Incline Chest Press Machine', category: 'chest', image: inclineChestPressImage, targetMuscles: ['الصدر العلوي', 'الترايسبس', 'الكتف الأمامي'], shortDescription: 'جهاز ضغط مائل لمسار دفع ثابت وآمن.' }),
  machine({ id: 'iso-lateral-incline-chest-press', name: 'Iso-Lateral Incline Chest Press', category: 'chest', image: isoLateralInclineChestPressImage, targetMuscles: ['الصدر العلوي', 'الترايسبس', 'الكتف الأمامي'], shortDescription: 'ضغط مائل مستقل لكل ذراع لتوازن أفضل بين الجانبين.', difficulty: 'intermediate' }),
  machine({ id: 'horizontal-bench-press', name: 'Plate-Loaded Iso-Lateral Horizontal Bench Press', category: 'chest', image: horizontalBenchPressImage, targetMuscles: ['الصدر الأوسط', 'الترايسبس', 'الكتف الأمامي'], shortDescription: 'ضغط أفقي محمّل بالأقراص مع ذراعين مستقلين.', difficulty: 'intermediate' }),
  machine({ id: 'wide-chest-press', name: 'Wide Chest Press Machine', category: 'chest', image: wideChestPressImage, targetMuscles: ['الصدر', 'الترايسبس', 'الكتف الأمامي'], shortDescription: 'ضغط صدر بقبضة واسعة لاستهداف عضلات الصدر.' }),
  machine({ id: 'iso-lateral-lat-pulldown', name: 'Iso-Lateral Lat Pulldown', category: 'back', image: isoLateralLatPulldownImage, targetMuscles: ['الظهر العريض', 'البايسبس', 'الكتف الخلفي'], shortDescription: 'سحب علوي مستقل للذراعين لبناء عرض الظهر.', difficulty: 'intermediate' }),
  machine({ id: 'seated-row', name: 'Plate-Loaded Seated Row', category: 'back', image: seatedRowImage, targetMuscles: ['الظهر الأوسط', 'الظهر العريض', 'البايسبس'], shortDescription: 'جهاز تجديف محمّل بالأقراص لتقوية سماكة الظهر.', difficulty: 'intermediate' }),
  machine({ id: 'chest-supported-t-bar-row', name: 'Plate-Loaded Chest-Supported T-Bar Row', category: 'back', image: tBarRowImage, targetMuscles: ['الظهر الأوسط', 'الظهر العريض', 'الكتف الخلفي', 'البايسبس'], shortDescription: 'تجديف T-Bar مع دعم للصدر لتقليل تحميل أسفل الظهر.', difficulty: 'intermediate' }),
  machine({ id: 'cable-jungle', name: 'Multi-Station Cable Jungle', category: 'back', image: cableJungleImage, targetMuscles: ['الظهر', 'البايسبس', 'الترايسبس', 'الكتف'], shortDescription: 'محطة كيبل متعددة الاستخدامات لتمارين السحب والدفع والعزل.' }),
  machine({ id: 'leg-extension', name: 'Leg Extension Machine', category: 'legs', image: legExtensionImage, targetMuscles: ['الفخذ الأمامي'], shortDescription: 'تمرين عزل للفخذ الأمامي عبر مد الركبة.' }),
  machine({ id: 'leg-press', name: 'Leg Press Machine', category: 'legs', image: legPressImage, muscleIcon: legPressMuscleIcon, targetMuscles: ['الفخذ الأمامي', 'المؤخرة', 'الفخذ الخلفي'], shortDescription: 'جهاز ضغط الأرجل لتقوية الجزء السفلي من الجسم مع تحكم جيد في الحركة.' }),
  machine({ id: 'prone-leg-curl', name: 'Prone Leg Curl Machine', category: 'legs', image: proneLegCurlImage, targetMuscles: ['الفخذ الخلفي', 'عضلات الساق الخلفية'], shortDescription: 'تمرين ثني الساق من وضع الانبطاح للفخذ الخلفي.' }),
  machine({ id: 'hip-abductor', name: 'Plate-Loaded Hip Abductor', category: 'legs', image: hipAbductorImage, targetMuscles: ['عضلات الفخذ الخارجية', 'المؤخرة'], shortDescription: 'جهاز تباعد الفخذ لتقوية عضلات الورك والمؤخرة.' }),
  machine({ id: 'roman-chair', name: 'Roman Chair', category: 'legs', image: romanChairImage, targetMuscles: ['أسفل الظهر', 'المؤخرة', 'الفخذ الخلفي'], shortDescription: 'جهاز إطالة الظهر لتقوية السلسلة الخلفية للجسم.', difficulty: 'intermediate' }),
  machine({ id: 'shoulder-press', name: 'Shoulder Press Machine', category: 'shoulders', image: shoulderPressImage, targetMuscles: ['الكتف الأمامي', 'الكتف الجانبي', 'الترايسبس'], shortDescription: 'ضغط كتف بمسار ثابت للتحكم في الحركة.' }),
  machine({ id: 'rear-delt-pec-fly', name: 'Rear Delt / Pec Fly Machine', category: 'shoulders', image: rearDeltPecFlyImage, targetMuscles: ['الكتف الخلفي', 'الصدر', 'أعلى الظهر'], shortDescription: 'جهاز مزدوج لتمرين رفرفة الصدر والكتف الخلفي.' }),
  machine({ id: 'biceps-curl', name: 'Biceps Curl Machine', category: 'arms', image: bicepsCurlImage, targetMuscles: ['البايسبس', 'العضدية'], shortDescription: 'جهاز عزل لعضلات البايسبس بمسار ثابت.' }),
  machine({ id: 'preacher-curl', name: 'Preacher Curl Bench with EZ Bar', category: 'arms', image: preacherCurlImage, targetMuscles: ['البايسبس', 'العضدية'], shortDescription: 'بنش واعظ مع بار EZ لعزل عضلة البايسبس.', difficulty: 'intermediate' }),
];
