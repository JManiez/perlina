"use client";

import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/components/gsap/register";

let lenis: Lenis | null = null;
let subscribers = 0;
let ticker: ((time: number) => void) | null = null;
let menuObserver: MutationObserver | null = null;
let anchorHandler: ((e: MouseEvent) => void) | null = null;

function syncMenuWithLenis() {
  if (!lenis) return;
  if (document.documentElement.classList.contains("menu-open")) lenis.stop();
  else lenis.start();
}

function handleAnchorClick(e: MouseEvent) {
  const target = e.target;
  if (!(target instanceof Element)) return;
  const link = target.closest('a[href^="#"]');
  if (!(link instanceof HTMLAnchorElement)) return;
  const href = link.getAttribute("href");
  if (!href || href === "#") return;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  if (lenis) {
    lenis.scrollTo(el, { offset: -72, duration: 1.1 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/** Une seule instance Lenis + ticker GSAP pour toute l'app (y compris Strict Mode). */
export function subscribeLenis(): () => void {
  if (typeof window === "undefined") return () => {};

  subscribers += 1;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced && !lenis) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);
    ticker = (time: number) => {
      lenis?.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    menuObserver = new MutationObserver(syncMenuWithLenis);
    menuObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    anchorHandler = handleAnchorClick;
    document.addEventListener("click", anchorHandler);
  } else if (reduced && !anchorHandler) {
    anchorHandler = handleAnchorClick;
    document.addEventListener("click", anchorHandler);
  }

  return () => {
    subscribers = Math.max(0, subscribers - 1);
    if (subscribers > 0) return;

    if (anchorHandler) {
      document.removeEventListener("click", anchorHandler);
      anchorHandler = null;
    }
    menuObserver?.disconnect();
    menuObserver = null;

    if (ticker) {
      gsap.ticker.remove(ticker);
      ticker = null;
    }
    lenis?.destroy();
    lenis = null;
  };
}
