import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";
import Reveal from "../../components/Reveal";
import ContactForm from "../../components/ContactForm";

export const metadata = { title: "Contact — Perlina By L · La Grande-Motte" };

export default function Contact() {
  return (
    <section className="page-head">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="Contact">
            Venez nous <span className="script">rencontrer</span>
          </SectionTitle>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="info-bloc">
              <h3><span className="pearl sm" /> L&apos;institut</h3>
              <div className="info-line"><b>Adresse</b><span>15 rue Frédéric Mistral<br />34280 La Grande-Motte</span></div>
              <div className="info-line"><b>Téléphone</b><span><a href="tel:+33772567489">07 72 56 74 89</a></span></div>
              <div className="info-line"><b>Accueil</b><span>Uniquement sur rendez-vous</span></div>
            </div>
            <div className="info-bloc">
              <h3><span className="pearl sm" /> Prendre rendez-vous</h3>
              <p style={{ fontSize: ".95rem" }}>
                Par téléphone, ou via notre <Link href="/reservation" style={{ color: "var(--or-fonce)" }}>formulaire de réservation</Link>.
                Nous vous confirmons votre créneau au plus vite.
              </p>
              <a className="btn btn-or" style={{ marginTop: "1.2rem" }} href="tel:+33772567489">📞 07 72 56 74 89</a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="map-embed">
              <iframe
                title="Perlina By L sur la carte"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=15+Rue+Fr%C3%A9d%C3%A9ric+Mistral,+34280+La+Grande-Motte&output=embed"
              />
            </div>
            <div className="info-bloc" style={{ marginTop: "var(--gap)" }}>
              <h3><span className="pearl sm" /> Écrivez-nous</h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
