"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./register";

export default function Parallax({ children, className = "", yPercent = 12 }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
        gsap.fromTo(
          el,
          { yPercent: -yPercent / 2 },
          {
            yPercent: yPercent / 2,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          }
        );
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
