# Direction artistique — Perlina By L (premium)

Institut de beauté haut de gamme à La Grande-Motte. **Palette inchangée** : crème (`--ivoire`, `--creme`), or (`--or`, `--or-fonce`), nacre (`--nacre`).

## Principes

1. **Beaucoup d’air** — sections espacées mais sans vides « fantômes » : le contenu reste **lisible sans scroll obligatoire** pour révéler opacity/masques.
2. **Or avec parcimonie** — accents (eyebrows, prix, CTA, filets) ; corps de texte en encre douce (`--ink-soft`).
3. **Grille rigoureuse** — conteneur `--container-max: 1220px`, gouttières `--gutter`, cartes et listes alignées sur une colonne de lecture ~42rem pour les leads.
4. **Photos grandes** — mosaïque et avant/après en ratios 4/5 ou 5/4, `object-fit: cover`, coins `--radius: 3px`, ombre légère.
5. **Motion sobre** — GSAP lent (`power2.out`, 1,2–1,45 s), **pas d’opacity 0** sur le contenu below-the-fold ; `prefers-reduced-motion` respecté.

## Typographie

| Rôle | Police | Usage |
|------|--------|--------|
| Serif | Cormorant Garamond (`--font-serif`) | Titres h1–h3, prix, accroches |
| Sans | Jost 300/400 (`--font-sans`) | UI, labels, navigation, formulaires |
| Script | Great Vibes (`--font-script`) | Logo, tagline hero, filigrane footer discret |

Échelle titres : hero `clamp(3.1rem, 12vw, 7.2rem)` ; sections `clamp(2.35rem, 4.8vw, 3.85rem)` ; catégories soins ~2rem.

## Espacements (échelle)

| Token | Valeur |
|-------|--------|
| `--section` | `clamp(4.5rem, 9vw, 8.5rem)` (mobile 3.75rem) |
| `--gutter` | `clamp(1.25rem, 4.2vw, 2.75rem)` |
| `--gap` | `clamp(1rem, 2vw, 1.5rem)` grilles |

## Couleurs (sémantique)

- Fond page : `--ivoire`
- Surfaces cartes : `--blanc` + bordure `--line-soft`
- Texte principal : `--ink` ; secondaire : `--ink-soft`
- CTA plein : `--or-fonce` sur blanc ; ghost : contour or

## Composants clés

- **Header** : fixe, blur au scroll, nav uppercase espacée, CTA contour.
- **Menu mobile** : plein écran crème translucide, liens serif grands, CTA uppercase.
- **Cartes univers** : fond blanc commun, hover lift léger, prix en serif italique or.
- **Liste soins** : filets pointillés, nav catégories sticky / scroll horizontal mobile.
- **Galerie** : cartes cliquables, lightbox existante, hover shadow.
- **Réservation** : blocs numérotés, pills et choix avec transition douce.
- **Footer** : fond `--ivoire-2`, filigrane script très faible (`--foot-mark-opacity`).

## Motion (GSAP / Lenis)

- **Lenis** : une instance (`subscribeLenis`), arrêt menu ouvert.
- **FadeIn** : translation + léger blur uniquement (contenu toujours opaque).
- **SplitTitle** : léger `yPercent`, masque sans `overflow: hidden` agressif.
- **Hero** : timeline d’entrée unique, durées ~1 s.

## Fichiers

- Tokens : `src/styles/tokens.css`
- Base layout : `src/styles/main.css`
- Couche premium : `src/styles/premium.css`
- Tailwind thème : `src/app/globals.css` (`@theme inline`)
