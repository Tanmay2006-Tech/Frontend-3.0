'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const floatingTexts = ['Automated Pipeline V2.4', 'Deep Logic Integration', 'Neural Logic Scaling'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex items-center radial-hero pt-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <motion.div
        className="z-10 w-full max-w-5xl grid md:grid-cols-12 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="md:col-span-8 flex flex-col gap-8">
          {/* Floating Nav Items */}
          <motion.div className="flex flex-col gap-2 h-12 overflow-hidden relative" variants={itemVariants}>
            {floatingTexts.map((text, i) => (
              <div
                key={text}
                className="nav-link-fade text-label-mono text-primary uppercase"
                style={{ animationDelay: `${i * 2}s` }}
              >
                {text}
              </div>
            ))}
          </motion.div>

          <motion.h1 className="text-display-lg md:text-7xl leading-tight font-light text-white max-w-2xl" variants={itemVariants}>
            Power your future with AI
          </motion.h1>

          <motion.div className="flex items-center gap-6 mt-4" variants={itemVariants}>
            <button className="text-label-mono border border-white px-10 py-5 text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
              BUILD A WORKFLOW
            </button>
          </motion.div>

          {/* Client Logos */}
          <motion.div className="mt-12 flex gap-8 items-center opacity-40 grayscale" variants={itemVariants}>
            {['Aetna', 'Cigna', 'Anthem'].map((logo) => (
              <span key={logo} className="text-headline-sm font-bold tracking-tighter">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Visual Decoration Grid */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:flex items-center justify-center opacity-20">
        <div className="w-px h-full bg-outline-variant/30 absolute left-0"></div>
        <div className="w-full h-px bg-outline-variant/30 absolute top-1/2"></div>
        <div className="w-full h-full blueprint-grid"></div>
      </div>
    </section>
  );
}
