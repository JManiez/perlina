import SectionTitle from "../../SectionTitle";
import FadeIn from "../../gsap/FadeIn";
import BeforeAfter from "../../BeforeAfter";
import MontageCard from "../../MontageCard";
import PageSection from "../../ui/PageSection";
import { indibaMontage3, lashMontages } from "../../../content/gallery";

export default function HomeResultsSection() {
  return (
    <PageSection style={{ paddingTop: "var(--section)" }}>
      <SectionTitle eyebrow="Résultats">
        Des résultats <em>visibles</em>
      </SectionTitle>
      <div className="aa-grid">
        <FadeIn delay={0}>
          <BeforeAfter
            priority
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
          <MontageCard
            priority
            src={indibaMontage3.src}
            width={indibaMontage3.width}
            height={indibaMontage3.height}
            alt={indibaMontage3.alt}
            title="Soin visage radiofréquence"
            subtitle={indibaMontage3.subtitle}
            sizes="(max-width:639px) 50vw, (max-width:1023px) 25vw, 16vw"
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <MontageCard
            priority
            src={lashMontages[0].src}
            width={lashMontages[0].width}
            height={lashMontages[0].height}
            alt={lashMontages[0].alt}
            title="Lash lift coréen"
            subtitle={lashMontages[0].subtitle}
            sizes="(max-width:639px) 50vw, (max-width:1023px) 25vw, 16vw"
          />
        </FadeIn>
      </div>
      <p className="aa-note">
        Photos INDIBA® Deep Beauty France et réalisations de l&apos;institut. Les résultats peuvent varier selon les
        personnes.
      </p>
    </PageSection>
  );
}
