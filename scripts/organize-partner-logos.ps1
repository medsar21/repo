# Script PowerShell pour organiser les logos des partenaires
# Usage: Placez vos logos téléchargés dans un dossier temporaire, puis exécutez ce script

Write-Host "🎨 Script d'organisation des logos des partenaires" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Chemin du dossier de destination
$destinationFolder = "public/images/partners"

# Créer le dossier s'il n'existe pas
if (-not (Test-Path $destinationFolder)) {
    New-Item -ItemType Directory -Path $destinationFolder -Force | Out-Null
    Write-Host "✅ Dossier créé: $destinationFolder" -ForegroundColor Green
}

# Mapping des noms possibles vers les noms standardisés
$nameMapping = @{
    # Bank Al-Maghrib
    "bank al maghrib" = "bank-al-maghrib.png"
    "bankalmaghrib" = "bank-al-maghrib.png"
    "bkam" = "bank-al-maghrib.png"
    
    # CDG
    "caisse de depot" = "cdg.png"
    "cdg" = "cdg.png"
    
    # Morocco
    "morocco" = "morocco.png"
    "maroc" = "morocco.png"
    
    # OCP
    "ocp" = "ocp.png"
    "office cherifien" = "ocp.png"
    
    # Puma
    "puma" = "puma.png"
    
    # Royal Air Maroc
    "royal air maroc" = "royal-air-maroc.png"
    "ram" = "royal-air-maroc.png"
    "royalairmaroc" = "royal-air-maroc.png"
    
    # Équipe Nationale
    "equipe nationale" = "equipe-nationale.png"
    "snrt" = "equipe-nationale.png"
    
    # Afriquia
    "afriquia" = "afriquia.png"
    
    # Haier
    "haier" = "haier.png"
    
    # Pepsi
    "pepsi" = "pepsi.png"
    
    # Skoda
    "skoda" = "skoda.png"
    
    # Atlantasanad
    "atlantasanad" = "atlantasanad.png"
    "atlanta sanad" = "atlantasanad.png"
    
    # Centrale Danone
    "centrale danone" = "centrale-danone.png"
    "danone" = "centrale-danone.png"
    
    # Dari
    "dari" = "dari.png"
    
    # Inwi
    "inwi" = "inwi.png"
    
    # La Education
    "la education" = "la-education.png"
    "laeducation" = "la-education.png"
    
    # McDonald's
    "mcdonald" = "mcdonalds.png"
    "mcdonalds" = "mcdonalds.png"
    
    # Sidiali
    "sidiali" = "sidiali.png"
    "sidi ali" = "sidiali.png"
    
    # Sonasid
    "sonasid" = "sonasid.png"
    
    # Sultan
    "sultan" = "sultan.png"
    
    # Webook
    "webook" = "webook.png"
    "we book" = "webook.png"
}

Write-Host "📁 Analyse des fichiers..." -ForegroundColor Yellow
Write-Host ""

# Demander le dossier source
$sourceFolder = Read-Host "Entrez le chemin du dossier contenant vos logos téléchargés (ou appuyez sur Entrée pour utiliser le dossier courant)"

if ([string]::IsNullOrWhiteSpace($sourceFolder)) {
    $sourceFolder = "."
}

# Vérifier si le dossier existe
if (-not (Test-Path $sourceFolder)) {
    Write-Host "❌ Erreur: Le dossier '$sourceFolder' n'existe pas!" -ForegroundColor Red
    exit 1
}

# Obtenir tous les fichiers image
$imageFiles = Get-ChildItem -Path $sourceFolder -Include *.png,*.jpg,*.jpeg,*.svg -Recurse | Where-Object { !$_.PSIsContainer }

if ($imageFiles.Count -eq 0) {
    Write-Host "❌ Aucun fichier image trouvé dans '$sourceFolder'" -ForegroundColor Red
    exit 1
}

Write-Host "✅ $($imageFiles.Count) fichier(s) image trouvé(s)" -ForegroundColor Green
Write-Host ""

$processedCount = 0
$skippedCount = 0

foreach ($file in $imageFiles) {
    $fileName = $file.BaseName.ToLower().Trim()
    $fileName = $fileName -replace '\s+', ' '  # Normaliser les espaces
    $fileName = $fileName -replace '[^a-z0-9\s]', ''  # Enlever caractères spéciaux
    
    $matched = $false
    foreach ($key in $nameMapping.Keys) {
        if ($fileName -like "*$key*") {
            $newName = $nameMapping[$key]
            $destinationPath = Join-Path $destinationFolder $newName
            
            Write-Host "📦 $($file.Name) → $newName" -ForegroundColor Cyan
            
            # Copier le fichier (convertir en PNG si nécessaire)
            if ($file.Extension -eq ".png") {
                Copy-Item -Path $file.FullName -Destination $destinationPath -Force
            } else {
                Write-Host "   ⚠️  Format $($file.Extension) détecté. Veuillez convertir en PNG manuellement." -ForegroundColor Yellow
                Copy-Item -Path $file.FullName -Destination $destinationPath -Force
            }
            
            $processedCount++
            $matched = $true
            break
        }
    }
    
    if (-not $matched) {
        Write-Host "⏭️  Ignoré: $($file.Name) (nom non reconnu)" -ForegroundColor Gray
        $skippedCount++
    }
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "✅ Traitement terminé!" -ForegroundColor Green
Write-Host "   - Fichiers traités: $processedCount" -ForegroundColor Green
Write-Host "   - Fichiers ignorés: $skippedCount" -ForegroundColor Yellow
Write-Host ""
Write-Host "📂 Les logos ont été placés dans: $destinationFolder" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Prochaine étape: Lancez 'npm run dev' pour voir les logos!" -ForegroundColor Green

