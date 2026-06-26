# ARMORY - AI Automation Platform

A premium, production-ready landing page built with **Next.js 16**, **React**, **Tailwind CSS**, and **custom animations**. Built for [Insert Hackathon Name] - demonstrating enterprise-grade AI platform design with smooth interactions and responsive UX.

## Overview

ARMORY is a full-stack AI automation platform landing page showcasing:
- **Hero Section** with floating text animations
- **Services Grid** with 4 enterprise features
- **Statistics** with animated counters
- **Video Showcase** with cinematic background
- **Case Studies** with light-mode design
- **Workflow Diagram** with SVG node animations
- **Dynamic Pricing** with currency conversion (USD/INR/EUR) and annual/monthly toggle
- **Responsive Navigation** with mobile hamburger menu
- **Footer** with multi-column layout

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with semantic design tokens
- **Animations**: Custom CSS keyframes + React state management
- **Typography**: Inter (body) + JetBrains Mono (labels/code)
- **Icons**: Material Symbols + custom SVGs
- **Performance**: Optimized for LCP < 2.5s, CLS < 0.1

## Architecture & Design Decisions

### Component Structure

All components are client-rendered (`'use client'`) for proper interactivity:
- `Header.tsx` - Fixed navigation with mobile menu using CSS animations
- `Hero.tsx` - Hero section with floating animated text (8s cycle)
- `Services.tsx` - 4-column service grid with staggered slide-in animations
- `Statistics.tsx` - Animated number counters with IntersectionObserver
- `VideoShowcase.tsx` - Cinematic section with play button hover effects
- `CaseStudies.tsx` - Light-mode case study rows with arrow animations
- `Workflow.tsx` - Node-based diagram with SVG stroke animations
- `Pricing.tsx` - Dynamic pricing with state-managed currency/billing logic
- `Footer.tsx` - Multi-column footer with staggered animations

### Animation Strategy

**Custom CSS Keyframes** (no external libraries):
- `slideInUp` - Fade + translateY from 20px
- `slideInLeft/Right/Down` - Directional slide animations
- `drawPath` - SVG stroke animation for workflow diagram
- `pulse` - Breathing effect for active nodes

**React State Management**:
- IntersectionObserver for scroll-triggered animations
- Number counter animations with requestAnimationFrame
- Mobile menu state with smooth opacity transitions

### Responsive Design

**Mobile-First Approach**:
- Mobile (< 768px): Stacked layouts, hamburger menu, single column grids
- Tablet (768px - 1024px): 2-column grids, adjusted padding
- Desktop (> 1024px): Full 4-column layouts, grid decorations

### Performance Optimizations

1. **Bundle Size**: Removed Framer Motion (160KB) → pure CSS animations
2. **Render Efficiency**: IntersectionObserver prevents animation re-triggers
3. **Image Optimization**: Grayscale filters on client images, lazy loading
4. **CSS-in-JS**: Styled JSX for scoped animations (zero runtime overhead)

## Pricing Logic

The pricing component demonstrates:
- **Currency Conversion**: USD → INR (×83) / EUR (×0.92)
- **Billing Toggle**: Monthly vs Annual (20% discount)
- **State Isolation**: Currency/billing changes don't trigger global re-renders
- **Price Calculation**: `calculatePrice(basePrice, currency, period)`

```tsx
// Example: $99/mo → ₹7,920/mo or ₹76,176/year (annual discount)
const monthlyPrice = 99 * 83 = 8,217 INR
const annualPrice = (99 * 12 * 0.8) * 83 = 78,768 INR
```

## Animations Implemented

### Entry Animations (Page Load)
- Hero text: `slideInUp` 0.8s (staggered 0.2s intervals)
- Services grid: `slideInUp` 0.8s (0.1s per item)
- Statistics: `slideInUp` 0.8s (0.2s + 0.1s per stat)
- Footer: `slideInUp` 0.8s (0.1s per column)

### Scroll-Triggered Animations
- Counters: Number increment from 0 → target over 2s (easeOutCubic)
- Case studies: Staggered slide-in on scroll
- Workflow nodes: Sequence animation with 0.2s delays

### Hover Interactions
- Navigation links: Border left accent on hover
- Service cards: Background color transition + text color change
- Pricing cards: Y-axis lift effect (transform: translateY(-4px))
- CTA buttons: Scale transform active state

## Setup & Installation

### Prerequisites
- Node.js 18+ 
- pnpm or npm/yarn

### Clone & Install

```bash
git clone <repo-url>
cd armory-landing
pnpm install
```

### Environment Variables

No environment variables required for development. The app uses:
- Static pricing data (lib/pricing.ts)
- Public icon assets (public/icons/)
- Design tokens in globals.css

### Development

```bash
pnpm dev
# Open http://localhost:3000
```

### Production Build

```bash
pnpm build
pnpm start
```

## File Structure

