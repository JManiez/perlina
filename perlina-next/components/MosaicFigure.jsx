"use client";

import FadeIn from "./gsap/FadeIn";
import Parallax from "./gsap/Parallax";
import ResponsivePhoto from "./ResponsivePhoto";

export default function MosaicFigure({ name, alt, cap, className, delay = 0, desk = "wide", sizes, priority = false }) {
  return (
    <FadeIn as="figure" className={className} delay={delay}>
      <div className="img-clip">
        <Parallax yPercent={8}>
          <ResponsivePhoto name={name} alt={alt} desk={desk} sizes={sizes} priority={priority} />
        </Parallax>
      </div>
      <figcaption>{cap}</figcaption>
    </FadeIn>
  );
}
