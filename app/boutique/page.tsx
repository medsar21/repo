'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import des données
import produits from '@/data/produits.json';

/**
 * Page Boutique
 * 
 * Boutique officielle de la FRMF
 */

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les produits' },
    { id: 'maillots', label: 'Maillots' },
    { id: 'accessoires', label: 'Accessoires' },
    { id: 'equipement', label: 'Équipement' },
  ];

  const filteredProduits = selectedCategory === 'all'
    ? produits
    : produits.filter(p => p.categorie === selectedCategory);

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maroc-green via-maroc-dark to-maroc-green py-24 md:py-32">
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
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-maroc-gold/20 backdrop-blur-sm border-2 border-maroc-gold rounded-full">
                <svg className="w-5 h-5 text-maroc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-sm md:text-base font-bold text-maroc-gold uppercase tracking-widest">
                  Boutique Officielle
                </span>
              </div>

              <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Collection FRMF
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Équipez-vous aux couleurs des Lions de l'Atlas
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
                      ? 'bg-maroc-green text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            {/* Stats */}
            <div className="mb-8">
              <p className="text-gray-600">
                <span className="font-bold text-maroc-green text-2xl">{filteredProduits.length}</span> produit{filteredProduits.length > 1 ? 's' : ''}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProduits.map((produit, index) => (
                <div
                  key={produit.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <Image
                      src={produit.image}
                      alt={produit.nom}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {produit.nouveau && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-maroc-red text-white text-xs font-bold uppercase rounded-full">
                        Nouveau
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <p className="text-sm text-maroc-green font-semibold uppercase mb-2">{produit.categorie}</p>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{produit.nom}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{produit.description}</p>
                    
                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-maroc-green">{produit.prix} DH</span>
                      {produit.disponible && (
                        <span className="text-xs text-green-600 font-semibold">En stock</span>
                      )}
                    </div>

                    {/* CTA */}
                    <button className="w-full py-3 bg-maroc-green text-white font-bold rounded-lg hover:bg-maroc-green/90 transition-colors flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProduits.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun produit trouvé</h3>
                <p className="text-gray-600">Essayez de sélectionner une autre catégorie</p>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-maroc-green/10 rounded-full mb-4">
                  <svg className="w-6 h-6 text-maroc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Livraison gratuite</h3>
                <p className="text-gray-600 text-sm">À partir de 500 DH</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-maroc-gold/10 rounded-full mb-4">
                  <svg className="w-6 h-6 text-maroc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Produits officiels</h3>
                <p className="text-gray-600 text-sm">Garantie 100% authentique</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-maroc-red/10 rounded-full mb-4">
                  <svg className="w-6 h-6 text-maroc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Retour facile</h3>
                <p className="text-gray-600 text-sm">30 jours pour changer d'avis</p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-full mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Paiement sécurisé</h3>
                <p className="text-gray-600 text-sm">Transactions 100% sécurisées</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

