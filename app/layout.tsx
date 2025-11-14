import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Token Metrics Sponsorship',
  description: 'Partner with Token Metrics - Reach 160k+ crypto-native subscribers and 350k+ community members',
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts (Typekit) - replace XXXXXXX with your Kit ID */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link rel="stylesheet" href="https://use.typekit.net/rdq2xtk.css" />
      </head>
      <body className="font-sans subpixel-antialiased scroll-smooth">{children}</body>
    </html>
  )
}
