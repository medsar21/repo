'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/specific/NewsCard';
import Link from 'next/link';

// Import des données
import actualites from '@/data/actualites.json';

/**
 * Page Actualités
 * 
 * Liste complète de toutes les actualités du football marocain
 */

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes' },
    { id: 'equipe-nationale', label: 'Équipe Nationale' },
    { id: 'competitions', label: 'Compétitions' },
    { id: 'international', label: 'International' },
    { id: 'formation', label: 'Formation' },
  ];

  const filteredActualites = selectedCategory === 'all'
    ? actualites
    : actualites.filter(a => a.categorie === selectedCategory);

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maroc-dark via-maroc-green to-maroc-dark py-24 md:py-32">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212, 175, 55, 0.1) 20px, rgba(212, 175, 55, 0.1) 40px),
                repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0, 98, 51, 0.1) 20px, rgba(0, 98, 51, 0.1) 40px)
              `,
            }}
          />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Actualités
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Suivez toute l'actualité du football marocain et des Lions de l'Atlas
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white border-b sticky top-20 z-30 shadow-sm">
          <div className="container-custom py-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-maroc-red text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            {/* Stats */}
            <div className="mb-8">
              <p className="text-gray-600">
                <span className="font-bold text-maroc-red text-2xl">{filteredActualites.length}</span> article{filteredActualites.length > 1 ? 's' : ''}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActualites.map((actualite, index) => (
                <div
                  key={actualite.id}
                  className="opacity-0 animate-slide-in-fade-up"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <NewsCard
                    slug={actualite.slug}
                    titre={actualite.titre}
                    chapeau={actualite.chapeau}
                    image={actualite.image}
                    categorie={actualite.categorie}
                    datePublication={actualite.datePublication}
                    auteur={actualite.auteur}
                    featured={false}
                  />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredActualites.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun article trouvé</h3>
                <p className="text-gray-600">Essayez de sélectionner une autre catégorie</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

