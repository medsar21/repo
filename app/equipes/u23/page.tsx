'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function EquipeU23Page() {
  const [activeTab, setActiveTab] = useState<'effectif' | 'staff' | 'actualites' | 'resultats'>('effectif');

  const tabs = [
    { id: 'effectif' as const, label: 'Effectif', icon: '👥' },
    { id: 'staff' as const, label: 'Staff', icon: '👔' },
    { id: 'actualites' as const, label: 'Actualités', icon: '📰' },
    { id: 'resultats' as const, label: 'Résultats', icon: '⚽' },
  ];

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maroc-green via-maroc-dark to-maroc-gold py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212, 175, 55, 0.1) 20px, rgba(212, 175, 55, 0.1) 40px)
              `,
            }}
          />
          
          <div className="container-custom relative z-10">
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/equipes" className="hover:text-white transition-colors">Équipes</Link>
              <span>/</span>
              <span className="text-white">E.N. U23</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-maroc-gold/20 backdrop-blur-sm border-2 border-maroc-gold rounded-full">
                <span className="text-sm md:text-base font-bold text-maroc-gold uppercase tracking-widest">
                  Espoirs
                </span>
              </div>

              <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Équipe Nationale U23
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                Les espoirs marocains - Champions d'Afrique Olympiques 2004
              </p>

              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-maroc-gold mb-2">2004</div>
                  <div className="text-sm md:text-base text-white/80">Médaille d'Or JO</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-maroc-gold mb-2">U23</div>
                  <div className="text-sm md:text-base text-white/80">Catégorie</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-maroc-gold mb-2">2024</div>
                  <div className="text-sm md:text-base text-white/80">Saison</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="bg-white border-b sticky top-20 z-30 shadow-sm">
          <div className="container-custom">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm md:text-base uppercase tracking-wide transition-all duration-300 border-b-4 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-maroc-green text-maroc-green'
                      : 'border-transparent text-gray-600 hover:text-maroc-green'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-maroc-green/10 rounded-full mb-6">
                <svg className="w-10 h-10 text-maroc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Contenu en cours de développement</h2>
              <p className="text-gray-600 mb-8">Les informations détaillées de l'équipe U23 seront bientôt disponibles</p>
              <div className="flex gap-4 justify-center">
                <Link href="/equipes" className="btn-secondary">
                  Retour aux équipes
                </Link>
                <Link href="/actualites" className="btn-primary">
                  Voir les actualités
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

