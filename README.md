# Meron – Interface IA

Interface responsive reproduisant la maquette fournie, conforme aux exigences RGAA 4.1 et à la structure HTML5 imposée.

## Structure

- `index.html` : point d’entrée Vite (structure HTML5 complète + `<script type="module">`)
- `src/main.js` : import des feuilles de style et futur code interactif
- `src/styles/variables.css` : variables globales (couleurs, rayons, espaces)
- `src/styles/base.css` : styles généraux, reset, typographie
- `src/styles/components.css` : blocs composant la page (BEM)
- Police Inter chargée via Google Fonts

## Accessibilité

- Lien d'évitement `.skip-link`
- Titres hiérarchisés (`h1`, `h2`)
- `aria-label`, `role`, `aria-expanded` pour clarifier les interactions
- Focus visible (`outline` contrasté)
- Texte et arrière-plan respectent un contraste ≥ 4.5:1
- Navigation clavier possible pour tous les boutons et liens

## Responsive

- Mobile-first (375 px), points de rupture à 768 px et 1440 px
- Cartes et zone de saisie centrées, conversions fluides

## Scripts

- `npm install`
- `npm run dev` pour lancer Vite en mode développement
- `npm run build` pour générer la version production

## Checklist

- [ ] Validation W3C HTML/CSS
- [ ] Test WAVE
- [ ] Navigation clavier complète
- [ ] Contrastes vérifiés (4.5:1 minimum)
