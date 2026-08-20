# Perlina By L — Site vitrine (Next.js)

Site vitrine de l'institut de beauté Perlina By L (La Grande-Motte).

## Développement local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Déployer sur Vercel

**Option 1 — GitHub (recommandé) :** pousser ce dossier sur un repo GitHub, puis sur vercel.com → *Add New Project* → importer le repo. Vercel détecte Next.js automatiquement, aucun réglage nécessaire.

**Option 2 — CLI :**

```bash
npm i -g vercel
vercel             # depuis ce dossier, suivre les prompts
vercel --prod
```

## Structure

- `app/` — pages (App Router) : accueil, `a-propos`, `soins`, `contact`, `reservation`
- `components/` — Header, Footer, Silhouette animée, formulaires (client components)
- `public/images/` — photos de l'institut et visuels INDIBA®

## À venir

La page réservation est prête à être branchée sur un vrai système (agenda temps réel + paiement Stripe).
