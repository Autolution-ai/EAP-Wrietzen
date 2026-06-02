import type { Variants } from 'framer-motion';

// Zentrale Scroll-Fade-In Variante (Pflicht auf allen Sektionen).
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Container fuer gestaffelte Kinder.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};
