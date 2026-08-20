export default function SectionTitle({ eyebrow, children, lead }) {
  return (
    <>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{children}</h2>
      <div className="orn">
        <span className="pearl sm" />
        <span className="pearl" />
        <span className="pearl sm" />
      </div>
      {lead && <p className="section-lead">{lead}</p>}
    </>
  );
}
