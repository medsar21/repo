import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';

/**
 * NewsCard Component
 * 
 * Carte spécifique pour afficher une actualité
 */

interface NewsCardProps {
  slug: string;
  titre: string;
  chapeau: string;
  image: string;
  categorie: string;
  datePublication: string;
  auteur?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  slug,
  titre,
  chapeau,
  image,
  categorie,
  datePublication,
  auteur,
}) => {
  const formattedDate = new Date(datePublication).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Card
      title={titre}
      description={chapeau}
      image={image}
      href={`/actualites/${slug}`}
      badge={categorie}
      badgeColor="red"
      imageAlt={titre}
      footer={
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{formattedDate}</span>
          {auteur && <span>{auteur}</span>}
        </div>
      }
    />
  );
};

export default NewsCard;

