"use client";

import FadeIn from "./gsap/FadeIn";
import Parallax from "./gsap/Parallax";
import ResponsivePhoto from "./ResponsivePhoto";

type MosaicFigureProps = {
  name: string;
  alt: string;
  cap: string;
  className?: string;
  delay?: number;
  desk?: string;
  sizes?: string;
  priority?: boolean;
};

export default function MosaicFigure({
  name,
  alt,
  cap,
  className,
  delay = 0,
  desk = "wide",
  sizes,
  priority = false,
}: MosaicFigureProps) {
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
