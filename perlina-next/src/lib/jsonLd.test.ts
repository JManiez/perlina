import { describe, expect, it } from "vitest";
import { CONTACT_PHONE_E164 } from "@/lib/contact";
import { buildLocalBusinessJsonLd } from "@/lib/jsonLd";

describe("JSON-LD BeautySalon", () => {
  it("utilise le téléphone officiel et l’URL www", () => {
    const data = buildLocalBusinessJsonLd("https://www.perlinabyl.fr");
    expect(data.telephone).toBe(CONTACT_PHONE_E164);
    expect(data.url).toBe("https://www.perlinabyl.fr");
    expect(data["@type"]).toBe("BeautySalon");
    expect(data).not.toHaveProperty("openingHours");
  });
});
