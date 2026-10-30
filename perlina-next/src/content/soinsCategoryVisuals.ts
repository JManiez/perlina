/** Visuels optionnels par catégorie (page /soins). */

export type CategoryVisual = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const SOINS_CATEGORY_VISUALS: Partial<Record<string, CategoryVisual>> = {
  onglerie: {
    src: "/images/manucure.jpg",
    width: 1200,
    height: 1600,
    alt: "Manucure réalisée à l'institut Perlina By L",
  },
  soins: {
    src: "/images/aa-visage.jpg",
    width: 1200,
    height: 900,
    alt: "Soin du visage — ambiance institut",
  },
  indiba: {
    src: "/images/avant-apres/indiba-visage-apres-1-seance.jpg",
    width: 1402,
    height: 1122,
    alt: "Résultat INDIBA Deep Beauty visage",
  },
  massages: {
    src: "/images/salon-2.jpg",
    width: 1200,
    height: 1600,
    alt: "Cabine de soins Perlina By L",
  },
  browlift: {
    src: "/images/avant-apres/lashlift-regard-ouvert.jpg",
    width: 1536,
    height: 1024,
    alt: "Regard après lash lift",
  },
  "lash-lift": {
    src: "/images/avant-apres/lashlift-naturel-elegant.jpg",
    width: 1536,
    height: 1024,
    alt: "Lash lift — rendu naturel",
  },
  "epilation-femme": {
    src: "/images/pedicure.jpg",
    width: 1200,
    height: 1600,
    alt: "Soin beauté des pieds à l'institut",
  },
  "epilation-homme": {
    src: "/images/devanture.jpg",
    width: 1200,
    height: 1600,
    alt: "Devanture Perlina By L à La Grande-Motte",
  },
};
