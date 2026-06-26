'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Stat {
  label: string;
  value: string;
  unit: string;
}

const stats: Stat[] = [
  { label: 'AVERAGE LATENCY', value: '5', unit: 'ms' },
  { label: 'EFFICIENCY GAIN', value: '4', unit: 'x' },
  { label: 'COST REDUCTION', value: '48', unit: '%' },
];

function Counter({ target, unit }: { target: number; unit: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;

    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-6xl font-bold stat-bracket">
      {count}
      {unit}
    </div>
  );
}

export function Statistics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background grid md:grid-cols-12 gap-8 md:gap-12">
      <motion.div
        className="md:col-span-4 flex flex-col gap-4"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-label-mono text-primary">PLATFORM PERFORMANCE</p>
        <h2 className="text-headline-md max-w-xs">Engineered for absolute speed.</h2>
      </motion.div>

      <motion.div
        className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} className="stat-container" variants={itemVariants}>
            <Counter target={parseInt(stat.value)} unit={stat.unit} />
            <p className="text-label-mono mt-4 text-on-surface-variant">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
