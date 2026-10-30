import SectionTitle from "../../SectionTitle";
import MosaicFigure from "../../MosaicFigure";
import PageSection from "../../ui/PageSection";

export default function HomeInstitutSection() {
  return (
    <PageSection>
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
    </PageSection>
  );
}
