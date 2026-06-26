'use client';

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
  return (
    <section className="border-y border-outline-variant/30 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-outline-variant/30">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="p-8 md:p-12 hover:bg-surface transition-colors duration-300 group cursor-pointer"
            style={{
              animation: `slideInUp 0.8s ease-out ${0.1 * idx}s both`,
            }}
          >
            <div className="mb-8 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-white group-hover:text-primary transition-colors duration-300 group-hover:animate-pulse-glow">
                {service.icon}
              </span>
            </div>
            <h3 className="text-headline-sm mb-4">{service.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
