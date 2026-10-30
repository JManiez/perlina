import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";
import BeforeAfterGallery from "../../components/BeforeAfterGallery";
import ServiceCatalog from "../../components/sections/soins/ServiceCatalog";
import { MONTAGE_GROUPS } from "../../content/gallery";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from "../../lib/contact";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("/soins", { title: "Nos soins & tarifs" });

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
              <a href={`tel:${CONTACT_PHONE_E164}`} className="link-u" style={{ color: "var(--or-fonce)" }}>
                {CONTACT_PHONE_DISPLAY}
              </a>
              .
            </>
          }
        >
          Nos <em>soins</em>
        </SectionTitle>

        <ServiceCatalog />

        <BeforeAfterGallery groups={MONTAGE_GROUPS} />

        <div className="center">
          <Link className="btn btn-or" href="/reservation">
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}
