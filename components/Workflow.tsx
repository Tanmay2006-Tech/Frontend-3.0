'use client';

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
  return (
    <section className="py-16 md:py-24 bg-background px-6 md:px-12">
      <div
        className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12"
        style={{ animation: 'slideInUp 0.8s ease-out' }}
      >
        <div>
          <p className="text-label-mono text-primary mb-4">CANVAS ENGINE</p>
          <h2 className="text-display-lg md:text-5xl font-bold">Infinite Flow Logic.</h2>
        </div>
        <div className="max-w-md text-on-surface-variant text-body-md">
          Our node-based architecture allows you to drag-and-drop complex AI logic without touching a single line of code.
        </div>
      </div>

      <div
        className="relative w-full h-96 md:h-96 border border-outline-variant/30 bg-[#0c0c0c] rounded mb-12 overflow-hidden"
        style={{ animation: 'slideInUp 0.8s ease-out 0.2s both' }}
      >
        <div className="absolute inset-0 blueprint-grid opacity-20"></div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
          <path d="M100 200 L 400 100 L 700 200 L 400 300 Z" fill="none" stroke="#555" strokeDasharray="4 4" strokeWidth="1"></path>
          <path
            d="M150 200 H 300 V 120 H 450"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="1000"
            style={{
              animation: 'drawPath 2.5s ease-out 0.4s forwards, pulse-line 2s ease-in-out 2.9s infinite',
            }}
          ></path>
          <path
            d="M150 200 H 300 V 280 H 450"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="1000"
            style={{
              animation: 'drawPath 2s ease-out 0.6s forwards',
            }}
          ></path>
        </svg>

        {/* Trigger Node */}
        <div
          className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 p-6 border border-white bg-background z-10 w-48 hover:border-primary hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
          style={{
            animation: 'slideInLeft 0.6s ease-out, pulse-node 3s ease-in-out 1s infinite',
          }}
        >
          <div className="text-label-mono text-primary mb-2">TRIGGER</div>
          <div className="font-bold">Email Inbound</div>
          <div className="mt-4 flex gap-2">
            <span
              className="w-2 h-2 rounded-full bg-green-500"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
            />
            <span className="text-xs text-on-surface-variant">Listening...</span>
          </div>
        </div>

        {/* AI Node 1 */}
        <div
          className="absolute left-64 md:left-96 top-16 md:top-24 p-6 border border-outline-variant/50 bg-background z-10 w-48 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          style={{
            animation: 'slideInUp 0.6s ease-out 0.2s both',
          }}
        >
          <div className="text-label-mono text-primary mb-2">AI AGENT</div>
          <div className="font-bold">Sentiment Scan</div>
          <div className="mt-4 h-1 w-full bg-outline-variant"></div>
        </div>

        {/* AI Node 2 */}
        <div
          className="absolute left-64 md:left-96 bottom-16 md:bottom-24 p-6 border border-outline-variant/50 bg-background z-10 w-48 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          style={{
            animation: 'slideInDown 0.6s ease-out 0.3s both',
          }}
        >
          <div className="text-label-mono text-primary mb-2">AI AGENT</div>
          <div className="font-bold">Summary Gen</div>
          <div className="mt-4 h-1 w-full bg-outline-variant"></div>
        </div>

        {/* Output Node */}
        <div
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 p-6 border border-outline-variant/50 bg-surface z-10 w-48 opacity-50 hover:opacity-100 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          style={{
            animation: 'slideInRight 0.6s ease-out 0.4s both',
          }}
        >
          <div className="text-label-mono text-gray-600 mb-2">DESTINATION</div>
          <div className="font-bold text-gray-600">CRM Sync</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-outline-variant/30 divide-x divide-outline-variant/30">
        {features.map((feature, idx) => (
          <div
            key={feature.number}
            className="p-6 md:p-8"
            style={{
              animation: `slideInUp 0.8s ease-out ${0.1 * idx}s both`,
            }}
          >
            <div className="text-label-mono text-xs mb-4 text-gray-600">{feature.number}</div>
            <h4 className="font-bold mb-2 text-headline-sm md:text-base">{feature.title}</h4>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{feature.description}</p>
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-node {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(201, 198, 197, 0.3);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(201, 198, 197, 0);
          }
        }

        @keyframes pulse-line {
          0%, 100% {
            stroke-width: 1;
            opacity: 1;
          }
          50% {
            stroke-width: 2;
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
}
