'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-background border-t border-outline-variant/30 py-12 md:py-16 px-6 md:px-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <div className="flex items-center gap-2">
            <svg className="text-primary" fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span className="text-headline-sm font-bold">ARMORY</span>
          </div>
          <p className="text-on-surface-variant text-sm">Advanced automation for the enterprise.</p>
        </motion.div>

        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <h4 className="font-bold text-headline-sm">Product</h4>
          <ul className="flex flex-col gap-2 text-on-surface-variant text-sm">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Security
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <h4 className="font-bold text-headline-sm">Company</h4>
          <ul className="flex flex-col gap-2 text-on-surface-variant text-sm">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <h4 className="font-bold text-headline-sm">Legal</h4>
          <ul className="flex flex-col gap-2 text-on-surface-variant text-sm">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div className="border-t border-outline-variant/30 mt-12 md:mt-16 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto text-on-surface-variant text-sm" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p>&copy; 2026 ARMORY. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
