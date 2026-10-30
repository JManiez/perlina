import Link from "next/link";
import SectionTitle from "../../SectionTitle";
import FadeIn from "../../gsap/FadeIn";
import Button from "../../ui/Button";
import PageSection from "../../ui/PageSection";
import { HOME_UNIVERS_ICONS } from "../../../content/homeUniversIcons";
import { HOME_CARDS } from "../../../content/catalog";

export default function HomeUniversSection() {
  return (
    <PageSection>
      <SectionTitle eyebrow="Nos univers" center pearls>
        Une carte complète de <em>soins</em>
      </SectionTitle>
      <div className="cards">
        {HOME_CARDS.map((u, i) => (
          <FadeIn key={u.id} delay={i * 0.08}>
            <Link href={u.href} className="card">
              <div className="icon-ring">{HOME_UNIVERS_ICONS[u.id]}</div>
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
        <Button href="/soins">Voir la carte des soins</Button>
      </div>
    </PageSection>
  );
}
