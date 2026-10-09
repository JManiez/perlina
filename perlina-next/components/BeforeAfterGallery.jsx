"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import FadeIn from "./gsap/FadeIn";

export default function BeforeAfterGallery({ groups, id = "avant-apres" }) {
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <section className="ba-section svc-cat" id={id}>
        <FadeIn>
          <header className="ba-head">
            <p className="eyebrow">Résultats</p>
            <h2 className="section-title">
              Avant / <em>après</em>
            </h2>
            <p className="section-lead">
              Montages réalisés par l&apos;institut. Cliquez sur une image pour l&apos;agrandir.
            </p>
          </header>

          {groups.map((group, gi) => (
            <div className="ba-group" key={group.title}>
              <h3 className="ba-group-title">{group.title}</h3>
              <div className={`ba-grid${group.items.length === 2 ? " ba-grid--2" : ""}`}>
                {group.items.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    className="ba-card"
                    onClick={() => setOpen({ ...item, group: group.title })}
                    aria-label={`Agrandir : ${item.alt}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 480px"
                      loading={gi === 0 && i === 0 ? "eager" : "lazy"}
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}

          <p className="aa-note">
            Les résultats peuvent varier selon les personnes. Photos fournies par Perlina By L.
          </p>
        </FadeIn>
      </section>

      {open ? (
        <div className="ba-lightbox" role="dialog" aria-modal="true" aria-label={open.alt} onClick={close}>
          <button type="button" className="ba-lightbox-close" onClick={close} aria-label="Fermer">
            ×
          </button>
          <figure
            className="ba-lightbox-inner"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Image
              src={open.src}
              alt={open.alt}
              width={open.width}
              height={open.height}
              sizes="100vw"
              priority
            />
            <figcaption>{open.group}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
