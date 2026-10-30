import Container from "./Container";
import Section from "./Section";

/** Section + conteneur (pattern le plus fréquent sur le site). */
export default function PageSection({ children, className = "", containerClassName = "", style, id }) {
  return (
    <Section className={className} style={style} id={id}>
      <Container className={containerClassName}>{children}</Container>
    </Section>
  );
}
