import { Metadata } from 'next';

/**
 * SEO Helper
 * 
 * Génère les meta tags pour le SEO et les réseaux sociaux
 */

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
  keywords?: string[];
}

export function generateSEO({
  title,
  description,
  image = '/images/og-default.jpg',
  url = '',
  type = 'website',
  publishedTime,
  author,
  keywords = [],
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lions-atlas.ma';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const metadata: Metadata = {
    title: `${title} | Lions de l'Atlas`,
    description,
    keywords: [
      'Maroc',
      'Football',
      'Lions de l\'Atlas',
      'Équipe nationale',
      'FRMF',
      ...keywords,
    ],
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Lions de l\'Atlas',
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        'fr': fullUrl,
        'ar': `${fullUrl}?lang=ar`,
        'en': `${fullUrl}?lang=en`,
      },
    },
  };

  // Ajouter les métadonnées spécifiques aux articles
  if (type === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      authors: author ? [author] : undefined,
    };
  }

  return metadata;
}

export default generateSEO;

