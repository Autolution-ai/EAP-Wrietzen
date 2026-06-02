'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

// Kapselt die Pflicht-Scroll-Fade-Ins. Kinder mit <FadeItem> werden gestaffelt.
export function Section({ id, className = '', children }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function FadeItem({ className = '', children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}
