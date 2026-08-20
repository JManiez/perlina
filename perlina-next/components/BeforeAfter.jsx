import Image from "next/image";

export default function BeforeAfter({
  avant,
  apres,
  title,
  subtitle,
  altAvant,
  altApres,
  sizes,
  featured = false,
  portrait = false,
}) {
  return (
    <figure className={`aa-compare${featured ? " featured" : ""}${portrait ? " portrait" : ""}`}>
      <div className="aa-pair">
        <div className="aa-shot">
          <Image src={avant} alt={altAvant} fill sizes={sizes} style={{ objectFit: "cover" }} />
          <span className="aa-tag">Avant</span>
        </div>
        <div className="aa-shot">
          <Image src={apres} alt={altApres} fill sizes={sizes} style={{ objectFit: "cover" }} />
          <span className="aa-tag">Après</span>
        </div>
      </div>
      <figcaption>
        <span className="t">{title}</span>
        <span className="s">{subtitle}</span>
      </figcaption>
    </figure>
  );
}
