export function eur(n) {
  return `${n.toLocaleString("fr-FR")} €`;
}

export function des(n) {
  return `dès ${eur(n)}`;
}

function fromPrice(items) {
  return Math.min(...items.filter((i) => !i.skipFrom).map((i) => i.price));
}

export const CATALOG = [
  {
    id: "onglerie",
    icon: "nail",
    nav: "Onglerie",
    title: "Onglerie",
    home: {
      title: "Onglerie",
      desc: "Manucure soignée, vernis semi-permanent et french.",
    },
    items: [
      { name: "Manucure simple", price: 17 },
      { name: "Manucure + vernis basique", price: 25 },
      { name: "Manucure + vernis semi-permanent", price: 35 },
      { name: "Manucure + french", price: 40 },
      {
        name: "Dépose",
        detail: "offerte si pose Perlina",
        formName: "Dépose (offerte si pose Perlina)",
        price: 5,
        skipFrom: true,
      },
      { name: "Dépose seule", price: 10, skipFrom: true },
      { name: "Capsule américaine", price: 50 },
    ],
  },
  {
    id: "soins",
    icon: "visage",
    nav: "Soins",
    title: "Soins",
    home: {
      title: "Soins",
      desc: "Visage, pieds et protocole Prestige avec radiofréquence INDIBA®.",
    },
    items: [
      {
        name: "Soin du visage",
        duration: "1 h",
        price: 80,
        includes: ["Double nettoyage", "Gommage", "Modelage", "Masque", "Masque LED"],
      },
      {
        name: "Soin visage Prestige Perlina",
        duration: "1 h 30",
        price: 170,
        includes: [
          "Double nettoyage",
          "Gommage",
          "Soin radiofréquence INDIBA®",
          "Masque",
          "Modelage + masque LED",
        ],
      },
      {
        name: "Soin des pieds",
        price: 30,
        includes: ["Bain", "Gommage", "Masque", "Modelage"],
        formName: "Soin des pieds — bain, gommage, masque, modelage",
      },
    ],
  },
];

CATALOG.forEach((cat) => {
  cat.from = fromPrice(cat.items);
});

function formName(item) {
  if (item.formName) return item.formName;
  if (item.duration) return `${item.name} — ${item.duration}`;
  if (item.detail) return `${item.name} — ${item.detail}`;
  return item.name;
}

export const FORM_CATS = [
  ...CATALOG.map((cat) => ({
    id: cat.id,
    label: cat.nav,
    services: cat.items.map((i) => ({
      name: formName(i),
      price: eur(i.price),
    })),
  })),
  { id: "autre", label: "Autre", services: [{ name: "Autre / je ne sais pas encore", price: "" }] },
];

export const HOME_CARDS = CATALOG.map((cat) => ({
  id: cat.id,
  title: cat.home.title,
  desc: cat.home.desc,
  prix: des(cat.from),
  href: `/soins#${cat.id}`,
}));
