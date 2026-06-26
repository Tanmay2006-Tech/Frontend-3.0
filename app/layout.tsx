import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ARMORY | AI Automation Platform',
  description: 'Enterprise-grade AI automation platform for intelligent workflow orchestration. Deploy custom agents, scale operations, and transform business processes with advanced AI logic.',
  generator: 'v0.app',
  keywords: ['AI automation', 'workflow orchestration', 'enterprise AI', 'custom agents', 'automation platform'],
  openGraph: {
    title: 'ARMORY | AI Automation Platform',
    description: 'Power your future with AI. Enterprise automation engineered for scale.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-background text-on-surface">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
