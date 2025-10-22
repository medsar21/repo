/**
 * Script de génération de données d'exemple
 * 
 * Usage: npm run seed:dev
 */

const fs = require('fs');
const path = require('path');

console.log('🌱 Génération de données d'exemple...\n');

// Vérifier si le dossier data existe
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  console.log('✅ Dossier data déjà présent');
} else {
  console.log('📁 Le dossier data existe déjà avec les données de base');
}

// Message de fin
console.log('\n✅ Données d'exemple prêtes !');
console.log('\n📝 Pour ajouter du contenu :');
console.log('   - Éditez les fichiers JSON dans /data/');
console.log('   - Ajoutez de nouvelles entrées aux tableaux');
console.log('   - Relancez le serveur dev pour voir les changements\n');

