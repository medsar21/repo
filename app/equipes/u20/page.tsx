'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function EquipeU20Page() {
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
        <section className="relative bg-gradient-to-br from-maroc-red via-maroc-dark to-maroc-green py-24 md:py-32">
          <div className="container-custom relative z-10">
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <Link href="/equipes">Équipes</Link>
              <span>/</span>
              <span className="text-white">E.N. U20</span>
            </nav>

            <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Équipe Nationale U20
            </h1>
            <p className="text-xl text-white/90">Les jeunes Lions de l'Atlas</p>
          </div>
        </section>

        <section className="bg-white border-b sticky top-20 z-30">
          <div className="container-custom">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-semibold border-b-4 ${
                    activeTab === tab.id ? 'border-maroc-red text-maroc-red' : 'border-transparent'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Contenu en cours de développement</h2>
            <Link href="/equipes" className="btn-primary">Retour aux équipes</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

