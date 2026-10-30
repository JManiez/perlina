# Design system — Perlina By L

Socle technique pour la refonte visuelle de [perlinabyl.fr](https://www.perlinabyl.fr). **Le rendu actuel est inchangé** : les classes CSS historiques (`.btn`, `.card`, `.hero`, etc.) restent la source de vérité visuelle.

## Modifier le visuel rapidement

1. **Couleurs, typo, espacements, ombres, motion** → `styles/tokens.css` (`:root`).
2. **Composants (boutons, cartes, formulaires…)** → `styles/main.css` (sections commentées : HEADER, HERO, SOINS…).
3. **Contenu (prix, galerie, textes métier)** → `content/catalog.js`, `content/gallery.js`.
4. **Structure des pages** → `components/sections/` (blocs accueil, catalogue soins).

Après changement de tokens, vérifier accueil, `/soins`, `/reservation`, mobile & desktop.

## Arborescence

```
perlina-next/
├── app/                    # Routes Next.js (App Router)
├── content/                # Données éditoriales & médias (prix, galerie, icônes SVG)
├── components/
│   ├── ui/                 # Primitives réutilisables (Button, Container, Section…)
│   ├── sections/           # Blocs de page (home/*, soins/*)
│   ├── gsap/               # Animations d’entrée (FadeIn, SplitTitle…)
│   └── …                   # Header, Footer, Hero, formulaires…
├── lib/                    # Contact, SEO (site, jsonLd), réexports legacy
├── styles/
│   ├── tokens.css          # Design tokens (variables CSS)
│   ├── main.css            # Règles composants & layout
│   └── index.css           # Point d’entrée (@import)
└── public/images/          # Assets statiques
```

## Design tokens (`styles/tokens.css`)

| Famille | Exemples de variables |
|---------|------------------------|
| Couleurs palette | `--ivoire`, `--or-fonce`, `--ink`, `--blanc` |
| Couleurs sémantiques | `--color-muted`, `--color-error`, `--color-surface-muted` |
| RGB (rgba) | `--rgb-ink`, `--rgb-or` |
| Typo | `--font-serif`, `--font-sans`, `--font-script` |
| Layout | `--container-max`, `--gutter`, `--section`, `--header-h` |
| Ombres / bordures | `--shadow`, `--line`, `--overlay-scrim` |
| Dégradés | `--gradient-gold-hero-title`, `--gradient-pearl` |
| Motion | `--ease-out-expo`, `--duration-ui` |
| Breakpoints (doc) | `--bp-phone` 639px, `--bp-nav` 860px, `--bp-tablet` 1023px |

Les `@media` dans `main.css` utilisent encore les valeurs en px ; aligner sur `--bp-*` lors de la refonte si souhaité.

## Primitives UI (`components/ui/`)

| Composant | Rôle | Classes conservées |
|-----------|------|---------------------|
| `Button` | CTA lien ou bouton | `.btn`, `.btn-or`, `.btn-ghost` |
| `Container` | Largeur max + gouttières | `.container` |
| `Section` | Wrapper `<section>` | padding via `section` global |
| `PageSection` | Section + Container | combinaison courante |
| `GoldIconGradient` | Définition SVG `#goldIc` | — |

`SectionTitle` (`components/SectionTitle.jsx`) reste le composant de **titres de section** (eyebrow + SplitTitle GSAP).

## Contenu

| Fichier | Contenu |
|---------|---------|
| `content/catalog.js` | Tarifs, `CATALOG`, formulaire réservation, cartes accueil |
| `content/gallery.js` | Montages avant/après |
| `content/homeUniversIcons.jsx` | Icônes cartes accueil |
| `content/soinsCategoryIcons.jsx` | Icônes titres /soins |

Les imports `lib/tarifs` et `lib/avantApres` réexportent encore ces modules (compatibilité).

## Animations

- **Lenis** : défilement fluide — `components/SmoothScroll.jsx`.
- **GSAP** : enregistrement — `components/gsap/register.js` ; hero, menu, titres — `Hero.jsx`, `Header.jsx`, `SplitTitle.jsx`.
- **CSS** : keyframes silhouette, scroll-cue, etc. — `styles/main.css`.
- Constantes partagées : `lib/animation.js`.

## SEO & contact (ne pas casser)

- URL canonique : `lib/site.js` → `https://www.perlinabyl.fr`
- Téléphone : `lib/contact.js`
- JSON-LD : `lib/jsonLd.js` (sans horaires d’ouverture tant que non fournis)

## État des lieux — freins à une refonte (audit)

### Styles

- **Monolith CSS** (~750 lignes) désormais scindé en `tokens.css` + `main.css`, mais toujours **sans CSS Modules** : risque de collisions de classes globales.
- **Couleurs en dur résiduelles** dans SVG inline (`content/*Icons.jsx`, `Silhouette.jsx`) et quelques `#8f7130` volontaires pour compatibilité SVG.
- **Duplication** : règles `.portrait-img` répétées ; nombreuses tailles en `clamp()` / `rem` non tokenisées (refonte typographique = beaucoup de lignes à ajuster).
- **Inline styles** ponctuels (`style={{ color: "var(--or-fonce)" }}` sur /soins).

### Composants

- **Mélange client/server** : GSAP force `"use client"` sur Hero, Header, animations ; pages restent mostly server components.
- **Pas de lib UI complète** : cartes, formulaires, galerie restent couplés aux classes globales.
- **SectionTitle + SplitTitle** : titres animés difficiles à remplacer sans revoir GSAP.

### Données

- Avant ce socle : prix et galerie dans `lib/` ; désormais centralisés dans `content/`.
- Textes marketing encore **dans les JSX** (blocs INDIBA, à propos) — à externaliser lors de la refonte contenu.

### Images

- **Double pipeline** : `next/image` + `ResponsivePhoto` (picture srcset crops) + montages galerie.
- Crops manuels dans `public/images/crops/` par breakpoint — changer les ratios implique regénérer les crops.

### Layout

- **Header fixe** + `--header-h` : toute refonte header exige sync tokens + `scroll-margin` (`.svc-cat`, `.ba-section`).
- Grilles **mosaïque / aa-grid / cards** : logique responsive répartie dans plusieurs `@media`.

## Conventions de nommage

- **Fichiers composants** : PascalCase (`HomeIndibaSection.jsx`).
- **Classes CSS** : kebab-case historique, préfixes sémantiques (`svc-`, `resa-`, `aa-`, `ba-`).
- **Tokens CSS** : `--or-fonce` (palette), `--color-*` (sémantique), `--gradient-*`, `--ease-*`.
- **Branches** : `cursor/<description>-d621`.

## Checklist refonte visuelle (pour Julien)

- [ ] Ajuster `styles/tokens.css` puis parcourir les pages clés
- [ ] Remplacer progressivement les classes globales par des modules ou un vrai kit UI
- [ ] Unifier les icônes SVG (stroke → `currentColor` + token)
- [ ] Regénérer crops images si grilles changent
- [ ] Conserver canonical www, robots, sitemap, JSON-LD sans horaires fictifs
