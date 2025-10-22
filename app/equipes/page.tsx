import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/Hero';
import Card from '@/components/ui/Card';
import { getAllEquipes } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Équipes | Lions de l\'Atlas',
  description: 'Découvrez toutes les sélections nationales du Maroc : équipe A masculine, équipe féminine, équipe U23 et plus encore.',
};

/**
 * Page Équipes
 * 
 * Liste de toutes les équipes nationales du Maroc
 */

export default function EquipesPage() {
  const equipes = getAllEquipes();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero */}
        <Hero
          title="Nos Équipes"
          subtitle="Sélections Nationales"
          description="Découvrez toutes les sélections nationales qui représentent fièrement le Royaume du Maroc"
          backgroundVideo="/images/hero.mp4"
          height="medium"
        />

        {/* Liste des équipes */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipes.map((equipe) => (
                <Card
                  key={equipe.id}
                  title={equipe.nom}
                  description={equipe.description}
                  image={equipe.image}
                  href={`/equipe/${equipe.id}`}
                  badge={equipe.nomCourt}
                  badgeColor="green"
                  footer={
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Sélectionneur</span>
                        <span className="font-semibold">{equipe.selectionneur.nom}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Matchs joués</span>
                        <span className="font-semibold">{equipe.stats.matchsJoues}</span>
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section Palmarès global */}
        <section className="section bg-maroc-dark text-white">
          <div className="container-custom">
            <h2 className="section-title text-white">Palmarès de l'Équipe Nationale</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-maroc-gold rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-maroc-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">CAN 1976</h3>
                <p className="text-gray-300">Champions d'Afrique</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-maroc-gold rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-maroc-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">Coupe du Monde 2022</h3>
                <p className="text-gray-300">Demi-finalistes historiques</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-maroc-gold rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-maroc-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">JO 2004</h3>
                <p className="text-gray-300">Médaille d'or</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

