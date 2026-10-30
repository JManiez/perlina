import type { Metadata } from "next";

/** URL canonique du site (www — apex redirige en 308). */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://www.perlinabyl.fr").replace(/\/$/, "");

export function canonicalUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

/** Metadata de page avec lien canonique absolu. */
export function pageMetadata(path: string, fields: Metadata = {}): Metadata {
  return {
    ...fields,
    alternates: {
      ...fields.alternates,
      canonical: canonicalUrl(path),
    },
  };
}
