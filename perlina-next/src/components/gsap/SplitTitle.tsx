"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./register";

type SplitTitleProps = {
  children: ReactNode;
  className?: string;
};

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
        gsap.fromTo(
          inner,
          { yPercent: 115 },
          {
            yPercent: 0,
            duration: 1.25,
            ease: "power4.out",
            scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
          }
        );
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
