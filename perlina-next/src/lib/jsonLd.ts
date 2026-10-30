import { CONTACT_PHONE_E164 } from "./contact";
import { CATALOG, eur, type CatalogCategory, type CatalogItem } from "@/content/catalog";

function offerLabel(cat: CatalogCategory, item: CatalogItem): string {
  if (item.duration) return `${item.name} — ${item.duration}`;
  if (item.detail) return `${item.name} (${item.detail})`;
  return item.name;
}

export function buildLocalBusinessJsonLd(siteUrl: string) {
  const offers = CATALOG.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: offerLabel(cat, item),
        category: cat.title,
      },
      price: item.price,
      priceCurrency: "EUR",
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Perlina By L",
    url: siteUrl,
    telephone: CONTACT_PHONE_E164,
    address: {
      "@type": "PostalAddress",
      streetAddress: "15 rue Frédéric Mistral",
      addressLocality: "La Grande-Motte",
      postalCode: "34280",
      addressCountry: "FR",
    },
    image: `${siteUrl}/images/salon-1.jpg`,
    makesOffer: offers,
    priceRange: eur(Math.min(...CATALOG.flatMap((c) => c.items.map((i) => i.price)))),
  };
}
