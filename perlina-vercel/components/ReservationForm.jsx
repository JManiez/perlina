"use client";
import { useState } from "react";

const CRENEAUX = [
  { h: "9 h 30" }, { h: "10 h 30" }, { h: "11 h 30", off: true },
  { h: "14 h" }, { h: "15 h" }, { h: "16 h", off: true },
  { h: "17 h" }, { h: "18 h" },
];

const STEPS = ["Soin", "Date & heure", "Coordonnées", "Paiement"];

export default function ReservationForm() {
  const [slot, setSlot] = useState("15 h");
  const [done, setDone] = useState(false);

  return (
    <>
      <div className="steps">
        {STEPS.map((s, i) => (
          <span key={s} style={{ display: "flex" }}>
            {i > 0 && <span className="step-sep" />}
            <span className={`step ${done || i < 2 ? "done" : ""}`}>
              <span className="num">{i + 1}</span>
              <span className="lbl">{s}</span>
            </span>
          </span>
        ))}
      </div>

      {done ? (
        <div className="resa-confirm">
          <span className="script" style={{ fontSize: "2.6rem" }}>Merci !</span>
          <p style={{ marginTop: ".9rem" }}>
            Votre demande de réservation a bien été enregistrée.<br />
            Vous recevrez une confirmation par email et SMS.
          </p>
          <button className="btn btn-ghost" style={{ marginTop: "1.6rem" }} onClick={() => setDone(false)}>
            Nouvelle réservation
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          <div>
            <label htmlFor="r-soin">Choisissez votre soin</label>
            <select id="r-soin" required defaultValue="">
              <option value="" disabled>— Sélectionner un soin —</option>
              <optgroup label="Onglerie">
                <option>Manucure simple · 25 €</option>
                <option>Manucure + vernis basic · 35 €</option>
                <option>Manucure + vernis semi-permanent · 45 €</option>
                <option>Manucure + semi-permanent french · 48 €</option>
              </optgroup>
              <optgroup label="INDIBA® EDNA PRO MAX">
                <option>Soin visage · 30 min · 100 €</option>
                <option>Soin visage · cure 6 séances + 1 offerte · 600 €</option>
                <option>Soin corps · 1 zone · 120 €</option>
                <option>Soin corps · cure 10 séances · 1 000 €</option>
              </optgroup>
              <optgroup label="Massages spa aux huiles chaudes">
                <option>Massage · 30 min · 45 €</option>
                <option>Massage · 45 min · 70 €</option>
                <option>Massage · 1 h · 85 €</option>
              </optgroup>
              <optgroup label="Épilations">
                <option>Épilation femme · dès 10 €</option>
                <option>Épilation homme · dès 15 €</option>
              </optgroup>
            </select>
          </div>

          <div className="f2">
            <div>
              <label htmlFor="r-date">Date souhaitée</label>
              <input id="r-date" type="date" required />
            </div>
            <div>
              <label htmlFor="r-avec">Avec</label>
              <select id="r-avec">
                <option>Sans préférence</option>
                <option>Lorie — fondatrice</option>
              </select>
            </div>
          </div>

          <div>
            <label>Créneaux disponibles</label>
            <div className="creneaux">
              {CRENEAUX.map((c) => (
                <div
                  key={c.h}
                  className={`creneau ${c.off ? "off" : ""} ${slot === c.h ? "sel" : ""}`}
                  onClick={() => !c.off && setSlot(c.h)}
                >
                  {c.h}
                </div>
              ))}
            </div>
          </div>

          <div className="f2">
            <div>
              <label htmlFor="r-nom">Prénom & nom</label>
              <input id="r-nom" required placeholder="Votre nom" />
            </div>
            <div>
              <label htmlFor="r-tel">Téléphone</label>
              <input id="r-tel" type="tel" required placeholder="06 …" />
            </div>
          </div>
          <div>
            <label htmlFor="r-email">Email</label>
            <input id="r-email" type="email" required placeholder="votre@email.fr" />
          </div>
          <div>
            <label htmlFor="r-rem">Remarque (optionnel)</label>
            <textarea id="r-rem" style={{ minHeight: 80 }} placeholder="Première visite, femme enceinte, zone à traiter…" />
          </div>

          <button className="btn btn-or" type="submit" style={{ justifySelf: "center", marginTop: ".5rem" }}>
            Confirmer ma réservation
          </button>
        </form>
      )}
    </>
  );
}
