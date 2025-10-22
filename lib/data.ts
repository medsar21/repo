/**
 * Data Helper Functions
 * 
 * Fonctions utilitaires pour récupérer et manipuler les données
 */

import equipes from '@/data/equipes.json';
import joueurs from '@/data/joueurs.json';
import actualites from '@/data/actualites.json';
import matches from '@/data/matches.json';
import produits from '@/data/produits.json';

// Types
export type Equipe = typeof equipes[0];
export type Joueur = typeof joueurs[0];
export type Actualite = typeof actualites[0];
export type Match = typeof matches[0];
export type Produit = typeof produits[0];

/**
 * Récupérer toutes les équipes
 */
export function getAllEquipes(): Equipe[] {
  return equipes;
}

/**
 * Récupérer une équipe par ID
 */
export function getEquipeById(id: string): Equipe | undefined {
  return equipes.find((equipe) => equipe.id === id);
}

/**
 * Récupérer tous les joueurs
 */
export function getAllJoueurs(): Joueur[] {
  return joueurs;
}

/**
 * Récupérer un joueur par ID
 */
export function getJoueurById(id: string): Joueur | undefined {
  return joueurs.find((joueur) => joueur.id === id);
}

/**
 * Récupérer les joueurs d'une équipe
 */
export function getJoueursByEquipe(equipeId: string): Joueur[] {
  return joueurs.filter((joueur) => joueur.equipe === equipeId);
}

/**
 * Récupérer toutes les actualités
 */
export function getAllActualites(): Actualite[] {
  return actualites.sort((a, b) => 
    new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime()
  );
}

/**
 * Récupérer une actualité par slug
 */
export function getActualiteBySlug(slug: string): Actualite | undefined {
  return actualites.find((actualite) => actualite.slug === slug);
}

/**
 * Récupérer les actualités par catégorie
 */
export function getActualitesByCategorie(categorie: string): Actualite[] {
  return actualites.filter((actualite) => actualite.categorie === categorie);
}

/**
 * Récupérer tous les matchs
 */
export function getAllMatches(): Match[] {
  return matches.sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

/**
 * Récupérer un match par ID
 */
export function getMatchById(id: number): Match | undefined {
  return matches.find((match) => match.id === id);
}

/**
 * Récupérer les prochains matchs
 */
export function getUpcomingMatches(limit?: number): Match[] {
  const now = new Date();
  const upcoming = matches
    .filter((match) => new Date(match.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return limit ? upcoming.slice(0, limit) : upcoming;
}

/**
 * Récupérer les résultats passés
 */
export function getPastMatches(limit?: number): Match[] {
  const now = new Date();
  const past = matches
    .filter((match) => new Date(match.date) < now && match.statut === 'termine')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return limit ? past.slice(0, limit) : past;
}

/**
 * Récupérer tous les produits
 */
export function getAllProduits(): Produit[] {
  return produits;
}

/**
 * Récupérer un produit par ID
 */
export function getProduitById(id: string): Produit | undefined {
  return produits.find((produit) => produit.id === id);
}

/**
 * Récupérer les produits par catégorie
 */
export function getProduitsByCategorie(categorie: string): Produit[] {
  return produits.filter((produit) => produit.categorie === categorie);
}

/**
 * Récupérer les nouveautés
 */
export function getNouveautes(limit?: number): Produit[] {
  const nouveautes = produits.filter((produit) => produit.nouveaute);
  return limit ? nouveautes.slice(0, limit) : nouveautes;
}

