'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function EquipeFeminineAPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative bg-gradient-to-br from-maroc-red via-maroc-dark to-maroc-gold py-24 md:py-32">
          <div className="container-custom relative z-10">
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
              <Link href="/">Accueil</Link> / <Link href="/equipes">Équipes</Link> / Féminine A
            </nav>
            <h1 className="font-playfair italic text-5xl md:text-6xl font-bold text-white mb-6">Équipe Nationale Féminine A</h1>
            <p className="text-xl text-white/90">Les Lionnes de l'Atlas</p>
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

