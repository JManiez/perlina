"use client";

import type { ReactNode, RefObject } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./register";

type FadeInAs = "div" | "figure";

type FadeInProps = {
  children: ReactNode;
  as?: FadeInAs;
  className?: string;
  delay?: number;
  y?: number;
};

/** Entrée au scroll — sans masquer le contenu (pas d’opacity 0). */
export default function FadeIn({
  children,
  as = "div",
  className = "",
  delay = 0,
  y = 28,
}: FadeInProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const ref = as === "figure" ? figureRef : divRef;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { clearProps: "transform,filter" });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(el, {
          y,
          filter: "blur(6px)",
          duration: 1.45,
          delay,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          clearProps: "filter",
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  if (as === "figure") {
    return (
      <figure ref={figureRef as RefObject<HTMLElement>} className={className}>
        {children}
      </figure>
    );
  }

  return (
    <div ref={divRef} className={className}>
      {children}
    </div>
  );
}
