import {
  colors,
  fontFamily,
  spacing,
  borderRadius,
  boxShadow,
  transitionDuration,
  containers,
  breakpoints,
  zIndex,
} from './src/config/tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: `${breakpoints.sm}px`,
      md: `${breakpoints.md}px`,
      lg: `${breakpoints.lg}px`,
      xl: `${breakpoints.xl}px`,
      '2xl': `${breakpoints['2xl']}px`,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.primary,
          hover: colors.primaryHover,
        },
        background: colors.background,
        surface: {
          DEFAULT: colors.surface,
          secondary: colors.surfaceSecondary,
        },
        border: colors.border,
        gray: {
          DEFAULT: colors.gray,
        },
      },
      fontFamily: {
        heading: fontFamily.heading,
        body: fontFamily.body,
        hero: fontFamily.hero,
      },
      spacing: {
        'section-y-sm': spacing.sectionYSm,
        'section-y': spacing.sectionY,
        'section-y-lg': spacing.sectionYLg,
      },
      borderRadius: {
        btn: borderRadius.btn,
        card: borderRadius.card,
        image: borderRadius.image,
        input: borderRadius.input,
      },
      boxShadow: {
        card: boxShadow.card,
        glow: boxShadow.glow,
        'glow-lg': boxShadow.glowLg,
      },
      transitionDuration: {
        400: `${transitionDuration.fast + 100}ms`,
        600: `${transitionDuration.base}ms`,
        800: `${transitionDuration.slow}ms`,
      },
      maxWidth: {
        content: containers.content,
        narrow: containers.narrow,
        wide: containers.wide,
      },
      zIndex: {
        dropdown: `${zIndex.dropdown}`,
        navbar: `${zIndex.navbar}`,
        overlay: `${zIndex.overlay}`,
        modal: `${zIndex.modal}`,
        toast: `${zIndex.toast}`,
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
};
