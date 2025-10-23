import type { Metadata } from 'next'
import { Chivo, Chivo_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
  display: 'swap',
})

const chivoMono = Chivo_Mono({
  subsets: ['latin'],
  variable: '--font-chivo-mono',
  weight: ['900'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lions de l\'Atlas - Équipe Nationale du Maroc',
  description: 'Site officiel de l\'équipe nationale de football du Maroc. Actualités, calendrier, joueurs, billetterie et boutique des Lions de l\'Atlas.',
  keywords: ['Maroc', 'Football', 'Lions de l\'Atlas', 'Équipe nationale', 'FRMF', 'CAN', 'Coupe du Monde'],
  authors: [{ name: 'FRMF' }],
  icons: {
    icon: '/images/FRMF-logo.svg',
    shortcut: '/images/FRMF-logo.svg',
    apple: '/images/FRMF-logo.svg',
  },
  openGraph: {
    title: 'Lions de l\'Atlas - Équipe Nationale du Maroc',
    description: 'Site officiel de l\'équipe nationale de football du Maroc',
    url: 'https://lions-atlas.ma',
    siteName: 'Lions de l\'Atlas',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lions de l\'Atlas',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lions de l\'Atlas',
    description: 'Site officiel de l\'équipe nationale de football du Maroc',
    images: ['/images/twitter-image.jpg'],
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
    <html lang="fr" className={`${chivo.variable} ${chivoMono.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}

