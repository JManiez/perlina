"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./gsap/register";
import Silhouette from "./Silhouette";

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-loc", { opacity: 0, y: 16, duration: 0.8 })
          .from(".hero .kicker", { opacity: 0, y: 18, duration: 0.7 }, "-=0.4")
          .from(".hero h1", { opacity: 0, y: 40, filter: "blur(10px)", duration: 1.15 }, "-=0.35")
          .from(".hero .byl, .hero .tagline", { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 }, "-=0.55")
          .from(".hero .lead", { opacity: 0, y: 18, duration: 0.75 }, "-=0.4")
          .from(".hero .btn-row a", { opacity: 0, y: 14, duration: 0.6, stagger: 0.1 }, "-=0.4")
          .from(".silhouette", { opacity: 0, scale: 0.94, duration: 1.2 }, 0.25)
          .from(".scroll-cue", { opacity: 0, duration: 0.8 }, "-=0.2");
      });
    },
    { scope: root }
  );

  return (
    <div className="hero" ref={root}>
      <div className="container hero-grid">
        <div>
          <p className="hero-loc">La Grande-Motte · Institut de beauté</p>
          <p className="kicker">Votre institut</p>
          <h1>Perlina</h1>
          <div className="byl">— BY L —</div>
          <span className="script tagline">Révélez votre beauté naturelle</span>
          <p className="lead">
            Un écrin de douceur au bord de la Méditerranée, où le savoir-faire esthétique rencontre la technologie{" "}
            <strong>INDIBA® Deep Beauty</strong>.
          </p>
          <div className="btn-row">
            <Link className="btn btn-or" href="/reservation">
              Prendre rendez-vous
            </Link>
            <Link className="btn btn-ghost" href="/soins">
              La carte des soins
            </Link>
          </div>
        </div>
        <Silhouette />
      </div>
      <div className="scroll-cue" aria-hidden="true">
        Défiler
        <i />
      </div>
    </div>
  );
}
