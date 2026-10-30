import { describe, expect, it } from "vitest";
import { CATALOG, eur, FORM_CATS } from "@/content/catalog";

describe("catalog", () => {
  it("aligne la manucure simple sur la brochure (20 €)", () => {
    const onglerie = CATALOG.find((c) => c.id === "onglerie");
    const manucure = onglerie?.items.find((i) => i.name === "Manucure simple");
    expect(manucure?.price).toBe(20);
    expect(eur(manucure!.price)).toBe("20 €");
  });

  it("expose l’onglerie dans le formulaire de réservation", () => {
    const onglerie = FORM_CATS.find((c) => c.id === "onglerie");
    expect(onglerie?.services.some((s) => s.name === "Manucure simple" && s.price === "20 €")).toBe(true);
  });
});
