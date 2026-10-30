import type { ReactNode } from "react";
import SplitTitle from "./gsap/SplitTitle";

type SectionTitleProps = {
  eyebrow?: string;
  children: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  pearls?: boolean;
};

export default function SectionTitle({
  eyebrow,
  children,
  lead,
  center = false,
  pearls = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "t-center" : ""}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <SplitTitle>{children}</SplitTitle>
      {pearls ? (
        <div className={`orn ${center ? "center" : ""}`}>
          <span className="pearl sm" />
          <span className="pearl" />
          <span className="pearl sm" />
        </div>
      ) : null}
      {center && !pearls ? <div className="page-rule" /> : null}
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}
