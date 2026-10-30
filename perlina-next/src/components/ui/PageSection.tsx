import type { CSSProperties, ReactNode } from "react";
import Container from "./Container";
import Section from "./Section";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
  id?: string;
};

/** Section + conteneur (pattern le plus fréquent sur le site). */
export default function PageSection({
  children,
  className = "",
  containerClassName = "",
  style,
  id,
}: PageSectionProps) {
  return (
    <Section className={className} style={style} id={id}>
      <Container className={containerClassName}>{children}</Container>
    </Section>
  );
}
