import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, pageKey }) => {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, render clean simple opacity crossfade
  if (shouldReduceMotion) {
    return (
      <motion.div
        key={pageKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full relative"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
      transition={{
        duration: 0.48,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full relative"
    >
      {/* Signature Luxury Wipe Layer */}
      <motion.div
        key={`wipe-${pageKey}`}
        initial={{ scaleX: 1, transformOrigin: 'right' }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1, transformOrigin: 'left' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 bg-gradient-to-r from-gray-950 via-black to-gray-950 z-[120] pointer-events-none border-l-2 border-[#e8702a] shadow-[0_0_40px_rgba(232,112,42,0.4)]"
      />

      {/* Top ambient gold pulse progress indicator */}
      <motion.div
        key={`line-${pageKey}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#e8702a] to-transparent z-[130] origin-left pointer-events-none"
      />

      {children}
    </motion.div>
  );
};


