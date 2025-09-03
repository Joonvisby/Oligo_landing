import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OLIGO - Prebiotic Sweetener Coming Soon',
  description: 'Prebiotic Sweetener — Rooted in Korean kitchens, crafted for today\'s cooks.',
  keywords: 'prebiotic, sweetener, korean, cooking, oligosaccharides, healthy',
  authors: [{ name: 'OLIGO' }],
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
