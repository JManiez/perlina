import Link from "next/link";

export default function NotFound() {
  return (
    <div className="nf">
      <p className="eyebrow">Erreur 404</p>
      <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400 }}>Cette page s&apos;est envolée comme une perle…</h1>
      <p>Elle n&apos;existe pas ou a été déplacée.</p>
      <Link className="btn btn-or" href="/" style={{ marginTop: "1.2rem" }}>
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
