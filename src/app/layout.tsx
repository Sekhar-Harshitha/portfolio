import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sekhar Harshitha — Product Designer & CS Engineer',
  description:
    'Portfolio of Sekhar Harshitha — a product designer and computer science engineer crafting meaningful digital experiences for climate, cities, and everyday life.',
  keywords: [
    'product designer',
    'UX design',
    'UI design',
    'computer science',
    'climate tech',
    'portfolio',
    'Sekhar Harshitha',
  ],
  authors: [{ name: 'Sekhar Harshitha' }],
  creator: 'Sekhar Harshitha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sekharharshitha.design',
    title: 'Sekhar Harshitha — Product Designer',
    description:
      'Designing thoughtful products for climate, cities, and everyday life.',
    siteName: 'Sekhar Harshitha Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sekhar Harshitha — Product Designer',
    description: 'Designing thoughtful products for climate, cities, and everyday life.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise antialiased">{children}</body>
    </html>
  )
}
