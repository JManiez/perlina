/** Montages avant/après fournis par l'institut (libellés intégrés dans l'image). */

export type GalleryItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  subtitle?: string;
};

export type GalleryGroup = {
  title: string;
  items: GalleryItem[];
};

export const MONTAGE_GROUPS: GalleryGroup[] = [
  {
    title: "INDIBA® Deep Beauty — soin visage",
    items: [
      {
        src: "/images/avant-apres/indiba-visage-apres-1-seance.jpg",
        width: 1402,
        height: 1122,
        alt: "Comparatif avant et après INDIBA Deep Beauty visage, résultat après la 1re séance",
        subtitle: "Après la 1re séance",
      },
      {
        src: "/images/avant-apres/indiba-visage-apres-2-seances.jpg",
        width: 1369,
        height: 1149,
        alt: "Comparatif avant et après INDIBA Deep Beauty visage, résultat après 2 séances",
        subtitle: "Après 2 séances",
      },
      {
        src: "/images/avant-apres/indiba-visage-apres-3e-seance.jpg",
        width: 1254,
        height: 1254,
        alt: "Comparatif avant et après INDIBA Deep Beauty visage, résultat après la 3e séance",
        subtitle: "Après la 3e séance",
      },
    ],
  },
  {
    title: "Lash lift coréen",
    items: [
      {
        src: "/images/avant-apres/lashlift-regard-ouvert.jpg",
        width: 1536,
        height: 1024,
        alt: "Comparatif avant et après lash lift coréen, regard ouvert et cils relevés",
        subtitle: "Regard ouvert",
      },
      {
        src: "/images/avant-apres/lashlift-naturel-elegant.jpg",
        width: 1536,
        height: 1024,
        alt: "Comparatif avant et après lash lift coréen, rendu naturel et élégant",
        subtitle: "Rendu naturel",
      },
    ],
  },
];

export const indibaMontage1 = MONTAGE_GROUPS[0].items[0];
export const indibaMontage3 = MONTAGE_GROUPS[0].items[1];
export const lashMontages = MONTAGE_GROUPS[1].items;
