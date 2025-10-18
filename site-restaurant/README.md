# L'Alhambra — site statique

Site statique pour le snack "L'Alhambra" (HTML/CSS/JS). Ce dépôt contient :

- `index.html` — page principale (accueil, menu, galerie, contact)
- `style.css` — styles (glassmorphism, responsive)
- `script.js` — charge dynamiquement `menu.json`, gère le menu mobile et le bouton "Commander"
- `menu.json` — données du menu (catégories et plats)
- `images/` — dossier pour les images (sous-dossiers `resto/` et `plats/`)

Remarques :
- Remplacez les images placeholders par vos photos dans `images/resto/` et `images/plats/`.
- Le lien "Commander" ouvre un lien factice Uber Eats ; remplacez-le dans `script.js` si besoin.

Déploiement gratuit sur GitHub Pages
-----------------------------------
1) Créez un dépôt GitHub (par exemple `lalhambra-site`).
2) Initialisez git localement, ajoutez et envoyez les fichiers :

```powershell
cd c:\Users\PNN\Desktop\site-restaurant
git init
git add .
git commit -m "Site L'Alhambra"
git branch -M main
# remplacez <USERNAME> et <REPO> par vos valeurs
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

3) Sur GitHub, allez dans `Settings` → `Pages` et choisissez la branche `main` (root) comme source. Enregistrez. Après quelques minutes votre site sera disponible à `https://<USERNAME>.github.io/<REPO>/`.

Test local rapide
-----------------
Si vous avez Python installé, lancez un serveur local et ouvrez http://localhost:8000 :

```powershell
cd c:\Users\PNN\Desktop\site-restaurant
python -m http.server 8000
```

Astuce : adaptez les images et `menu.json` à votre carte réelle. Pour améliorer l'accessibilité, ajoutez des attributs `alt` descriptifs aux images.

Licence & crédits
-----------------
Code fourni sans licence particulière — vous pouvez l'utiliser et l'adapter pour votre usage.
