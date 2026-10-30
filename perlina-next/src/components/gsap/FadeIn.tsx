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

export default function FadeIn({
  children,
  as = "div",
  className = "",
  delay = 0,
  y = 36,
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
        gsap.set(el, { clearProps: "all", opacity: 1 });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          { opacity: 0, y, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
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
