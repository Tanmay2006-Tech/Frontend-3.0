'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function VideoShowcase() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const circleVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, opacity: 0.8 },
  };

  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 noise-overlay z-20"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          className="w-full h-full object-cover grayscale brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHQaGvKUw0dZDm_X5UCrYjswLvbVDCMTK54mjVBTq5bj1OLzbLXcdco1ae9zoL7NVyjhXdGGXpnr8BXQzgSUX16a3QnpYF7pShRSJ5LwQRgthdO-vytYkzCkfT8PSLKRD6EKpEO1Ypxx4CWw_TWuTkUweKK5gRGwzMP7e8iL2byRFL584fTv7GilOMqTv2GS1WnkOEt5Ndum5eeUiJUyK9nApABivhHa5rU2a5uyIrqAWkb3pEMkXvx6WnTxag-bVQO2heuZGaEgVD"
          alt="Data center visualization"
        />
      </div>
      <div className="relative z-30 h-full flex flex-col items-center justify-center gap-6">
        <motion.button
          className="group flex flex-col items-center gap-4 transition-all active:scale-95 cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          aria-label="Play video"
        >
          <motion.div
            className="w-24 h-24 rounded-full border border-white flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-300"
            variants={circleVariants}
            animate={isHovered ? 'hover' : 'initial'}
          >
            <span className="material-symbols-outlined text-5xl">play_arrow</span>
          </motion.div>
          <span className="text-label-mono tracking-wider font-bold">PLAY VIDEO</span>
        </motion.button>
      </div>
    </section>
  );
}
