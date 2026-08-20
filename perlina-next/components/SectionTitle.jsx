import SplitTitle from "./gsap/SplitTitle";

export default function SectionTitle({ eyebrow, children, lead, center = false, pearls = false }) {
  return (
    <div className={center ? "t-center" : ""}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <SplitTitle>{children}</SplitTitle>
      {pearls && (
        <div className={`orn ${center ? "center" : ""}`}>
          <span className="pearl sm" />
          <span className="pearl" />
          <span className="pearl sm" />
        </div>
      )}
      {center && !pearls && <div className="page-rule" />}
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
