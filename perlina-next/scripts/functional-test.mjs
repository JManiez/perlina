import { chromium } from "playwright";

const base = process.env.BASE_URL || "http://localhost:3000";
const errors = [];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

page.on("console", (msg) => {
  if (msg.type() !== "error") return;
  const text = msg.text();
  // Ressources statiques manquantes en preview locale (ex. favicon) — ignorer les 404 réseau.
  if (/Failed to load resource.*404/.test(text)) return;
  errors.push(`console: ${text}`);
});
page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));

await page.goto(base + "/contact", { waitUntil: "networkidle" });
await page.evaluate(() => window.scrollTo(0, 0));

// Menu mobile
await page.getByRole("button", { name: /Ouvrir le menu/i }).click();
await page.waitForTimeout(400);
const menuLink = page.getByRole("link", { name: "Nos soins" }).last();
await menuLink.click();
await page.waitForURL("**/soins**");

// Ancre tarifs (barre sticky desktop / mobile)
await page.goto(base + "/soins", { waitUntil: "networkidle" });
await page.goto(base + "/soins#indiba", { waitUntil: "networkidle" });
await page.locator("#indiba").waitFor({ state: "visible" });

// Lightbox galerie
await page.locator("#avant-apres").scrollIntoViewIfNeeded();
const galleryBtn = page.locator(".ba-card").first();
await galleryBtn.waitFor({ state: "visible" });
await galleryBtn.click({ force: true });
await page.locator(".ba-lightbox").waitFor({ state: "visible", timeout: 10000 });
await page.getByRole("button", { name: "Fermer" }).click();
await page.locator(".ba-lightbox").waitFor({ state: "hidden" });

// Formulaire réservation
await page.goto(base + "/reservation", { waitUntil: "networkidle" });
await page.locator(".resa-choice").first().click();
await page.locator("#r-date").fill("2030-06-15");
await page.locator("#r-nom").fill("Test User");
await page.locator("#r-tel").fill("0672567489");
await page.getByRole("button", { name: /récapitulatif/i }).click();
await page.locator(".resa-confirm").waitFor({ state: "visible" });

await browser.close();

if (errors.length) {
  console.error("FAIL", errors.join("\n"));
  process.exit(1);
}
console.log("OK functional test, no console errors");
