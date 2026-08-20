import SectionTitle from "../../components/SectionTitle";
import FadeIn from "../../components/gsap/FadeIn";

export const metadata = { title: "À propos" };

export default function APropos() {
  return (
    <section className="page-head">
      <div className="container">
        <SectionTitle eyebrow="À propos" center pearls>
          L&apos;histoire de <em>Perlina</em>
        </SectionTitle>
        <div className="apropos-grid">
          <FadeIn className="portrait-img">
            <picture>
              <source media="(max-width: 639px)" type="image/webp" srcSet="/images/crops/salon-1-phone.webp" />
              <source media="(max-width: 639px)" srcSet="/images/crops/salon-1-phone.jpg" />
              <source media="(max-width: 1023px)" type="image/webp" srcSet="/images/crops/salon-1-tab.webp" />
              <source media="(max-width: 1023px)" srcSet="/images/crops/salon-1-tab.jpg" />
              <img
                src="/images/salon-1.jpg"
                alt="L'accueil de Perlina By L à La Grande-Motte"
                width={1200}
                height={1600}
                sizes="(max-width:639px) 100vw, (max-width:1023px) 42vw, 45vw"
                decoding="async"
              />
            </picture>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h3 style={{ fontSize: "clamp(1.7rem,3vw,2.1rem)", fontWeight: 400 }}>
              Un écrin de beauté à La Grande-Motte
            </h3>
            <p style={{ marginTop: "1.2rem" }}>
              Comme la perle naît de la nacre, <strong>Perlina By L</strong> est né d&apos;une passion : celle de
              révéler la beauté singulière de chacune. Installé au <strong>15 rue Frédéric Mistral</strong>, au cœur de
              La Grande-Motte, l&apos;institut vous accueille sur rendez-vous dans une atmosphère douce et lumineuse,
              entre ivoire, nacre et reflets dorés.
            </p>
            <blockquote>« L&apos;expertise beauté, entre technologie et élégance. » — Lorie, fondatrice</blockquote>
            <p>
              Fondé par <strong>Lorie</strong>, le « L » de Perlina, l&apos;institut allie savoir-faire esthétique et
              technologies de pointe : la radiofréquence <strong>INDIBA® EDNA PRO MAX</strong>, des protocoles
              sur-mesure et des soins d&apos;exception, dans le plus grand respect de votre peau.
            </p>
            <div className="valeurs">
              <span className="tag">Sur rendez-vous</span>
              <span className="tag">INDIBA® EDNA PRO MAX</span>
              <span className="tag">Sur-mesure</span>
              <span className="tag">Résultats</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
