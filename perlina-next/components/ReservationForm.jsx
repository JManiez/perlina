"use client";

import { useMemo, useState } from "react";

const TEL = "+33672567489";

const CATS = [
  {
    id: "onglerie",
    label: "Onglerie",
    services: [
      { name: "Manucure simple", price: "17 €" },
      { name: "Manucure + vernis basique", price: "25 €" },
      { name: "Manucure + vernis semi-permanent", price: "35 €" },
      { name: "Manucure + french", price: "40 €" },
      { name: "Dépose (offerte si pose Perlina)", price: "5 €" },
      { name: "Dépose seule", price: "10 €" },
      { name: "Capsule américaine", price: "50 €" },
      { name: "Soin des pieds — bain, gommage, masque, modelage", price: "30 €" },
    ],
  },
  {
    id: "visage",
    label: "Soins visage",
    services: [
      { name: "Soin du visage — 1 h", price: "80 €" },
      { name: "Soin visage Prestige Perlina — 1 h 30", price: "170 €" },
    ],
  },
  {
    id: "indiba",
    label: "INDIBA®",
    services: [
      { name: "Soin visage Prestige Perlina — 1 h 30 (INDIBA)", price: "170 €" },
      { name: "Soin corps INDIBA — 1 zone", price: "120 €" },
      { name: "Cure corps INDIBA — 10 séances", price: "1 000 €" },
    ],
  },
  {
    id: "massages",
    label: "Massages",
    services: [
      { name: "Massage détente — 30 min", price: "45 €" },
      { name: "Massage détente — 45 min", price: "70 €" },
      { name: "Massage détente — 1 h", price: "85 €" },
    ],
  },
  {
    id: "epi-f",
    label: "Épilation femme",
    hint: "Vous pourrez préciser d'autres zones en remarque.",
    services: [
      { name: "Épilation femme — sourcils", price: "12 €" },
      { name: "Épilation femme — lèvres ou menton", price: "10 €" },
      { name: "Épilation femme — aisselles", price: "15 €" },
      { name: "Épilation femme — maillot simple", price: "15 €" },
      { name: "Épilation femme — maillot échancré", price: "20 €" },
      { name: "Épilation femme — ½ jambes", price: "20 €" },
      { name: "Épilation femme — jambes complètes", price: "30 €" },
      { name: "Épilation femme — ½ bras", price: "17 €" },
      { name: "Épilation femme — bras complet", price: "20 €" },
    ],
  },
  {
    id: "epi-h",
    label: "Épilation homme",
    hint: "Vous pourrez préciser d'autres zones en remarque.",
    services: [
      { name: "Épilation homme — sourcils", price: "15 €" },
      { name: "Épilation homme — aisselles", price: "17 €" },
      { name: "Épilation homme — torse", price: "25 €" },
      { name: "Épilation homme — dos + épaules", price: "27 €" },
      { name: "Épilation homme — ½ jambes", price: "28 €" },
      { name: "Épilation homme — jambes complètes", price: "30 €" },
    ],
  },
  { id: "autre", label: "Autre", services: [{ name: "Autre / je ne sais pas encore", price: "" }] },
];

const MOMENTS = ["Indifférent", "Matin", "Midi", "Après-midi"];

function todayISO() {
  const d = new Date();
  const off = d.getTimezoneOffset();
  const local = new Date(d.getTime() - off * 60000);
  return local.toISOString().slice(0, 10);
}

function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function smsHref(msg) {
  const body = encodeURIComponent(msg);
  const ios = typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  return ios ? `sms:${TEL}&body=${body}` : `sms:${TEL}?body=${body}`;
}

