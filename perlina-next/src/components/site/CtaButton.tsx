import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const VARIANT_CLASS = {
  or: "btn-or",
  ghost: "btn-ghost",
} as const;

type Variant = keyof typeof VARIANT_CLASS;

type CtaButtonProps = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
} & Omit<ComponentPropsWithoutRef<"button">, "type"> &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

/**
 * Bouton / lien CTA — conserve les classes `.btn` existantes pour zéro régression visuelle.
 */
export default function CtaButton({
  href,
  variant = "or",
  className = "",
  children,
  type = "button",
  ...props
}: CtaButtonProps) {
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
