import Image from "next/image";
import FadeIn from "../../gsap/FadeIn";
import { SOINS_CATEGORY_ICONS } from "../../../content/soinsCategoryIcons";
import { SOINS_CATEGORY_VISUALS } from "../../../content/soinsCategoryVisuals";
import { CATALOG, eur } from "../../../content/catalog";

type RowProps = {
  n: string;
  d?: string;
  p: string;
};

const Row = ({ n, d, p }: RowProps) => (
  <div className="svc-row">
    <span className="n">{n}</span>
    {d ? <span className="d">{d}</span> : null}
    <span className="dots" />
    <span className="p">{p}</span>
  </div>
);

export default function ServiceCatalog() {
  return (
    <>
      <nav className="svc-nav" aria-label="Catégories">
        {CATALOG.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`}>
            {cat.nav}
          </a>
        ))}
        <a href="#avant-apres">Avant / après</a>
      </nav>

      {CATALOG.map((cat, index) => {
        const visual = SOINS_CATEGORY_VISUALS[cat.id];
        const eagerVisual = index < 2;

        return (
          <div key={cat.id}>
            {index > 0 ? <div className="svc-sep" aria-hidden="true" /> : null}
            <FadeIn className="svc-cat">
              {visual ? (
                <div className="svc-cat-visual">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    width={visual.width}
                    height={visual.height}
                    sizes="(max-width:639px) 100vw, (max-width:1023px) 80vw, 560px"
                    priority={eagerVisual}
                    loading={eagerVisual ? "eager" : "lazy"}
                    className="svc-cat-photo"
                  />
                </div>
              ) : null}
              <h3 id={cat.id}>
                {SOINS_CATEGORY_ICONS[cat.icon]} {cat.title}
              </h3>
              {cat.desc ? <p className="cat-desc">{cat.desc}</p> : null}
              <div className={`svc-list${cat.columns === 2 ? " two" : ""}`}>
                {cat.items.map((item) =>
                  item.includes ? (
                    <div className="svc-offer" key={`${item.name}-${item.price}`}>
                      <Row n={item.name} d={item.duration} p={eur(item.price)} />
                      <ul className="svc-includes">
                        {item.includes.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Row
                      key={`${item.name}-${item.duration || item.detail || item.price}`}
                      n={item.name}
                      d={item.detail || item.duration}
                      p={eur(item.price)}
                    />
                  )
                )}
              </div>
            </FadeIn>
          </div>
        );
      })}
    </>
  );
}
