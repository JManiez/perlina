"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--brun-fonce)" }}>
        Merci ! Votre message a bien été envoyé, nous revenons vers vous rapidement.
      </p>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="f2">
        <div>
          <label htmlFor="c-nom">Nom</label>
          <input id="c-nom" required placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="c-email">Email</label>
          <input id="c-email" type="email" required placeholder="votre@email.fr" />
        </div>
      </div>
      <div>
        <label htmlFor="c-msg">Message</label>
        <textarea id="c-msg" placeholder="Votre message…" />
      </div>
      <button className="btn btn-or" type="submit" style={{ justifySelf: "start" }}>Envoyer</button>
    </form>
  );
}
