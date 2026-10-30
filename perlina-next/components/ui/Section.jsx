/** Bloc `<section>` avec padding vertical standard. */
export default function Section({ children, className = "", style, id }) {
  return (
    <section className={className || undefined} style={style} id={id}>
      {children}
    </section>
  );
}
