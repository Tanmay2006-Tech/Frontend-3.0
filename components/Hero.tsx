'use client';

import { useState } from 'react';

export function Hero() {
  const floatingTexts = ['Automated Pipeline V2.4', 'Deep Logic Integration', 'Neural Logic Scaling'];

  return (
    <section className="relative min-h-screen flex items-center radial-hero pt-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div
        className="z-10 w-full max-w-5xl grid md:grid-cols-12 gap-12 items-center"
        style={{ animation: 'fadeIn 0.8s ease-out' }}
      >
        <div className="md:col-span-8 flex flex-col gap-8">
          {/* Floating Nav Items */}
          <div className="flex flex-col gap-2 h-12 overflow-hidden relative">
            {floatingTexts.map((text, i) => (
              <div
                key={text}
                className="nav-link-fade text-label-mono text-primary uppercase"
                style={{ animationDelay: `${i * 2}s` }}
              >
                {text}
              </div>
            ))}
          </div>

          <h1 
            className="text-display-lg md:text-7xl leading-tight font-light text-white max-w-2xl"
            style={{ animation: 'slideInUp 0.8s ease-out 0.2s both' }}
          >
            Power your future with AI
          </h1>

          <div 
            className="flex items-center gap-6 mt-4"
            style={{ animation: 'slideInUp 0.8s ease-out 0.4s both' }}
          >
            <button className="text-label-mono border border-white px-10 py-5 text-white hover:bg-white hover:text-black active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-white/30">
              BUILD A WORKFLOW
            </button>
          </div>

          {/* Client Logos */}
          <div 
            className="mt-12 flex gap-8 items-center opacity-40 grayscale"
            style={{ animation: 'slideInUp 0.8s ease-out 0.6s both' }}
          >
            {['Aetna', 'Cigna', 'Anthem'].map((logo) => (
              <span key={logo} className="text-headline-sm font-bold tracking-tighter">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Decoration Grid */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:flex items-center justify-center opacity-20">
        <div className="w-px h-full bg-outline-variant/30 absolute left-0"></div>
        <div className="w-full h-px bg-outline-variant/30 absolute top-1/2"></div>
        <div className="w-full h-full blueprint-grid"></div>
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
