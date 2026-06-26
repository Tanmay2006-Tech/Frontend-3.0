'use client';

import { motion } from 'framer-motion';

interface WorkflowFeature {
  number: string;
  title: string;
  description: string;
}

const features: WorkflowFeature[] = [
  {
    number: '01',
    title: 'Event Driven',
    description: 'Real-time triggers based on 500+ integrated app signals.',
  },
  {
    number: '02',
    title: 'Atomic Tasks',
    description: 'Deconstruct workflows into granular, repeatable logic blocks.',
  },
  {
    number: '03',
    title: 'Visual Logic',
    description: 'Map business processes without complex scripting environments.',
  },
  {
    number: '04',
    title: 'Auto-Scaling',
    description: 'Resources expand dynamically based on concurrent flow volume.',
  },
];

export function Workflow() {
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
    <section className="py-16 md:py-24 bg-background px-6 md:px-12">
      <motion.div
        className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="text-label-mono text-primary mb-4">CANVAS ENGINE</p>
          <h2 className="text-display-lg md:text-5xl font-bold">Infinite Flow Logic.</h2>
        </div>
        <div className="max-w-md text-on-surface-variant text-body-md">
          Our node-based architecture allows you to drag-and-drop complex AI logic without touching a single line of code.
        </div>
      </motion.div>

      <motion.div
        className="relative w-full h-96 md:h-96 border border-outline-variant/30 bg-[#0c0c0c] rounded mb-12 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 blueprint-grid opacity-20"></div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
          <path d="M100 200 L 400 100 L 700 200 L 400 300 Z" fill="none" stroke="#555" strokeDasharray="4 4" strokeWidth="1"></path>
          <motion.path
            d="M150 200 H 300 V 120 H 450"
            fill="none"
            stroke="white"
            strokeWidth="1"
            initial={{ strokeDashoffset: 1000 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.2 }}
            strokeDasharray="1000"
          ></motion.path>
          <motion.path
            d="M150 200 H 300 V 280 H 450"
            fill="none"
            stroke="white"
            strokeWidth="1"
            initial={{ strokeDashoffset: 1000 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.4 }}
            strokeDasharray="1000"
          ></motion.path>
        </svg>

        {/* Trigger Node */}
        <motion.div
          className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 p-6 border border-white bg-background z-10 w-48"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-label-mono text-primary mb-2">TRIGGER</div>
          <div className="font-bold">Email Inbound</div>
          <div className="mt-4 flex gap-2">
            <motion.span className="w-2 h-2 rounded-full bg-green-500" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <span className="text-xs text-on-surface-variant">Listening...</span>
          </div>
        </motion.div>

        {/* AI Node 1 */}
        <motion.div
          className="absolute left-64 md:left-96 top-16 md:top-24 p-6 border border-outline-variant/50 bg-background z-10 w-48"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-label-mono text-primary mb-2">AI AGENT</div>
          <div className="font-bold">Sentiment Scan</div>
          <div className="mt-4 h-1 w-full bg-outline-variant"></div>
        </motion.div>

        {/* AI Node 2 */}
        <motion.div
          className="absolute left-64 md:left-96 bottom-16 md:bottom-24 p-6 border border-outline-variant/50 bg-background z-10 w-48"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-label-mono text-primary mb-2">AI AGENT</div>
          <div className="font-bold">Summary Gen</div>
          <div className="mt-4 h-1 w-full bg-outline-variant"></div>
        </motion.div>

        {/* Output Node */}
        <motion.div
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 p-6 border border-outline-variant/50 bg-surface z-10 w-48 opacity-50"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-label-mono text-gray-600 mb-2">DESTINATION</div>
          <div className="font-bold text-gray-600">CRM Sync</div>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-px border border-outline-variant/30 divide-x divide-outline-variant/30"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature) => (
          <motion.div key={feature.number} className="p-6 md:p-8" variants={itemVariants}>
            <div className="text-label-mono text-xs mb-4 text-gray-600">{feature.number}</div>
            <h4 className="font-bold mb-2 text-headline-sm md:text-base">{feature.title}</h4>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