export default function ReservationForm() {
  const minDate = useMemo(todayISO, []);
  const [cat, setCat] = useState("onglerie");
  const [soin, setSoin] = useState("");
  const [moment, setMoment] = useState("Indifférent");
  const [tried, setTried] = useState(false);
  const [data, setData] = useState(null);

  const current = CATS.find((c) => c.id === cat) || CATS[0];

  function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const payload = Object.fromEntries(f.entries());
    payload.soin = soin;
    payload.moment = moment;
    payload.nom = String(payload.nom || "").trim();
    payload.tel = String(payload.tel || "").trim();
    setTried(true);
    if (!payload.soin || !payload.date || !payload.nom || !payload.tel) return;
    setData(payload);
  }

  if (data) {
    const msg =
      `Bonjour, je souhaite prendre rendez-vous chez Perlina By L.\n` +
      `Soin : ${data.soin}\n` +
      `Date souhaitée : ${formatDate(data.date)}${data.moment ? ` (${data.moment})` : ""}\n` +
      `Nom : ${data.nom}\n` +
      `Tél : ${data.tel}\n` +
      (data.remarque ? `Remarque : ${data.remarque}\n` : "");

    return (
      <div className="resa-card resa-confirm">
        <p className="eyebrow">Étape 2 sur 2</p>
        <h3>Votre demande est prête</h3>
        <p className="resa-lead">
          Vérifiez le récapitulatif, puis envoyez-le par SMS. Lorie vous confirme le créneau personnellement.
        </p>
        <dl className="resa-recap">
          <div>
            <dt>Soin</dt>
            <dd>{data.soin}</dd>
          </div>
          <div>
            <dt>Quand</dt>
            <dd>
              {formatDate(data.date)}
              {data.moment && data.moment !== "Indifférent" ? ` · ${data.moment}` : ""}
            </dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>
              {data.nom}
              <br />
              {data.tel}
            </dd>
          </div>
          {data.remarque ? (
            <div>
              <dt>Remarque</dt>
              <dd>« {data.remarque} »</dd>
            </div>
          ) : null}
        </dl>
        <div className="btn-row resa-actions">
          <a className="btn btn-or" href={smsHref(msg)}>
            Envoyer par SMS
          </a>
          <a className="btn btn-ghost" href={`tel:${TEL}`}>
            Appeler l&apos;institut
          </a>
        </div>
        <button type="button" className="resa-back" onClick={() => setData(null)}>
          Modifier ma demande
        </button>
      </div>
    );
  }

  return (
    <form className="resa-form" onSubmit={handleSubmit} noValidate>
      <section className="resa-block">
        <header className="resa-block-h">
          <span>01</span>
          <h3>Le soin</h3>
        </header>
        <div className="resa-cats" role="tablist" aria-label="Univers de soins">
          {CATS.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={cat === c.id}
              className={cat === c.id ? "is-on" : ""}
              onClick={() => {
                setCat(c.id);
                setSoin(c.id === "autre" ? c.services[0].name : "");
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
        {current.hint ? <p className="field-hint">{current.hint}</p> : null}
        {!soin ? <p className="field-hint resa-pick-hint">Sélectionnez le soin souhaité.</p> : null}
        <div className={`resa-choices${current.services.length > 5 ? " compact" : ""}`}>
          {current.services.map((s) => (
            <label key={s.name} className={`resa-choice${soin === s.name ? " is-on" : ""}`}>
              <input
                type="radio"
                name="soin"
                value={s.name}
                checked={soin === s.name}
                onChange={() => setSoin(s.name)}
                required
              />
              <span className="n">{s.name}</span>
              {s.price ? <span className="p">{s.price}</span> : null}
            </label>
          ))}
        </div>
        {tried && !soin ? <p className="field-err">Choisissez un soin pour continuer.</p> : null}
      </section>

      <section className="resa-block">
        <header className="resa-block-h">
          <span>02</span>
          <h3>Le moment</h3>
        </header>
        <div className="f2">
          <div className="field">
            <label htmlFor="r-date">Date souhaitée</label>
            <input id="r-date" name="date" type="date" required min={minDate} defaultValue={minDate} />
            <p className="field-hint">Un souhait : Lorie confirmera le créneau disponible.</p>
          </div>
          <div className="field">
            <span className="label-like" id="r-moment-label">
              Moment préféré
            </span>
            <div className="resa-pills" role="group" aria-labelledby="r-moment-label">
              {MOMENTS.map((m) => (
                <button
                  key={m}
                  type="button"
                  className={moment === m ? "is-on" : ""}
                  onClick={() => setMoment(m)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="resa-block">
        <header className="resa-block-h">
          <span>03</span>
          <h3>Vos coordonnées</h3>
        </header>
        <div className="f2">
          <div className="field">
            <label htmlFor="r-nom">Prénom &amp; nom</label>
            <input id="r-nom" name="nom" required autoComplete="name" placeholder="Camille Dupont" />
          </div>
          <div className="field">
            <label htmlFor="r-tel">Téléphone</label>
            <input
              id="r-tel"
              name="tel"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="06 72 56 74 89"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="r-rem">Remarque <em>(optionnel)</em></label>
          <textarea
            id="r-rem"
            name="remarque"
            rows={3}
            placeholder="Première visite, grossesse, zone à traiter…"
          />
        </div>
      </section>

      <div className="resa-submit">
        <button className="btn btn-or" type="submit">
          Voir le récapitulatif
        </button>
        <p className="field-hint">Aucun paiement en ligne — confirmation par SMS ou téléphone.</p>
      </div>
    </form>
  );
}
