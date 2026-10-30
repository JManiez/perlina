"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type MontageCardProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  subtitle?: string;
  sizes: string;
  featured?: boolean;
  priority?: boolean;
};

export default function MontageCard({
  src,
  width,
  height,
  alt,
  title,
  subtitle,
  sizes,
  featured = false,
  priority = false,
}: MontageCardProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const aspect = `${width} / ${height}`;

  return (
    <>
      <figure className={`aa-card montage${featured ? " featured" : ""}`}>
        <button type="button" className="montage-btn" onClick={() => setOpen(true)} aria-label={`Agrandir : ${alt}`}>
          <span className="montage-frame" style={{ aspectRatio: aspect }}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              className="montage-img"
            />
          </span>
        </button>
        <figcaption>
          <span className="t">{title}</span>
          {subtitle ? <span className="s">{subtitle}</span> : null}
        </figcaption>
      </figure>

      {open ? (
        <div className="ba-lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={close}>
          <button type="button" className="ba-lightbox-close" onClick={close} aria-label="Fermer">
            ×
          </button>
          <figure
            className="ba-lightbox-inner"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Image src={src} alt={alt} width={width} height={height} sizes="100vw" priority />
            <figcaption>{title}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