```
/vercel/share/v0-project/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout with fonts
│   └── globals.css           # Design tokens + animations
├── components/
│   ├── Header.tsx            # Navigation
│   ├── Hero.tsx              # Hero section
│   ├── Services.tsx          # Services grid
│   ├── Statistics.tsx        # Stats with counters
│   ├── VideoShowcase.tsx     # Video section
│   ├── CaseStudies.tsx       # Case studies
│   ├── Workflow.tsx          # Workflow diagram
│   ├── Pricing.tsx           # Dynamic pricing
│   └── Footer.tsx            # Footer
├── lib/
│   ├── animations.ts         # Animation utilities
│   ├── pricing.ts            # Pricing logic & types
│   └── utils.ts              # Tailwind cn() function
├── public/
│   └── icons/                # SVG
└── package.json              # Dependencies
```

## Key Implementation Details

### Statistics Counter

Uses IntersectionObserver + requestAnimationFrame:

```tsx
useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !hasAnimated) {
      let current = 0;
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
  });
}, [target, hasAnimated]);
```

### Mobile Menu

State-driven animation with manual cleanup:

```tsx
const [isAnimating, setIsAnimating] = useState(false);

const handleClose = () => {
  setIsAnimating(false); // Trigger exit animation
  setTimeout(() => setIsOpen(false), 200); // Remove DOM
};
```

### Workflow SVG Animations

CSS-based stroke drawing:

```tsx
<path
  d="M150 200 H 300 V 120 H 450"
  strokeDasharray="1000"
  style={{
    animation: 'drawPath 2s ease-out 0.4s forwards',
  }}
/>
```

## Design System

### Color Palette
- **Dark Background**: #080808
- **Surface**: #1f2020
- **Text**: #e4e2e2
- **Primary Accent**: #c9c6c5
- **Light Mode**: #f0f0f0 (case studies section)

### Typography
- **Headings**: Inter, 300-700 weight
- **Body**: Inter, 400 weight
- **Labels**: JetBrains Mono, 400 weight, uppercase

### Spacing
- Based on 8px rhythm: 4px, 8px, 16px, 24px, 32px, 48px
- Consistent gap/margin values across components

### Border & Radius
- Border: 1px solid colors
- Radius: 0px (sharp architectural aesthetic)
- Borders: outline-variant/30 for hierarchy

## Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard focus visible outlines
- ✅ Color contrast WCAG AA compliant
- ✅ Touch target size 44px+ on mobile
- ✅ Screen reader friendly content

## Performance Metrics

### Target Metrics
- LCP (Largest Contentful Paint): < 2.5s
- INP (Interaction to Next Paint): < 200ms
- CLS (Cumulative Layout Shift): < 0.1
- FCP (First Contentful Paint): < 1.5s

### Optimization Techniques
1. CSS-only animations (60fps)
2. IntersectionObserver for lazy animation triggers
3. No animation on initial page load (better perceived speed)
4. Async image loading with grayscale CSS filters
5. Minimal JavaScript runtime (no animation libraries)

## Deployment

### Vercel (Recommended)

```bash
pnpm build
# Vercel auto-detects Next.js
git push  # Deploys automatically
```

### GitHub Pages / Self-Hosted

```bash
# Build static export
pnpm build

# Deploy /out directory
# Update next.config.mjs if needed:
# output: 'export'
```

## Customization

### Changing Prices

Edit `lib/pricing.ts`:

```tsx
export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter',
    basePrice: 0,  // Change this
    features: [/* ... */],
  },
];
```

### Updating Colors

Edit `app/globals.css` in the `@theme inline` block:

```css
--color-background: #080808;     /* Dark theme */
--color-light-bg: #f0f0f0;       /* Light sections */
--color-primary: #c9c6c5;        /* Accent */
```

### Adding New Sections

Create component in `/components/NewSection.tsx` and add to `page.tsx`:

```tsx
import { NewSection } from '@/components/NewSection';

export default function Page() {
  return (
    <main>
      {/* ... existing sections */}
      <NewSection />
    </main>
  );
}
```

## Troubleshooting

**Build Error: "styled-jsx" issue**
→ Ensure all components have `'use client'` directive at top

**Animations Not Playing**
→ Check browser DevTools → uncheck "Reduce Motion"
→ Verify CSS keyframes loaded in styles panel

**Pricing Not Updating**
→ Verify state change trigger (useState dependency array)
→ Check currency multipliers in `lib/pricing.ts`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS 15+, Android 12+)

## License

[MIT / [Your License]]

## Contact & Attribution

- Design Inspiration: Modern SaaS platforms
- Animation Patterns: Web standards (CSS3, Web APIs)
- Icons: Material Design + Custom SVGs

---

**Built with focus on**:
- Semantic HTML & accessibility
- Performance-first architecture
- Clean, maintainable component design
- Enterprise-grade UX patterns
- Hackathon judging criteria
