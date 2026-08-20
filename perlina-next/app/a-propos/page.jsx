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
            <div className="apropos-copy">
              <h3>Bienvenue chez Perlina By L</h3>
              <p>
                Derrière Perlina By L, il y a avant tout une histoire, un parcours et une passion pour le bien-être et
                la beauté.
              </p>
              <p>
                Pendant plusieurs années, j&apos;ai évolué dans l&apos;univers du spectacle en tant que danseuse au Crazy
                Horse, une expérience qui m&apos;a appris l&apos;exigence, le soin du détail, l&apos;élégance et
                l&apos;importance de se sentir bien dans son corps.
              </p>
              <p>
                J&apos;ai ensuite consacré de nombreuses années au sport et au coaching, toujours avec cette même envie :
                accompagner les femmes, les aider à prendre soin d&apos;elles, à retrouver confiance et à se sentir
                mieux dans leur corps.
              </p>
              <p>
                Au fil du temps, je me suis naturellement tournée vers les soins et le bien-être, un univers qui me
                passionne profondément.
              </p>
              <p>
                Perlina By L est ainsi né d&apos;un véritable projet de cœur, mûri pendant longtemps : créer un lieu
                qui me ressemble, chaleureux et intimiste, où chaque personne puisse prendre du temps pour elle, loin du
                rythme du quotidien.
              </p>
              <p>
                Aujourd&apos;hui, je suis heureuse de vous accueillir dans mon institut à La Grande-Motte, avec une
                approche personnalisée de la beauté : des soins choisis avec exigence, des technologies performantes
                comme INDIBA®, mais aussi beaucoup d&apos;écoute et de bienveillance.
              </p>
              <blockquote>
                Parce qu&apos;au-delà d&apos;un soin, je souhaite que chaque rendez-vous chez Perlina soit une parenthèse
                rien qu&apos;à vous.
              </blockquote>
              <p className="apropos-sign">Lorie — Perlina By L</p>
            </div>
            <div className="valeurs">
              <span className="tag">Sur rendez-vous</span>
              <span className="tag">INDIBA®</span>
              <span className="tag">Écoute</span>
              <span className="tag">Bienveillance</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
