/** Dégradé SVG partagé pour les icônes dorées (cartes univers, etc.). */
export default function GoldIconGradient({ id = "goldIc" }) {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8f7130" />
          <stop offset=".5" stopColor="#d4bc7a" />
          <stop offset="1" stopColor="#8f7130" />
        </linearGradient>
      </defs>
    </svg>
  );
}
