import SectionTitle from "../../components/SectionTitle";
import Reveal from "../../components/Reveal";
import ReservationForm from "../../components/ReservationForm";

export const metadata = { title: "Réservation — Perlina By L · La Grande-Motte" };

export default function Reservation() {
  return (
    <section className="page-head">
      <div className="container resa-wrap">
        <Reveal>
          <SectionTitle eyebrow="Réservation">
            Réservez votre <span className="script">moment</span>
          </SectionTitle>
        </Reveal>
        <ReservationForm />
        <div className="notice">
          <span style={{ fontSize: "1.3rem" }}>💳</span>
          <div>
            <strong>À venir :</strong> réservation en temps réel connectée à l&apos;agenda de l&apos;institut, avec
            paiement sécurisé en ligne (acompte ou totalité) et rappels automatiques par SMS. Cette page est prête à
            être branchée sur un système type Stripe + calendrier.
          </div>
        </div>
      </div>
    </section>
  );
}
