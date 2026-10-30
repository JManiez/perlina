import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

const outDir = process.argv[2] || "/opt/cursor/artifacts/visual-polish/after";
const base = process.env.BASE_URL || "http://localhost:3000";
const widths = [1440, 1024, 390];

const pages = [
  { slug: "home", path: "/" },
  { slug: "soins", path: "/soins" },
  { slug: "reservation", path: "/reservation" },
];

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

async function fullPageShot(page, file) {
  await page.evaluate(async () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    await new Promise((r) => setTimeout(r, 200));
    const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const step = Math.max(320, Math.floor(window.innerHeight * 0.85));
    for (let y = 0; y < h; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });
  await page.screenshot({ path: file, fullPage: true });
}

for (const width of widths) {
  const height = width <= 390 ? 844 : 900;
  for (const { slug, path } of pages) {
    const page = await browser.newPage({ viewport: { width, height } });
    await page.goto(base + path, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(1500);
    const file = join(outDir, `${slug}-${width}.png`);
    await fullPageShot(page, file);
    console.log("saved", file);
    await page.close();
  }

  const menuPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await menuPage.goto(base + "/", { waitUntil: "networkidle" });
  await menuPage.locator(".burger").click();
  await menuPage.locator(".menu-overlay.open").waitFor({ state: "visible" });
  await menuPage.waitForTimeout(600);
  const menuFile = join(outDir, `menu-mobile-${width === 390 ? 390 : width}.png`);
  await menuPage.screenshot({ path: menuFile, fullPage: false });
  console.log("saved", menuFile);
  await menuPage.close();
}

await browser.close();
