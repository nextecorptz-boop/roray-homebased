import type { Variants } from 'framer-motion';

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const CARD_HOVER: Variants = {
  rest: { y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  hover: { y: -4, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
};

export const ACCORDION_CONTENT: Variants = {
  hidden: { height: 0, opacity: 0, overflow: 'hidden' as const },
  visible: {
    height: 'auto',
    opacity: 1,
    overflow: 'hidden' as const,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};
