import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";
import FadeIn from "../../components/gsap/FadeIn";

export const metadata = { title: "Nos soins & tarifs" };

const Row = ({ n, d, p }) => (
  <div className="svc-row">
    <span className="n">{n}</span>
    {d && <span className="d">{d}</span>}
    <span className="dots" />
    <span className="p">{p}</span>
  </div>
);

const ic = {
  nail: (
    <svg className="cat-ic" viewBox="0 0 40 40" fill="none" stroke="#8f7130" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 34 v-12 q0 -3 3 -3 q3 0 3 3 v6" />
      <path d="M19 22 q0 -3 3 -3 q3 0 3 3 v4" opacity=".85" />
      <path d="M25 24 q0 -3 3 -3 q3 0 3 3 v4 q0 8 -9 8 h-3 q-4 0 -6 -4" opacity=".7" />
      <path d="M16 8 q2 -4 4 0 q1.6 3.4 0 6 q-2 3 -4 0 q-1.6 -2.6 0 -6z" />
    </svg>
  ),
  visage: (
    <svg className="cat-ic" viewBox="0 0 40 40" fill="none" stroke="#8f7130" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 5 q-8 2 -9 12 q-.4 5 -3 8 q-1.6 2 .8 2.6 l2.6 .6 q-1 3.4 1.4 4 q2.6 .6 2 3.4 q-.6 3.4 4.2 3.4 q4 0 6 -2" />
      <path d="M22 5 q9 -3 13 5 q3 7 -2 12" opacity=".75" />
      <path d="M15.5 18 q2.4 -1.6 4.4 -.3" />
    </svg>
  ),
  lotus: (
    <svg className="cat-ic" viewBox="0 0 40 40" fill="none" stroke="#8f7130" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 8 q4 6 0 12 q-4 -6 0 -12z" />
      <path d="M10 14 q7 2 8 9 q-7 0 -8 -9z" opacity=".8" />
      <path d="M30 14 q-7 2 -8 9 q7 0 8 -9z" opacity=".8" />
      <path d="M7 25 q13 8 26 0 q-4 8 -13 8 q-9 0 -13 -8z" opacity=".7" />
    </svg>
  ),
  regard: (
    <svg className="cat-ic" viewBox="0 0 40 40" fill="none" stroke="#8f7130" strokeWidth="1.5" strokeLinecap="round">
      <path d="M6 21 q14 -13 28 0" />
      <path d="M6 21 q14 10 28 0" opacity=".75" />
      <circle cx="20" cy="20.5" r="4.2" />
      <path d="M12 10 l1.2 -2.6 M20 8 l0 -3 M28 10 l-1.2 -2.6" opacity=".8" />
    </svg>
  ),
  feuille: (
    <svg className="cat-ic" viewBox="0 0 40 40" fill="none" stroke="#8f7130" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 34 q-1 -14 4 -22 q4 -7 10 -8 q1 8 -3 15 q-4 8 -11 15z" />
      <path d="M20 34 q-8 -2 -11 -9 q-2 -5 0 -9 q6 2 9 8" opacity=".7" />
    </svg>
  ),
  etoile: (
    <svg className="cat-ic" viewBox="0 0 40 40" fill="none" stroke="#8f7130" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 q1.5 9 4 11.5 q2.5 2.5 10 2.5 q-7.5 1.5 -10 4 q-2.5 2.5 -4 10 q-1.5 -7.5 -4 -10 q-2.5 -2.5 -10 -4 q7.5 0 10 -2.5 q2.5 -2.5 4 -11.5z" />
      <circle cx="31" cy="8" r="1.4" opacity=".7" />
    </svg>
  ),
};

