export default function ResponsivePhoto({ name, alt, desk = "wide", sizes, priority = false }) {
  const deskFile = `/images/crops/${name}-desk-${desk}`;
  const tabFile = `/images/crops/${name}-tab`;
  const phoneFile = `/images/crops/${name}-phone`;

  return (
    <picture>
      <source media="(max-width: 639px)" type="image/webp" srcSet={`${phoneFile}.webp`} />
      <source media="(max-width: 639px)" srcSet={`${phoneFile}.jpg`} />
      <source media="(max-width: 1023px)" type="image/webp" srcSet={`${tabFile}.webp`} />
      <source media="(max-width: 1023px)" srcSet={`${tabFile}.jpg`} />
      <source type="image/webp" srcSet={`${deskFile}.webp`} />
      <img
        src={`${deskFile}.jpg`}
        alt={alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}
