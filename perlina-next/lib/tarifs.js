export function eur(n) {
  return `${n.toLocaleString("fr-FR")} €`;
}

export function des(n) {
  return `dès ${eur(n)}`;
}

function fromPrice(items) {
  return Math.min(...items.filter((i) => !i.skipFrom).map((i) => i.price));
}

/** Catalogue complet (y compris sections volontairement masquées sur le site). */
export const ALL_CATALOG = [
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
      { name: "Manucure simple", price: 20 },
      { name: "Manucure simple + vernis basic", price: 25 },
      { name: "Manucure simple + vernis semi-permanent", price: 35 },
      {
        name: "Manucure simple + vernis semi-permanent french",
        price: 40,
      },
      {
        name: "Dépose",
        detail: "offerte si pose Perlina",
        formName: "Dépose (offerte si pose Perlina)",
        price: 10,
        skipFrom: true,
      },
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
  {
    id: "indiba",
    hidden: true,
    icon: "etoile",
    nav: "INDIBA®",
    title: "INDIBA® EDNA PRO MAX",
    desc:
      "La technologie anti-âge nouvelle génération. Radiofréquence brevetée 448 kHz pour la régénération cellulaire et la fermeté cutanée.",
    items: [
      { name: "Soin visage", duration: "30 min", price: 100 },
      {
        name: "Cure visage",
        detail: "6 séances + 1 offerte",
        price: 600,
        formName: "Cure visage INDIBA — 6 séances + 1 offerte",
      },
      {
        name: "Soin corps — 1 zone",
        price: 120,
        formName: "Soin corps INDIBA — 1 zone",
      },
      {
        name: "Cure corps — 10 séances",
        price: 1000,
        formName: "Cure corps INDIBA — 10 séances",
      },
    ],
  },
  {
    id: "massages",
    hidden: true,
    icon: "lotus",
    nav: "Massages",
    title: "Massages — spa aux huiles chaudes",
    desc: "Un moment de détente profonde dans une atmosphère douce et raffinée.",
    home: {
      title: "Massages spa aux huiles chaudes",
      desc: "Un moment de détente profonde dans une atmosphère douce et raffinée.",
    },
    items: [
      { name: "Massage détente", duration: "30 min", price: 45 },
      { name: "Massage détente", duration: "45 min", price: 70 },
      { name: "Massage détente", duration: "1 h", price: 85 },
    ],
  },
  {
    id: "avenir",
    hidden: true,
    icon: "etoile",
    nav: "À venir",
    title: "À venir",
    items: [
      { name: "Browlift — simple", price: 55 },
      { name: "Browlift — avec teinture hybride", price: 70 },
      { name: "Lash lift coréen — simple", price: 55 },
      { name: "Lash lift coréen — avec teinture", price: 70 },
    ],
  },
  {
    id: "epilation-femme",
    hidden: true,
    icon: "regard",
    nav: "Épilations femme",
    title: "Épilations — Femme",
    formId: "epi-f",
    formLabel: "Épilation femme",
    formHint: "Vous pourrez préciser d'autres zones en remarque.",
    columns: 2,
    items: [
      { name: "Sourcils", price: 12 },
      { name: "Lèvres ou menton", price: 10 },
      { name: "Aisselles", price: 15 },
      { name: "Maillot simple", price: 15 },
      { name: "Maillot échancré", price: 20 },
      { name: "½ jambes", price: 20 },
      { name: "Jambes complètes", price: 30 },
      { name: "½ bras", price: 17 },
      { name: "Bras complet", price: 20 },
    ],
  },
  {
    id: "epilation-homme",
    hidden: true,
    icon: "feuille",
    nav: "Épilations homme",
    title: "Épilations — Homme",
    formId: "epi-h",
    formLabel: "Épilation homme",
    formHint: "Vous pourrez préciser d'autres zones en remarque.",
    columns: 2,
    items: [
      { name: "Sourcils", price: 15 },
      { name: "Aisselles", price: 17 },
      { name: "Torse", price: 25 },
      { name: "Dos + épaules", price: 27 },
      { name: "½ jambes", price: 28 },
      { name: "Jambes complètes", price: 30 },
    ],
  },
];

/** Sections affichées sur /soins et l'accueil. */
export const CATALOG = ALL_CATALOG.filter((cat) => !cat.hidden);

CATALOG.forEach((cat) => {
  cat.from = fromPrice(cat.items);
});

ALL_CATALOG.forEach((cat) => {
  if (!cat.from) cat.from = fromPrice(cat.items);
});

function formName(cat, item) {
  if (item.formName) return item.formName;
  if (cat.formId === "epi-f") return `Épilation femme — ${item.name.toLowerCase()}`;
  if (cat.formId === "epi-h") return `Épilation homme — ${item.name.toLowerCase()}`;
  if (item.duration) return `${item.name} — ${item.duration}`;
  if (item.detail) return `${item.name} — ${item.detail}`;
  return item.name;
}

export const FORM_CATS = [
  ...CATALOG.map((cat) => ({
    id: cat.formId || cat.id,
    label: cat.formLabel || cat.nav,
    hint: cat.formHint,
    services: cat.items.map((i) => ({
      name: formName(cat, i),
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
