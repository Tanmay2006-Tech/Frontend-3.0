# Installation & Quick Start

## Prerequisites

Ensure you have the following installed:
- **Node.js** 18.17+ ([download](https://nodejs.org))
- **pnpm** 9.0+ (npm install -g pnpm)
- Git for version control

## 1. Clone the Repository

```bash
git clone <your-repo-url>
cd armory-landing
```

## 2. Install Dependencies

```bash
pnpm install
```

This will install:
- `next@16.0.0` - React framework
- `react@19.2.0` - UI library
- `tailwindcss@4.0.0` - Styling
- `typescript@5.0+` - Type safety

## 3. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page will auto-refresh when you save changes.

## 4. Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure Quick Reference

```
├── app/
│   ├── page.tsx          ← Landing page content
│   ├── layout.tsx        ← Root layout (fonts, meta)
│   └── globals.css       ← Design tokens & animations
├── components/           ← Reusable React components
│   ├── Header.tsx        ← Navigation
│   ├── Hero.tsx          ← Hero section
│   ├── Services.tsx      ← Services grid
│   ├── Statistics.tsx    ← Stats counters
│   ├── VideoShowcase.tsx ← Video section
│   ├── CaseStudies.tsx   ← Case studies
│   ├── Workflow.tsx      ← Workflow diagram
│   ├── Pricing.tsx       ← Pricing section
│   └── Footer.tsx        ← Footer
├── lib/
│   ├── pricing.ts        ← Pricing logic
│   ├── animations.ts     ← Animation utilities
│   └── utils.ts          ← Helper functions
└── public/               ← Static assets
    └── icons/            ← SVG icons
```

## Customizing the Landing Page

### Change Company Name

1. **Header**: `components/Header.tsx`
   ```tsx
   <span className="text-2xl font-semibold">YOUR_COMPANY</span>
   ```

2. **Footer**: `components/Footer.tsx`
   ```tsx
   <span className="text-headline-sm font-bold">YOUR_COMPANY</span>
   ```

### Update Colors

Edit `app/globals.css`:

```css
@theme inline {
  --color-background: #080808;  /* Dark background */
  --color-primary: #c9c6c5;      /* Accent color */
  --color-light-bg: #f0f0f0;     /* Light section bg */
  /* ... other tokens ... */
}
```

### Modify Pricing

Edit `lib/pricing.ts`:

```tsx
export const pricingTiers = [
  {
    name: 'Starter',
    basePrice: 0,     // Change this
    features: [
      // Add/remove features
    ],
  },
  // ... other tiers
];
```

### Change Service Features

Edit `components/Services.tsx`:

```tsx
const services = [
  {
    title: 'Your Feature',
    description: 'Feature description',
    icon: 'icon_name', // Material symbol
  },
  // ...
];
```

## Deployment

### Deploy to Vercel (Recommended)

```bash
# 1. Push to GitHub
git add .
git commit -m "Initial ARMORY landing page"
git push origin main

# 2. Import in Vercel Dashboard
# → Connect your GitHub repo
# → Vercel auto-detects Next.js
# → Deploy automatically

# Visit your production URL
```

### Deploy to Netlify

```bash
# 1. Export as static
pnpm build

# 2. Deploy /out folder
# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

### Self-Hosted (Linux/Docker)

```bash
# Build
pnpm build

# Run on server
pnpm start --host 0.0.0.0 --port 3000

# Or use PM2
npm install -g pm2
pm2 start "pnpm start" --name armory
```

## Environment Variables

No environment variables required for development.

For production, you can add `.env.local`:
```bash
# Optional analytics/monitoring
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Troubleshooting

### Port 3000 Already in Use

```bash
# Use different port
pnpm dev -p 3001
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### TypeScript Errors

```bash
# Check for type issues
pnpm tsc --noEmit
```

### Animations Not Working

1. Check `Reduce Motion` in browser settings (DevTools → Settings)
2. Verify JavaScript enabled
3. Check CSS loaded: DevTools → Application → CSS files

### Build Fails

```bash
# Check Next.js version
pnpm list next

# Try clean build
rm -rf .next
pnpm build

# Check for console errors
pnpm dev
```

## Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm start     # Start production server
pnpm type-check # Run TypeScript type check
pnpm lint      # Run ESLint (if configured)
```

## Performance Tips

1. **Images**: Use WebP format, compress with TinyPNG
2. **Fonts**: Already optimized (Google Fonts with display=swap)
3. **Animations**: Already CSS-optimized (60fps)
4. **Bundle**: No external animation libraries (Framer Motion removed)

## Next Steps

1. ✅ **Customization** → Update colors, text, pricing
2. ✅ **Testing** → Test on mobile (pnpm dev → open on phone on same network)
3. ✅ **Analytics** → Add Google Analytics / Mixpanel
4. ✅ **SEO** → Update meta tags in `app/layout.tsx`
5. ✅ **Deployment** → Deploy to Vercel / your hosting

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

---

**That's it! You now have a production-ready landing page. Happy hacking! 🚀**
