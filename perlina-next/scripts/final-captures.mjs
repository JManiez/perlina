import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

const outDir = "/opt/cursor/artifacts/final";
const base = process.env.BASE_URL || "http://localhost:3000";

mkdirSync(outDir, { recursive: true });

async function waitReady(page, ms = 2200) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(ms);
}

async function shot(page, name) {
  await page.screenshot({ path: join(outDir, name), fullPage: false });
  console.log("saved", name);
}

const browser = await chromium.launch();

for (const [label, width, height] of [
  ["1440", 1440, 900],
  ["390", 390, 844],
]) {
  const page = await browser.newPage({ viewport: { width, height } });

  await page.goto(base + "/", { timeout: 60000 });
  await waitReady(page, 2500);
  await shot(page, `home-hero-${label}.png`);

  await page.locator(".aa-grid").scrollIntoViewIfNeeded();
  await waitReady(page, 2000);
  await shot(page, `home-gallery-${label}.png`);

  await page.goto(base + "/soins", { timeout: 60000 });
  await waitReady(page, 2500);
  await shot(page, `soins-top-${label}.png`);

  await page.goto(base + "/reservation", { timeout: 60000 });
  await waitReady(page, 2000);
  await shot(page, `reservation-${label}.png`);

  if (label === "390") {
    await page.goto(base + "/contact", { timeout: 60000 });
    await waitReady(page, 1500);
    await page.getByRole("button", { name: /Ouvrir le menu/i }).click({ force: true });
    await page.waitForTimeout(600);
    await shot(page, `menu-mobile-${label}.png`);

    await page.goto(base + "/soins", { timeout: 60000 });
    await waitReady(page, 2000);
    await page.locator("#avant-apres").scrollIntoViewIfNeeded();
    await page.locator(".ba-card").first().click({ force: true });
    await page.locator(".ba-lightbox").waitFor({ state: "visible", timeout: 15000 });
    await page.waitForTimeout(500);
    await shot(page, `lightbox-${label}.png`);
  }

  await page.close();
}

await browser.close();
