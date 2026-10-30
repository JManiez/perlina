import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

const outDir = process.argv[2] || "/opt/cursor/artifacts/screenshots";
const prefix = process.argv[3] || "before";
const base = process.env.BASE_URL || "http://localhost:3000";

mkdirSync(outDir, { recursive: true });

const shots = [
  { name: `${prefix}-home-desktop.png`, url: "/", width: 1280, height: 800 },
  { name: `${prefix}-home-mobile.png`, url: "/", width: 390, height: 844 },
  { name: `${prefix}-soins-desktop.png`, url: "/soins", width: 1280, height: 800 },
  { name: `${prefix}-reservation-mobile.png`, url: "/reservation", width: 390, height: 844 },
];

const browser = await chromium.launch();
for (const shot of shots) {
  const page = await browser.newPage({ viewport: { width: shot.width, height: shot.height } });
  await page.goto(base + shot.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await page.screenshot({ path: join(outDir, shot.name), fullPage: true });
  await page.close();
  console.log("saved", shot.name);
}
await browser.close();
