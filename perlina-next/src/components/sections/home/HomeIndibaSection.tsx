import Image from "next/image";
import FadeIn from "../../gsap/FadeIn";
import CountKhz from "../../CountKhz";
import MontageCard from "../../MontageCard";
import Container from "../../ui/Container";
import { indibaMontage1 } from "../../../content/gallery";

export default function HomeIndibaSection() {
  return (
    <div className="indiba">
      <Container className="indiba-grid">
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
            <MontageCard
              featured
              src={indibaMontage1.src}
              width={indibaMontage1.width}
              height={indibaMontage1.height}
              alt={indibaMontage1.alt}
              title="Soin visage radiofréquence"
              subtitle={indibaMontage1.subtitle}
              sizes="(max-width:639px) 100vw, (max-width:1023px) 45vw, 28vw"
            />
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
