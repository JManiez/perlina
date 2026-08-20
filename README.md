# Perlina By L

Workspace du site de l’institut de beauté **Perlina By L** (La Grande-Motte).

## Site actuel

Le site en production est dans `perlina-next/` (Next.js 16).

```bash
cd perlina-next
npm install
npm run dev        # http://localhost:3000
```

## Déploiement Vercel

Vercel déploie **ce dépôt** (`perlina-next/` comme racine). Plus besoin de pousser vers `perlina-by-l`.

| Branche | Cible |
| --- | --- |
| `main` | Production — [perlinabyl.fr](https://www.perlinabyl.fr) |
| toute autre branche | Preview Vercel |

## Contenu de ce dépôt

| Chemin | Rôle |
| --- | --- |
| `perlina-next/` | Site actuel (Next.js 16) |
| `perlina-site/` | Première version HTML statique |
| `perlina-vercel/` | Ancienne version Next.js 14 |
| `perlina-by-l-maquette.html` | Maquette HTML initiale |
| `flyer.png` | Flyer |
| `contact_sheet.png` | Planche contact |
