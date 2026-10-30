# Audit visuel (avant redesign premium)

Captures headless Playwright, production locale — dossier **`/opt/cursor/artifacts/audit-before/`**.  
Viewports : **375, 768, 1280, 1440** px — pages : `/`, `/soins`, `/reservation`, `/a-propos`, `/contact`.

## Problèmes identifiés

### P1 — Sections « vides » (critique, toutes pages longues)

**Symptôme** : vastes bandes crème sans texte ni image entre blocs (accueil après le hero, `/soins` après la 1re catégorie).  
**Cause** : animations GSAP — `FadeIn` en `opacity: 0` jusqu’au scroll, et `SplitTitle` avec masque `overflow: hidden` + `yPercent: 115` — le contenu hors viewport paraît absent (captures full-page).  
**Captures** : `audit-before-home-1280.png`, `audit-before-home-375.png`, `audit-before-soins-1280.png`, `audit-before-soins-375.png`.

### P2 — Hiérarchie typo plate

**Symptôme** : eyebrows et nav très petits ; titres de section peu contrastés avec le corps.  
**Captures** : `audit-before-home-768.png`, `audit-before-contact-375.png`.

### P3 — Manque d’air vs densité incohérente

**Symptôme** : `--section` large combiné à contenu invisible (P1) ; à l’inverse formulaire réservation et pills très serrés.  
**Captures** : `audit-before-reservation-375.png`, `audit-before-home-1440.png`.

### P4 — Navigation soins absente sur mobile

**Symptôme** : `.svc-nav { display: none }` sous 860px — pas de raccourcis catégories, seule la liste longue.  
**Capture** : `audit-before-soins-375.png`.

### P5 — Cartes univers peu « boutique »

**Symptôme** : cartes sans relief commun, padding faible sur mobile, hover peu distingué.  
**Capture** : `audit-before-home-768.png`, `audit-before-home-375.png`.

### P6 — Mosaïque / photos

**Symptôme** : grilles OK en ratio mais manque d’unité visuelle (ombres, radius) ; risque de collapse si animations masquent le bloc institut.  
**Capture** : `audit-before-home-1280.png`, `audit-before-a-propos-768.png`.

### P7 — Footer filigrane

**Symptôme** : script Perlina très présent derrière les colonnes — bruit visuel, peu premium.  
**Capture** : `audit-before-contact-375.png`, `audit-before-reservation-375.png`.

### P8 — Menu mobile

**Symptôme** : fond plat, peu de profondeur ; `main` masqué (`visibility: hidden`) — OK fonctionnel mais transition abrupte.  
**Capture** : (non full-page menu ; vérifié en test E2E).

### P9 — Liste tarifs mobile

**Symptôme** : lignes `.svc-row` avec points de suite serrés ; prix parfois wrap agressif (`dots` cachés en mobile existant).  
**Capture** : `audit-before-soins-375.png`.

### P10 — Contraste / accessibilité

**Symptôme** : texte `--ink-soft` sur crème en petite taille (labels, hints) limite la lisibilité.  
**Captures** : Lighthouse A11y ~95–96 ; `audit-before-reservation-375.png`.

## Corrections apportées (branche `cursor/premium-redesign-d621`)

- P1 : `FadeIn` sans opacity ; `SplitTitle` sans masque cachant ; `overflow: visible` sur split-mask.
- P3/P5/P6/P7 : `premium.css` (espacements, cartes, mosaïque, footer, boutons).
- P4 : nav soins en scroll horizontal mobile.
- Motion : hero plus lent ; micro-interactions hover renforcées.

Captures **après** : `/opt/cursor/artifacts/audit-after/`.
