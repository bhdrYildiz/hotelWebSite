'use client';

import React from 'react';
import { motion, type Transition, type Variants } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeUp, stagger } from '@/app/lib/animations';

type MotionDivProps = React.ComponentProps<typeof motion.div>;

type Preset = 'fadeUp' | 'fadeInLeft' | 'fadeInRight' | 'stagger';

const presetMap: Record<Preset, Variants> = {
  fadeUp,
  fadeInLeft,
  fadeInRight,
  stagger,
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;

  
  preset?: Preset;
 
  variants?: Variants;

  
  inherit?: boolean;

 
  initial?: string;
  whileInView?: string;
  transition?: Transition;
  viewport?: MotionDivProps['viewport'];
};

export default function Reveal({
  children,
  className,
  preset = 'fadeUp',
  variants,
  inherit = false,
  initial = 'hidden',
  whileInView = 'visible',
  transition,
  viewport,
}: RevealProps) {
  const resolvedVariants = variants ?? presetMap[preset];

  if (inherit) {
    return (
      <motion.div className={className} variants={resolvedVariants} transition={transition}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={resolvedVariants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport ?? { once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

