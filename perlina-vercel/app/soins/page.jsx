import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";
import Reveal from "../../components/Reveal";

export const metadata = { title: "Nos soins & tarifs — Perlina By L · La Grande-Motte" };

const Row = ({ n, d, p }) => (
  <div className="svc-row">
    <span className="n">{n}</span>
    {d && <span className="d">{d}</span>}
    <span className="dots" />
    <span className="p">{p}</span>
  </div>
);

export default function Soins() {
  return (
    <section className="page-head">
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="La carte des soins"
            lead={<>L&apos;expertise beauté, entre technologie et élégance. Uniquement sur rendez-vous au <strong>07 72 56 74 89</strong>.</>}
          >
            Nos <span className="script">soins</span>
          </SectionTitle>
        </Reveal>

        <Reveal className="svc-cat">
          <h3>💅 Onglerie</h3>
          <div className="svc-list">
            <Row n="Manucure simple" p="25 €" />
            <Row n="Manucure + vernis basic" p="35 €" />
            <Row n="Manucure + vernis semi-permanent" p="45 €" />
            <Row n="Manucure + semi-permanent french" p="48 €" />
            <Row n="Dépose" d="offerte si pose Perlina" p="8 €" />
          </div>
        </Reveal>

        <Reveal className="svc-cat">
          <h3>✨ INDIBA® EDNA PRO MAX</h3>
          <p className="cat-desc">
            La technologie anti-âge nouvelle génération. Grâce à la radiofréquence brevetée 448 kHz, INDIBA stimule
            naturellement la régénération cellulaire, améliore la fermeté cutanée, relance la circulation et favorise
            la production de collagène.
          </p>
          <div className="svc-list">
            <Row n="Soin visage — 1 séance" d="30 min" p="100 €" />
            <Row n="Soin visage — cure 6 séances + 1 offerte" p="600 €" />
            <Row n="Soin corps — 1 zone" p="120 €" />
            <Row n="Soin corps — cure 10 séances" p="1 000 €" />
          </div>
        </Reveal>

        <Reveal className="svc-cat">
          <h3>💆‍♀️ Massages — spa aux huiles chaudes</h3>
          <p className="cat-desc">Un moment de détente profonde dans une atmosphère douce et raffinée.</p>
          <div className="svc-list">
            <Row n="Massage détente" d="30 min" p="45 €" />
            <Row n="Massage détente" d="45 min" p="70 €" />
            <Row n="Massage détente" d="1 h" p="85 €" />
          </div>
        </Reveal>

        <Reveal className="svc-cat">
          <h3>🌸 Épilations — Femme</h3>
          <div className="svc-list">
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
        </Reveal>

        <Reveal className="svc-cat">
          <h3>🌿 Épilations — Homme</h3>
          <div className="svc-list">
            <Row n="Sourcils" p="15 €" />
            <Row n="Aisselles" p="17 €" />
            <Row n="Torse" p="25 €" />
            <Row n="Dos + épaules" p="27 €" />
            <Row n="½ jambes" p="28 €" />
            <Row n="Jambes complètes" p="30 €" />
          </div>
        </Reveal>

        <Reveal className="svc-cat">
          <h3>🌟 À venir <span className="badge">Bientôt</span></h3>
          <div className="svc-list">
            <Row n="Browlift" d="simple / avec teinture hybride" p="55 € / 85 €" />
            <Row n="Lash lift coréen" d="simple / avec teinture" p="55 € / 85 €" />
            <Row n="Glow skin coréen" d="45 min / premium 1 h 15" p="89 € / 129 €" />
            <Row n="Lift coréen" d="1 zone / demi-visage / visage complet" p="70 € / 110 € / 140 €" />
          </div>
        </Reveal>

        <div className="center">
          <Link className="btn btn-or" href="/reservation">Réserver ce soin</Link>
        </div>
      </div>
    </section>
  );
}
