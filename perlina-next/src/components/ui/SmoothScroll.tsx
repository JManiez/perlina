"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import "lenis/dist/lenis.css";
import { subscribeLenis } from "@/lib/lenis-scroll";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => subscribeLenis(), []);

  return children;
}
