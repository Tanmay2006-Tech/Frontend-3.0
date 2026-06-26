'use client';

interface CaseStudy {
  number: string;
  company: string;
  description: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    number: '01',
    company: 'Cigna Health',
    description: 'AUTOMATED CLAIMS PROCESSING WITH NEURAL CLASSIFIERS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE3MRhec7skeS9iWPxi_mltXTFvxMvzIq0t_PjYDRtgAGhihi4UcadUwgUtRrxSTHMh5lhYYGtv54PjoX0UxxC2a0cRMB8DoEKQX6elWqSLRgeldquRLX6IQlPcOjXFGxj1Sc-Ra3r0BUn6-GgwQRWCe17AFV3z_DJ55d7gB6CCcf0fQCzEzGli2IoyB8sNmQF0142VtnC4-7yhohyJpV31Zfy6TeEIWj2FKJEnBAnQK1b4XYKUW2iAbtR-6H87U1X_RYyFkaqh_Om',
  },
  {
    number: '02',
    company: 'Aetna',
    description: 'PREDICTIVE PATIENT RISK ANALYSIS ENGINE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCqCXq02yK_CjdoQJewZ3gk8uFpUPSPv5ZknWcTuMQ3INZTOVzSCL4ypCJxmpVc1ntNPIIuAEaebH2cJ7g6lIKnLInppAkq5zX1JRfTx8c_N-4_32rtg96NHSoh3mCyqGzUwuWTSP1C3spFaq5aCVCnl0oI8TJCVVYNSGQ3OKquBZxO2Pyf17JEfvJGbvwUvHVGHc4vyXwmGX8zS_ko0Ufn3eF73jFYdlHIPrO9rDM9DXOXqHsPQAUTItxCh0aqA0M1K82Ojb6uqd5',
  },
  {
    number: '03',
    company: 'Anthem',
    description: 'SUPPLY CHAIN LOGISTICS OPTIMIZATION MODEL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiTG1zkYDDgvyqupuKVADZGLsCh92D9rsEyPbp97wu9cx_YYGTlXo4871hJjo8PPi92U6oRh7O8VnYxem2r_SgrpkXKJh8Qv1AbVrz1buLxJwjcgfQVJYb8-89zO2T-7e355pE2KuJx5U5oFBIxa7ohdYQXu5b2WQDhygbeoP_7jhcnoWwvvjdq1bSW9xRtxlpVPF2d_OxUQckKzaqbRJ66dgfWBPQLNTqbh8j0_efbvcq8iQrrK-mgWpZbhyfX8mhs9wE0yrBUvWs',
  },
];

export function CaseStudies() {
  return (
    <section className="bg-light-bg text-light-text py-16 md:py-24 px-6 md:px-12">
      <p className="text-label-mono text-light-text/50 mb-12 md:mb-16" style={{ animation: 'fadeIn 0.6s ease-out' }}>
        DEPLOYED SOLUTIONS
      </p>

      <div className="flex flex-col border-t border-light-border">
        {caseStudies.map((study, idx) => (
          <div
            key={study.number}
            className="case-study-row py-8 border-b border-light-border grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-6 cursor-pointer hover:bg-white transition-colors duration-300 px-4 md:px-0"
            style={{
              animation: `slideInUp 0.8s ease-out ${0.1 * idx}s both`,
            }}
          >
            <div className="md:col-span-1 text-light-text/50 text-label-mono text-xs">{study.number}</div>
            <div className="md:col-span-2">
              <img className="w-full h-24 object-cover grayscale" src={study.image} alt={study.company} />
            </div>
            <div className="md:col-span-2 font-bold text-headline-sm">{study.company}</div>
            <div className="md:col-span-5 text-label-mono text-sm leading-relaxed">{study.description}</div>
            <div className="md:col-span-2 flex justify-end">
              <span className="case-study-arrow material-symbols-outlined text-4xl">east</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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
