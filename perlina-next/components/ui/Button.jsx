import Link from "next/link";

const VARIANT_CLASS = {
  or: "btn-or",
  ghost: "btn-ghost",
};

/**
 * Bouton / lien CTA — conserve les classes `.btn` existantes pour zéro régression visuelle.
 */
export default function Button({
  href,
  variant = "or",
  className = "",
  children,
  type = "button",
  ...props
}) {
  const cls = ["btn", VARIANT_CLASS[variant] || VARIANT_CLASS.or, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} {...props}>
      {children}
    </button>
  );
}
