"use client";

import { useEffect, useRef } from "react";
import { CATALOG } from "../../../content/catalog";

export default function SvcCategoryNav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    nav.scrollLeft = 0;
    const id = requestAnimationFrame(() => {
      nav.scrollLeft = 0;
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <nav ref={navRef} className="svc-nav" aria-label="Catégories">
      {CATALOG.map((cat) => (
        <a key={cat.id} href={`#${cat.id}`}>
          {cat.nav}
        </a>
      ))}
      <a href="#avant-apres">Avant / après</a>
    </nav>
  );
}
