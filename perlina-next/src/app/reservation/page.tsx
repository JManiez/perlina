import SectionTitle from "../../components/SectionTitle";
import ReservationForm from "../../components/ReservationForm";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("/reservation", { title: "Demande de rendez-vous" });

export default function Reservation() {
  return (
    <section className="page-head">
      <div className="container resa-wrap">
        <SectionTitle
          eyebrow="Rendez-vous"
          center
          pearls
          lead="Indiquez vos disponibilités : Lorie vous confirme personnellement votre créneau par SMS ou par téléphone."
        >
          Demander un <em>rendez-vous</em>
        </SectionTitle>
        <div className="resa-card">
          <ReservationForm />
        </div>
        <p className="notice">
          La réservation en ligne en temps réel arrive bientôt. En attendant, chaque demande est lue et confirmée
          par Lorie — c&apos;est aussi ça, le sur-mesure.
        </p>
      </div>
    </section>
  );
}
