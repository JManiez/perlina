import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/gsap/FadeIn";
import Hero from "../components/Hero";
import MosaicFigure from "../components/MosaicFigure";
import CountKhz from "../components/CountKhz";
import BeforeAfter from "../components/BeforeAfter";
import { HOME_CARDS } from "../lib/tarifs";

const GoldDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
    <defs>
      <linearGradient id="goldIc" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8f7130" />
        <stop offset=".5" stopColor="#d4bc7a" />
        <stop offset="1" stopColor="#8f7130" />
      </linearGradient>
    </defs>
  </svg>
);

const icons = {
  soins: (
    <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 5 q-8 2 -9 12 q-.4 5 -3 8 q-1.6 2 .8 2.6 l2.6 .6 q-1 3.4 1.4 4 q2.6 .6 2 3.4 q-.6 3.4 4.2 3.4 q4 0 6 -2" />
      <path d="M22 5 q9 -3 13 5 q3 7 -2 12" opacity=".75" />
      <path d="M15.5 18 q2.4 -1.6 4.4 -.3" />
    </svg>
  ),
  onglerie: (
    <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 34 v-12 q0 -3 3 -3 q3 0 3 3 v6" />
      <path d="M19 22 q0 -3 3 -3 q3 0 3 3 v4" opacity=".85" />
      <path d="M25 24 q0 -3 3 -3 q3 0 3 3 v4 q0 8 -9 8 h-3 q-4 0 -6 -4" opacity=".7" />
      <path d="M16 8 q2 -4 4 0 q1.6 3.4 0 6 q-2 3 -4 0 q-1.6 -2.6 0 -6z" />
    </svg>
  ),
  epilation: (
    <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.5" strokeLinecap="round">
      <path d="M6 21 q14 -13 28 0" />
      <path d="M6 21 q14 10 28 0" opacity=".75" />
      <circle cx="20" cy="20.5" r="4.2" />
      <path d="M12 10 l1.2 -2.6 M20 8 l0 -3 M28 10 l-1.2 -2.6" opacity=".8" />
    </svg>
  ),
  massages: (
    <svg viewBox="0 0 40 40" fill="none" stroke="url(#goldIc)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 8 q4 6 0 12 q-4 -6 0 -12z" />
      <path d="M10 14 q7 2 8 9 q-7 0 -8 -9z" opacity=".8" />
      <path d="M30 14 q-7 2 -8 9 q7 0 8 -9z" opacity=".8" />
      <path d="M7 25 q13 8 26 0 q-4 8 -13 8 q-9 0 -13 -8z" opacity=".7" />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      <GoldDefs />
      <Hero />

      <section>
        <div className="container">
          <SectionTitle eyebrow="L'institut" pearls>
            Un écrin au cœur de <em>La Grande-Motte</em>
          </SectionTitle>
          <div className="mosaic">
            <MosaicFigure
              className="m-a"
              name="salon-1"
              alt="L'espace d'accueil de l'institut"
              cap="Votre espace d'accueil"
              desk="wide"
              sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 58vw"
            />
            <MosaicFigure
              className="m-b"
              name="salon-2"
              alt="L'espace onglerie de l'institut"
              cap="L'espace onglerie"
              delay={0.1}
              desk="wide"
              sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 42vw"
            />
            <MosaicFigure
              className="m-c"
              name="manucure"
              alt="Manucure réalisée à l'institut"
              cap="Réalisation maison"
              delay={0.16}
              desk="short"
              sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 42vw"
            />
            <MosaicFigure
              className="m-d"
              name="pedicure"
              alt="Beauté des pieds réalisée à l'institut"
              cap="Beauté des pieds"
              delay={0.22}
              desk="short"
              sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 58vw"
            />
          </div>
        </div>
      </section>

      <div className="indiba">
        <div className="container indiba-grid">
          <FadeIn>
            <p className="eyebrow">La technologie</p>
            <Image
              className="indiba-logo-img"
              src="/images/indiba-logo.png"
              alt="INDIBA — revitalizing lives"
              width={1796}
              height={565}
              priority={false}
            />
            <CountKhz />
            <p>
              <strong>INDIBA® EDNA PRO MAX</strong> — la radiofréquence monopolaire brevetée, référence de la
              régénération tissulaire. Sans douleur, sans éviction sociale, des résultats visibles dès les premières
              séances.
            </p>
            <ul className="benefits">
              <li>
                <span className="pearl sm" />
                <span>
                  <b>Améliore</b> la microcirculation
                </span>
              </li>
              <li>
                <span className="pearl sm" />
                <span>
                  <b>Draine</b> les excès d&apos;eau des tissus
                </span>
              </li>
              <li>
                <span className="pearl sm" />
                <span>
                  <b>Stimule</b> le collagène et l&apos;élastine
                </span>
              </li>
              <li>
                <span className="pearl sm" />
                <span>
                  <b>Lisse et raffermit</b> la peau — visage, corps et cheveux
                </span>
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="aa-frame">
              <BeforeAfter
                featured
                avant="/images/aa/visage-avant.jpg"
                apres="/images/aa/visage-apres.jpg"
                title="Soin visage radiofréquence"
                subtitle="Après 1 séance"
                altAvant="Visage avant le soin radiofréquence INDIBA"
                altApres="Visage après une séance de radiofréquence INDIBA"
                sizes="(max-width:639px) 50vw, (max-width:1023px) 45vw, 28vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <section style={{ paddingTop: "var(--section)" }}>
        <div className="container">
          <SectionTitle eyebrow="Résultats">
            Des résultats <em>visibles</em>
          </SectionTitle>
          <div className="aa-grid">
            <FadeIn delay={0}>
              <BeforeAfter
                avant="/images/aa/ventre-avant.jpg"
                apres="/images/aa/ventre-apres.jpg"
                title="Remodelage du ventre"
                subtitle="Après 1 séance"
                altAvant="Ventre avant le soin INDIBA"
                altApres="Ventre après une séance INDIBA"
                sizes="(max-width:639px) 50vw, (max-width:1023px) 25vw, 16vw"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <BeforeAfter
                portrait
                avant="/images/aa/silhouette-avant.jpg"
                apres="/images/aa/silhouette-apres.jpg"
                title="Ventre, fesses & dos"
                subtitle="Après 3 séances"
                altAvant="Silhouette avant le traitement INDIBA"
                altApres="Silhouette après trois séances INDIBA"
                sizes="(max-width:639px) 50vw, (max-width:1023px) 25vw, 16vw"
              />
            </FadeIn>
            <FadeIn as="figure" className="aa-card photo" delay={0.2}>
              <Image
                src="/images/crops/manucure-tab.jpg"
                alt="Manucure semi-permanent réalisée à l'institut"
                width={1100}
                height={1375}
                sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 33vw"
              />
              <figcaption>
                <span className="t">Onglerie Perlina</span>
                <span className="s">Semi-permanent</span>
              </figcaption>
            </FadeIn>
          </div>
          <p className="aa-note">
            Photos INDIBA® Deep Beauty France et réalisations de l&apos;institut. Les résultats peuvent varier selon les
            personnes.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle eyebrow="Nos univers" center pearls>
            Quatre univers de <em>soins</em>
          </SectionTitle>
          <div className="cards">
            {HOME_CARDS.map((u, i) => (
              <FadeIn key={u.id} delay={i * 0.08}>
                <Link href={u.href} className="card">
                  <div className="icon-ring">{icons[u.id]}</div>
                  <h3>{u.title}</h3>
                  <p>{u.desc}</p>
                  <div className="sep" />
                  <span className="prix">{u.prix}</span>
                  <span className="lien">Découvrir</span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="center">
            <Link className="btn btn-or" href="/soins">
              Voir la carte des soins
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
