"use client";

import Image from "next/image";
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
        const motion = { ease: "power2.out" as const };
        const tl = gsap.timeline({ defaults: motion });
        /* Translation seule : le contenu reste lisible sans JS et pendant l’anim. */
        tl.from(".hero-loc", { y: 12, duration: 0.85, ...motion })
          .from(".hero .kicker", { y: 14, duration: 0.75 }, "-=0.5")
          .from(".hero h1", { y: 20, duration: 0.9 }, "-=0.45")
          .from(".hero .byl, .hero .tagline", { y: 10, duration: 0.7, stagger: 0.08 }, "-=0.55")
          .from(".hero .lead", { y: 12, duration: 0.75 }, "-=0.45")
          .from(".hero .btn-row a", { y: 8, duration: 0.65, stagger: 0.1 }, "-=0.4")
          .from(".hero-orn", { y: 6, duration: 0.7 }, "-=0.45");
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div className="hero hero--immersive" ref={root}>
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/images/salon-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="hero-scrim" />
      </div>
      <div className="hero-body">
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
            <div className="hero-orn orn hero-orn--above-cta" aria-hidden="true">
              <span className="pearl sm" />
              <span className="pearl" />
              <span className="pearl sm" />
            </div>
            <div className="btn-row hero-cta">
              <CtaButton href="/reservation">Prendre rendez-vous</CtaButton>
              <CtaButton href="/soins" variant="ghost">
                La carte des soins
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue scroll-cue--hero" aria-hidden="true">
        Défiler
        <i />
      </div>
    </div>
  );
}
