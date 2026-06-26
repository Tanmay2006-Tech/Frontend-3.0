'use client';

export function Footer() {
  return (
    <footer className="bg-background border-t border-outline-variant/30 py-12 md:py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
        <div
          className="flex flex-col gap-4"
          style={{
            animation: 'slideInUp 0.8s ease-out',
          }}
        >
          <div className="flex items-center gap-2">
            <svg className="text-primary" fill="none" height="20" viewBox="0 0 24 24" width="20">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span className="text-headline-sm font-bold">ARMORY</span>
          </div>
          <p className="text-on-surface-variant text-sm">Advanced automation for the enterprise.</p>
        </div>

        <div
          className="flex flex-col gap-4"
          style={{
            animation: 'slideInUp 0.8s ease-out 0.1s both',
          }}
        >
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
        </div>

        <div
          className="flex flex-col gap-4"
          style={{
            animation: 'slideInUp 0.8s ease-out 0.2s both',
          }}
        >
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
        </div>

        <div
          className="flex flex-col gap-4"
          style={{
            animation: 'slideInUp 0.8s ease-out 0.3s both',
          }}
        >
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
        </div>
      </div>

      <div className="border-t border-outline-variant/30 mt-12 md:mt-16 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto text-on-surface-variant text-sm">
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
    </footer>
  );
}
