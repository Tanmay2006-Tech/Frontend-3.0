'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const linkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <>
      <nav className="fixed top-0 w-full h-16 z-50 backdrop-blur-md bg-surface/80 border-b border-outline-variant/30 flex justify-between items-center px-12 md:px-12">
        <div className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform">
          <svg
            className="text-on-surface"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
          <span className="text-2xl font-semibold tracking-tight text-on-surface hidden sm:inline">ARMORY</span>
        </div>
        <button
          className="cursor-pointer active:scale-95 transition-transform md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-on-surface">menu</span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center items-start p-12 space-y-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-6 right-12 cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-on-surface text-4xl">close</span>
            </button>
            <div className="flex flex-col gap-8">
              {['AI Strategy', 'Custom Agents', 'Process Automation', 'Data Intelligence'].map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-3xl md:text-4xl font-semibold text-on-surface hover:pl-6 border-l-2 border-transparent hover:border-primary transition-all duration-300"
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-outline-variant/20 w-full max-w-md">
              <button className="text-label-mono py-4 px-8 border border-on-surface text-on-surface hover:bg-on-surface hover:text-background transition-all duration-300">
                GET STARTED
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
