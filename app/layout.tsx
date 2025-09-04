import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Use custom domain for OG tags to ensure image accessibility
const baseUrl = 'https://www.oligo.co'

export const metadata: Metadata = {
  title: 'OLIGO - Prebiotic Sweetener Coming Soon',
  description: 'Revolutionary prebiotic sweetener rooted in Korean kitchens, crafted for today\'s cooks. Sign up for early access to OLIGO.',
  keywords: 'prebiotic, sweetener, korean, cooking, oligosaccharides, healthy, natural, sugar alternative, gut health',
  authors: [{ name: 'OLIGO' }],
  
  // Open Graph for social media
  openGraph: {
    title: 'OLIGO - Prebiotic Sweetener from Plants Coming Soon',
    description: 'Prebiotic sweetener from plants rooted in Korean kitchens, crafted for today\'s cooks. Sign up for early access to OLIGO.',
    url: baseUrl,
    siteName: 'OLIGO',
    images: [
      {
        url: `${baseUrl}/oligo-brand-OG.png`,
        width: 1200,
        height: 630,
        alt: 'OLIGO - Prebiotic Sweetener Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'OLIGO - Prebiotic Sweetener from Plants Coming Soon',
    description: 'Prebiotic sweetener from plants rooted in Korean kitchens, crafted for today\'s cooks. Sign up for early access.',
    images: [`${baseUrl}/oligo-brand-OG.png`], very mini
    creator: '@oligo',
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (you can add these later)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest for PWA (optional)
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
