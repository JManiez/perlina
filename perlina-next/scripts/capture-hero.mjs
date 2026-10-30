import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

const outDir = "/opt/cursor/artifacts/final";
const base = process.env.BASE_URL || "http://localhost:3000";
const widths = [1440, 1280, 1024, 390];

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

for (const width of widths) {
  const height = width <= 390 ? 844 : 900;
  const page = await browser.newPage({
    viewport: { width, height },
    colorScheme: "light",
  });

  await page.goto(base + "/", { waitUntil: "networkidle", timeout: 60000 });
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });

  const hero = page.locator(".hero--immersive");
  await hero.waitFor({ state: "visible", timeout: 15000 });
  await page.locator(".hero--immersive h1").waitFor({ state: "visible" });

  const heroOk = await page.evaluate(() => {
    const el = document.querySelector(".hero--immersive");
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const minH = parseFloat(getComputedStyle(el).minHeight) || 0;
    return rect.height >= Math.min(minH, window.innerHeight * 0.5) && rect.top <= 8;
  });
  if (!heroOk) {
    throw new Error(
      `Hero layout invalid at ${width}px — rebuild app and restart \`next start\` before capture.`
    );
  }

  await page.waitForTimeout(1200);

  const name = width === 390 ? "home-hero-390.png" : `home-hero-${width}.png`;
  await page.screenshot({ path: join(outDir, name), fullPage: false });
  console.log("saved", name);
  await page.close();
}

await browser.close();
