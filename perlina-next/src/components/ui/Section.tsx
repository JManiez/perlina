import type { CSSProperties, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

/** Bloc `<section>` avec padding vertical standard. */
export default function Section({ children, className = "", style, id }: SectionProps) {
  return (
    <section className={className || undefined} style={style} id={id}>
      {children}
    </section>
  );
}
