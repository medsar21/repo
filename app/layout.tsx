import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lions de l\'Atlas - Équipe Nationale du Maroc',
  description: 'Site officiel de l\'équipe nationale de football du Maroc. Actualités, calendrier, joueurs, billetterie et boutique des Lions de l\'Atlas.',
  keywords: ['Maroc', 'Football', 'Lions de l\'Atlas', 'Équipe nationale', 'FRMF', 'CAN', 'Coupe du Monde'],
  authors: [{ name: 'FRMF' }],
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
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}

