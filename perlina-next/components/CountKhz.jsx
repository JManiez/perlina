"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./gsap/register";

export default function CountKhz() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        el.textContent = "448";
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const obj = { n: 0 };
        gsap.to(obj, {
          n: 448,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.n));
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <span className="khz">
      <span ref={ref}>448</span>
      &nbsp;kHz
    </span>
  );
}