export default function Soins() {
  return (
    <section className="page-head">
      <div className="container">
        <SectionTitle
          eyebrow="La carte des soins"
          center
          pearls
          lead={
            <>
              L&apos;expertise beauté, entre technologie et élégance. Uniquement sur rendez-vous au{" "}
              <a href="tel:+33672567489" className="link-u" style={{ color: "var(--or-fonce)" }}>
                06 72 56 74 89
              </a>
              .
            </>
          }
        >
          Nos <em>soins</em>
        </SectionTitle>

        <nav className="svc-nav" aria-label="Catégories">
          <a href="#onglerie">Onglerie</a>
          <a href="#visage">Soins visage</a>
          <a href="#indiba">INDIBA®</a>
          <a href="#massages">Massages</a>
          <a href="#epilation-femme">Épilations femme</a>
          <a href="#epilation-homme">Épilations homme</a>
        </nav>

        <FadeIn className="svc-cat" as="div">
          <h3 id="onglerie">
            {ic.nail} Onglerie &amp; pédicure
          </h3>
          <div className="svc-list">
            <Row n="Manucure simple" p="17 €" />
            <Row n="Manucure + vernis basique" p="25 €" />
            <Row n="Manucure + vernis semi-permanent" p="35 €" />
            <Row n="Manucure + french" p="40 €" />
            <Row n="Dépose" d="offerte si pose Perlina" p="5 €" />
            <Row n="Dépose seule" p="10 €" />
            <Row n="Capsule américaine" p="50 €" />
            <Row n="Soin des pieds" d="bain, gommage, masque, modelage" p="30 €" />
          </div>
        </FadeIn>

        <FadeIn className="svc-cat">
          <h3 id="visage">
            {ic.visage} Soins visage
          </h3>
          <div className="svc-list">
            <div className="svc-offer">
              <Row n="Soin du visage" d="1 h" p="80 €" />
              <ul className="svc-includes">
                <li>Double nettoyage</li>
                <li>Gommage</li>
                <li>Modelage</li>
                <li>Masque</li>
                <li>Masque LED</li>
              </ul>
            </div>
            <div className="svc-offer">
              <Row n="Soin visage Prestige Perlina" d="1 h 30" p="170 €" />
              <ul className="svc-includes">
                <li>Double nettoyage</li>
                <li>Gommage</li>
                <li>Soin radiofréquence INDIBA®</li>
                <li>Masque</li>
                <li>Modelage + masque LED</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="svc-cat">
          <h3 id="indiba">
            {ic.etoile} INDIBA® EDNA PRO MAX
          </h3>
          <p className="cat-desc">
            La technologie anti-âge nouvelle génération. Grâce à la radiofréquence brevetée 448 kHz, INDIBA stimule
            naturellement la régénération cellulaire, améliore la fermeté cutanée, relance la circulation et favorise
            la production de collagène. Le soin visage Prestige Perlina l&apos;intègre dans un protocole complet.
          </p>
          <div className="svc-list">
            <Row n="Soin visage Prestige Perlina" d="1 h 30" p="170 €" />
            <Row n="Soin corps — 1 zone" p="120 €" />
            <Row n="Soin corps — cure 10 séances" p="1 000 €" />
          </div>
        </FadeIn>

        <FadeIn className="svc-cat">
          <h3 id="massages">
            {ic.lotus} Massages — spa aux huiles chaudes
          </h3>
          <p className="cat-desc">Un moment de détente profonde dans une atmosphère douce et raffinée.</p>
          <div className="svc-list">
            <Row n="Massage détente" d="30 min" p="45 €" />
            <Row n="Massage détente" d="45 min" p="70 €" />
            <Row n="Massage détente" d="1 h" p="85 €" />
          </div>
        </FadeIn>

        <FadeIn className="svc-cat">
          <h3 id="epilation-femme">
            {ic.regard} Épilations — Femme
          </h3>
          <div className="svc-list two">
            <Row n="Sourcils" p="12 €" />
            <Row n="Lèvres ou menton" p="10 €" />
            <Row n="Aisselles" p="15 €" />
            <Row n="Maillot simple" p="15 €" />
            <Row n="Maillot échancré" p="20 €" />
            <Row n="½ jambes" p="20 €" />
            <Row n="Jambes complètes" p="30 €" />
            <Row n="½ bras" p="17 €" />
            <Row n="Bras complet" p="20 €" />
          </div>
        </FadeIn>

        <FadeIn className="svc-cat">
          <h3 id="epilation-homme">
            {ic.feuille} Épilations — Homme
          </h3>
          <div className="svc-list two">
            <Row n="Sourcils" p="15 €" />
            <Row n="Aisselles" p="17 €" />
            <Row n="Torse" p="25 €" />
            <Row n="Dos + épaules" p="27 €" />
            <Row n="½ jambes" p="28 €" />
            <Row n="Jambes complètes" p="30 €" />
          </div>
        </FadeIn>

        <div className="center">
          <Link className="btn btn-or" href="/reservation">
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}
