'use client';

import { useState, useEffect } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsAnimating(true);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <>
      <nav className="fixed top-0 w-full h-16 z-50 backdrop-blur-md bg-surface/80 border-b border-outline-variant/30 flex justify-between items-center px-6 md:px-12">
        <a href="#" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <svg
            className="text-on-surface"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
          </svg>
          <span className="text-2xl font-semibold tracking-tight text-on-surface hidden sm:inline">ARMORY</span>
        </a>
        <button
          className="cursor-pointer hover:opacity-75 transition-opacity md:hidden"
          onClick={handleOpen}
          aria-label="Open navigation menu"
        >
          <svg className="w-6 h-6 text-on-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 bg-background flex flex-col justify-center items-start p-6 space-y-6 transition-opacity duration-200 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            className="absolute top-4 right-6 cursor-pointer hover:opacity-75 transition-opacity"
            onClick={handleClose}
            aria-label="Close navigation menu"
          >
            <svg className="w-8 h-8 text-on-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col gap-6 mt-8">
            {['AI Strategy', 'Custom Agents', 'Process Automation', 'Data Intelligence'].map((item, i) => (
              <a
                key={item}
                href="#"
                onClick={() => handleClose()}
                className="text-2xl md:text-3xl font-semibold text-on-surface hover:text-primary transition-colors duration-300"
                style={{
                  animation: isAnimating ? `slideInLeft 0.5s ease-out ${i * 0.1}s both` : 'none',
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-outline-variant/20 w-full max-w-xs">
            <button
              onClick={() => handleClose()}
              className="text-label-mono py-3 px-6 border border-on-surface text-on-surface hover:bg-on-surface hover:text-background active:scale-95 transition-all duration-300 w-full"
            >
              GET STARTED
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
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
      `}</style>
    </>
  );
}
