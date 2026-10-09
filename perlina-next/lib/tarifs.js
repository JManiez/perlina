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
    icon: "etoile",
    nav: "INDIBA®",
    title: "INDIBA® EDNA PRO MAX",
    desc:
      "La technologie anti-âge nouvelle génération. Radiofréquence brevetée 448 kHz pour la régénération cellulaire et la fermeté cutanée.",
    home: {
      title: "INDIBA® Deep Beauty",
      desc: "Radiofréquence 448 kHz — visage et corps, résultats visibles dès les premières séances.",
    },
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
    id: "browlift",
    icon: "regard",
    nav: "Browlift",
    title: "Browlift",
    items: [
      { name: "Simple", price: 55, formName: "Browlift — simple" },
      {
        name: "Avec teinture hybride",
        price: 70,
        formName: "Browlift — avec teinture hybride",
      },
    ],
  },
  {
    id: "lash-lift",
    icon: "regard",
    nav: "Lash lift",
    title: "Lash lift coréen",
    items: [
      { name: "Simple", price: 55, formName: "Lash lift coréen — simple" },
      {
        name: "Avec teinture",
        price: 70,
        formName: "Lash lift coréen — avec teinture",
      },
    ],
  },
  {
    id: "epilation-femme",
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

CATALOG.forEach((cat) => {
  cat.from = fromPrice(cat.items);
});

function formName(cat, item) {
  if (item.formName) return item.formName;
  if (cat.formId === "epi-f") return `Épilation femme — ${item.name.toLowerCase()}`;
  if (cat.formId === "epi-h") return `Épilation homme — ${item.name.toLowerCase()}`;
  if (cat.id === "browlift" || cat.id === "lash-lift") {
    return item.formName || `${cat.title} — ${item.name.toLowerCase()}`;
  }
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

const byId = Object.fromEntries(CATALOG.map((c) => [c.id, c]));

export const HOME_CARDS = [
  {
    id: "soins",
    title: byId.soins.home.title,
    desc: byId.soins.home.desc,
    prix: des(byId.soins.from),
    href: "/soins#soins",
  },
  {
    id: "onglerie",
    title: byId.onglerie.home.title,
    desc: byId.onglerie.home.desc,
    prix: des(byId.onglerie.from),
    href: "/soins#onglerie",
  },
  {
    id: "indiba",
    title: byId.indiba.home.title,
    desc: byId.indiba.home.desc,
    prix: des(byId.indiba.from),
    href: "/soins#indiba",
  },
  {
    id: "massages",
    title: byId.massages.home.title,
    desc: byId.massages.home.desc,
    prix: des(byId.massages.from),
    href: "/soins#massages",
  },
  {
    id: "epilation",
    title: "Épilations femme & homme",
    desc: "Sourcils, visage, corps : une épilation douce et précise pour toutes et tous.",
    prix: des(Math.min(byId["epilation-femme"].from, byId["epilation-homme"].from)),
    href: "/soins#epilation-femme",
  },
];
