/** Montages avant/après fournis par l'institut (libellés intégrés dans l'image). */
export const MONTAGE_GROUPS = [
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
