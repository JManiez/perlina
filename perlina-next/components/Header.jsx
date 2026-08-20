"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./gsap/register";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/soins", label: "Nos soins" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const overlay = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useGSAP(
    () => {
      if (!open || !overlay.current) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          overlay.current.querySelectorAll("a"),
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.06, ease: "power3.out" }
        );
      });
    },
    { dependencies: [open], scope: overlay }
  );

  return (
    <>
      <header className={`site-header${solid || open ? " is-solid" : ""}${open ? " is-open" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="logo" onClick={() => setOpen(false)} aria-label="Perlina By L — accueil">
            <span className="script">Perlina</span>
            <small>By L</small>
          </Link>
          <button
            className={`burger${open ? " is-open" : ""}`}
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <i aria-hidden="true">
              <span />
              <span />
              <span />
            </i>
          </button>
          <nav className="nav-desktop" aria-label="Principale">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={pathname === l.href ? "active" : ""}
                    aria-current={pathname === l.href ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/reservation" className="nav-cta">
                  Rendez-vous
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <nav
        ref={overlay}
        id="site-menu"
        className={`menu-overlay${open ? " open" : ""}`}
        aria-label="Menu mobile"
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? "active" : ""}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/reservation" className="nav-cta-lg" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          Prendre rendez-vous
        </Link>
      </nav>
    </>
  );
}
