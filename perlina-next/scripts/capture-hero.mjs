import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

const outDir = "/opt/cursor/artifacts/final";
const base = process.env.BASE_URL || "http://localhost:3000";
const widths = [1440, 1280, 1024, 390];

mkdirSync(outDir, { recursive: true });

async function waitHeroReady(page) {
  await page.waitForFunction(
    () => {
      const hero = document.querySelector(".hero--immersive");
      const lead = document.querySelector(".hero .lead");
      const btn = document.querySelector(".hero-cta a");
      if (!hero || !lead || !btn) return false;

      const rect = hero.getBoundingClientRect();
      const minH = parseFloat(getComputedStyle(hero).minHeight) || 0;
      if (rect.height < Math.min(minH, window.innerHeight * 0.5) || rect.top > 8) return false;

      const leadOpacity = parseFloat(getComputedStyle(lead).opacity);
      const btnOpacity = parseFloat(getComputedStyle(btn).opacity);
      if (leadOpacity < 0.98 || btnOpacity < 0.98) return false;

      const leadBox = lead.getBoundingClientRect();
      const btnBox = btn.getBoundingClientRect();
      return leadBox.height > 8 && btnBox.height > 8 && lead.textContent.trim().length > 20;
    },
    { timeout: 20000 }
  );
  await page.waitForTimeout(400);
}

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

  await page.locator(".hero--immersive").waitFor({ state: "visible", timeout: 15000 });
  await waitHeroReady(page);

  const name = width === 390 ? "home-hero-390.png" : `home-hero-${width}.png`;
  await page.screenshot({ path: join(outDir, name), fullPage: false });
  console.log("saved", name);
  await page.close();
}

await browser.close();
