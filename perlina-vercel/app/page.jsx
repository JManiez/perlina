import Image from "next/image";
import Link from "next/link";
import Silhouette from "../components/Silhouette";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";

const GoldDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
    <defs>
      <linearGradient id="goldIc" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#a37f2e" />
        <stop offset=".5" stopColor="#dfc172" />
        <stop offset="1" stopColor="#a37f2e" />
      </linearGradient>
    </defs>
  </svg>
);

const univers = [
  {
    title: "Soins INDIBA® visage & corps",
    desc: "La radiofréquence 448 kHz : fermeté, éclat et silhouette remodelée.",
    prix: "dès 100 €",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 5 q-8 2 -9 12 q-.4 5 -3 8 q-1.6 2 .8 2.6 l2.6 .6 q-1 3.4 1.4 4 q2.6 .6 2 3.4 q-.6 3.4 4.2 3.4 q4 0 6 -2" />
        <path d="M22 5 q9 -3 13 5 q3 7 -2 12" opacity=".75" />
        <path d="M15.5 18 q2.4 -1.6 4.4 -.3" />
      </svg>
    ),
  },
  {
    title: "Onglerie",
    desc: "Manucure soignée, vernis semi-permanent, french : des mains sublimées.",
    prix: "dès 25 €",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 34 v-12 q0 -3 3 -3 q3 0 3 3 v6" />
        <path d="M19 22 q0 -3 3 -3 q3 0 3 3 v4" opacity=".85" />
        <path d="M25 24 q0 -3 3 -3 q3 0 3 3 v4 q0 8 -9 8 h-3 q-4 0 -6 -4" opacity=".7" />
        <path d="M16 8 q2 -4 4 0 q1.6 3.4 0 6 q-2 3 -4 0 q-1.6 -2.6 0 -6z" />
      </svg>
    ),
  },
  {
    title: "Épilations femme & homme",
    desc: "Sourcils, visage, corps : une épilation douce et précise pour toutes et tous.",
    prix: "dès 10 €",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.7" strokeLinecap="round">
        <path d="M6 21 q14 -13 28 0" />
        <path d="M6 21 q14 10 28 0" opacity=".75" />
        <circle cx="20" cy="20.5" r="4.2" />
        <path d="M12 10 l1.2 -2.6 M20 8 l0 -3 M28 10 l-1.2 -2.6" opacity=".8" />
      </svg>
    ),
  },
  {
    title: "Massages spa aux huiles chaudes",
    desc: "Un moment de détente profonde dans une atmosphère douce et raffinée.",
    prix: "dès 45 €",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 8 q4 6 0 12 q-4 -6 0 -12z" />
        <path d="M10 14 q7 2 8 9 q-7 0 -8 -9z" opacity=".8" />
        <path d="M30 14 q-7 2 -8 9 q7 0 8 -9z" opacity=".8" />
        <path d="M7 25 q13 8 26 0 q-4 8 -13 8 q-9 0 -13 -8z" opacity=".7" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <GoldDefs />

      {/* HERO */}
      <div className="hero">
        <div className="container hero-grid">
          <div>
            <span className="script small">Nouveau sur La Grande-Motte</span>
            <h1>
              Votre institut
              <span className="script">Perlina</span>
            </h1>
            <div className="byl">— BY L —</div>
            <p className="lead">
              Un écrin de douceur au bord de la Méditerranée. Venez découvrir la technologie{" "}
              <strong>INDIBA® Deep Beauty</strong> et révéler votre beauté naturelle.
            </p>
            <div className="btn-row">
              <Link className="btn btn-or" href="/reservation">Réserver un soin</Link>
              <Link className="btn btn-ghost" href="/soins">Découvrir nos soins</Link>
            </div>
          </div>
          <Silhouette />
        </div>
      </div>

      {/* L'INSTITUT */}
      <section>
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="L'institut">
              Un écrin au cœur de <span className="script">La Grande-Motte</span>
            </SectionTitle>
          </Reveal>
          <div className="galerie">
            {[
              { src: "/images/devanture.jpg", cap: "15 rue Frédéric Mistral", alt: "Devanture de l'institut Perlina By L" },
              { src: "/images/salon-1.jpg", cap: "Votre espace d'accueil", alt: "Espace d'accueil de l'institut" },
              { src: "/images/salon-2.jpg", cap: "L'espace onglerie", alt: "Espace onglerie de l'institut" },
            ].map((g, i) => (
              <Reveal as="figure" key={g.src} delay={i * 120}>
                <Image src={g.src} alt={g.alt} width={1200} height={1600} sizes="(max-width:860px) 100vw, 33vw" />
                <figcaption>{g.cap}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDIBA */}
      <div className="indiba">
        <div className="container">
          <Reveal>
            <span className="script" style={{ fontSize: "1.9rem" }}>Venez découvrir la technologie</span>
          </Reveal>
          <div className="indiba-grid">
            <Reveal>
              <Image className="indiba-logo-img" src="/images/indiba-logo.jpg" alt="INDIBA Deep Beauty" width={400} height={163} />
              <p>
                <strong>INDIBA® EDNA PRO MAX</strong> — la radiofréquence monopolaire brevetée <strong>448 kHz</strong>,
                référence mondiale de la régénération tissulaire. Sans douleur, sans éviction sociale, des résultats
                visibles dès les premières séances.
              </p>
              <ul className="benefits">
                <li><span className="pearl sm" /><span><b>Améliore</b> la microcirculation</span></li>
                <li><span className="pearl sm" /><span><b>Draine</b> les excès d&apos;eau des tissus</span></li>
                <li><span className="pearl sm" /><span><b>Stimule</b> le collagène et l&apos;élastine</span></li>
                <li><span className="pearl sm" /><span><b>Lisse et raffermit</b> la peau — visage, corps et cheveux</span></li>
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <figure className="aa-card">
                <Image src="/images/aa-visage.jpg" alt="Avant / après soin visage radiofréquence INDIBA" width={1000} height={1237} sizes="(max-width:860px) 100vw, 50vw" />
                <figcaption>
                  <span className="t">Soin visage radiofréquence</span>
                  <span className="s">Après 1 séance</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>

      {/* RÉSULTATS */}
      <section style={{ paddingTop: "var(--section)" }}>
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Résultats">
              Des résultats <span className="script">visibles</span>
            </SectionTitle>
          </Reveal>
          <div className="aa-grid">
            {[
              { src: "/images/aa-ventre.jpg", w: 1000, h: 999, t: "Remodelage du ventre", s: "Après 1 séance", alt: "Avant / après remodelage du ventre INDIBA" },
              { src: "/images/aa-silhouette.jpg", w: 1000, h: 1247, t: "Ventre, fesses & dos", s: "Après 3 séances", alt: "Avant / après traitement ventre, fesses et dos INDIBA" },
              { src: "/images/manucure.jpg", w: 1200, h: 1600, t: "Onglerie — réalisation Perlina", s: "Semi-permanent effet perle", alt: "Manucure semi-permanent réalisée à l'institut" },
            ].map((a, i) => (
              <Reveal as="figure" className="aa-card" key={a.src} delay={i * 120}>
                <Image src={a.src} alt={a.alt} width={a.w} height={a.h} sizes="(max-width:860px) 100vw, 33vw" />
                <figcaption>
                  <span className="t">{a.t}</span>
                  <span className="s">{a.s}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
          <p className="aa-note">
            Photos INDIBA® Deep Beauty France / réalisations de l&apos;institut. Les résultats peuvent varier selon les personnes.
          </p>
        </div>
      </section>

      {/* UNIVERS */}
      <section>
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Nos univers">
              Et révéler votre <span className="script">beauté naturelle</span>
            </SectionTitle>
          </Reveal>
          <div className="cards">
            {univers.map((u, i) => (
              <Reveal key={u.title} delay={i * 100}>
                <Link href="/soins" className="card" style={{ height: "100%" }}>
                  <div className="icon-ring">{u.icon}</div>
                  <h3>{u.title}</h3>
                  <p>{u.desc}</p>
                  <div className="sep" />
                  <span className="prix">{u.prix}</span>
                  <span className="lien">Découvrir</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="center">
            <Link className="btn btn-or" href="/soins">Voir la carte des soins</Link>
          </div>
        </div>
      </section>
    </>
  );
}
