import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Card Component
 * 
 * Composant carte générique réutilisable pour
 * afficher du contenu (articles, joueurs, produits, etc.)
 */

interface CardProps {
  title: string;
  description?: string;
  image: string;
  href?: string;
  badge?: string;
  badgeColor?: 'red' | 'green' | 'gold' | 'gray';
  footer?: React.ReactNode;
  className?: string;
  imageAlt?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  href,
  badge,
  badgeColor = 'red',
  footer,
  className = '',
  imageAlt,
}) => {
  const badgeColors = {
    red: 'bg-maroc-red',
    green: 'bg-maroc-green',
    gold: 'bg-maroc-gold',
    gray: 'bg-gray-600',
  };

  const content = (
    <div className={`card group ${className}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            <span
              className={`${badgeColors[badgeColor]} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Overlay sur hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenu */}
      <div className="card-content">
        <h3 className="font-heading font-bold text-xl mb-2 text-maroc-dark group-hover:text-maroc-red transition-colors">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 text-sm line-clamp-3">
            {description}
          </p>
        )}

        {/* Footer personnalisable */}
        {footer && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;

