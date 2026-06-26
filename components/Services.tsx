'use client';

import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Secure Guard',
    description: 'Enterprise-grade security protocols for local and cloud-based AI deployments.',
    icon: 'shield_lock',
  },
  {
    title: 'Agent Build',
    description: 'Custom LLM orchestration designed for unique business operational logic.',
    icon: 'layers',
  },
  {
    title: 'Cloud Scale',
    description: 'Infinitely scalable compute resources optimized for low-latency AI responses.',
    icon: 'cloud_sync',
  },
  {
    title: 'Data Mining',
    description: 'Transform raw organizational data into structured intelligence pipelines.',
    icon: 'database',
  },
];

export function Services() {
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
    <section className="border-y border-outline-variant/30 bg-background">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 divide-x divide-outline-variant/30"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="p-8 md:p-12 hover:bg-surface transition-colors duration-300 group cursor-pointer"
            variants={itemVariants}
          >
            <div className="mb-8 w-12 h-12 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-white group-hover:text-primary transition-colors duration-300">
                {service.icon}
              </span>
            </div>
            <h3 className="text-headline-sm mb-4">{service.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
