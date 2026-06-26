'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  label: string;
  value: number;
  unit: string;
}

const stats: Stat[] = [
  { label: 'AVERAGE LATENCY', value: 5, unit: 'ms' },
  { label: 'EFFICIENCY GAIN', value: 4, unit: 'x' },
  { label: 'COST REDUCTION', value: 48, unit: '%' },
];

function Counter({ target, unit }: { target: number; unit: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const duration = 2000;
          const steps = 60;
          const stepValue = target / steps;
          const stepDuration = duration / steps;

          const interval = setInterval(() => {
            current += stepValue;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3, once: true }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-6xl md:text-7xl font-light stat-bracket">
      {count}
      <span className="text-4xl ml-1">{unit}</span>
    </div>
  );
}

export function Statistics() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background grid md:grid-cols-12 gap-8 md:gap-12">
      <div
        className="md:col-span-4 flex flex-col gap-4"
        style={{
          animation: 'slideInUp 0.8s ease-out',
        }}
      >
        <p className="text-label-mono text-primary">PLATFORM PERFORMANCE</p>
        <h2 className="text-headline-md max-w-xs">Engineered for absolute speed.</h2>
      </div>

      <div
        className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end"
        style={{
          animation: 'slideInUp 0.8s ease-out 0.2s both',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-container"
            style={{
              animation: `slideInUp 0.8s ease-out ${0.2 + i * 0.1}s both`,
            }}
          >
            <Counter target={stat.value} unit={stat.unit} />
            <p className="text-label-mono mt-4 text-on-surface-variant">{stat.label}</p>
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
