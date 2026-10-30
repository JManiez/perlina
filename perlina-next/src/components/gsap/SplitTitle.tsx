"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./register";

type SplitTitleProps = {
  children: ReactNode;
  className?: string;
};

/** Titre visible immédiatement ; léger glissement au scroll (pas de masque vide). */
export default function SplitTitle({ children, className = "section-title" }: SplitTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const inner = ref.current?.querySelector(".split-inner");
      if (!inner) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(inner, { yPercent: 0 });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(inner, {
          yPercent: 12,
          duration: 1.35,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <h2 className={className} ref={ref}>
      <span className="split-mask">
        <span className="split-inner">{children}</span>
      </span>
    </h2>
  );
}
