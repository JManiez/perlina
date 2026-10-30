"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./gsap/register";
import CtaButton from "@/components/site/CtaButton";
export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.from(".hero-loc", { opacity: 0, y: 12, duration: 1.1 })
          .from(".hero .kicker", { opacity: 0, y: 14, duration: 1 }, "-=0.65")
          .from(".hero h1", { opacity: 0, y: 28, filter: "blur(6px)", duration: 1.35 }, "-=0.55")
          .from(".hero .byl, .hero .tagline", { opacity: 0, y: 12, duration: 0.95, stagger: 0.1 }, "-=0.75")
          .from(".hero .lead", { opacity: 0, y: 14, duration: 1 }, "-=0.6")
          .from(".hero .btn-row a", { opacity: 0, y: 10, duration: 0.85, stagger: 0.12 }, "-=0.55")
          .from(".hero-orn", { opacity: 0, y: 8, duration: 1 }, "-=0.5")
          .from(".scroll-cue", { opacity: 0, duration: 1.1 }, "-=0.4");
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div className="hero hero--solo" ref={root}>
      <div className="container hero-grid hero-grid--solo">
        <div className="hero-copy">
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
            <CtaButton href="/reservation">Prendre rendez-vous</CtaButton>
            <CtaButton href="/soins" variant="ghost">
              La carte des soins
            </CtaButton>
          </div>
          <div className="hero-orn orn" aria-hidden="true">
            <span className="pearl sm" />
            <span className="pearl" />
            <span className="pearl sm" />
          </div>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        Défiler
        <i />
      </div>
    </div>
  );
}
