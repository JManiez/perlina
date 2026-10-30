import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

const outDir = process.argv[2] || "/opt/cursor/artifacts/audit-before";
const prefix = process.argv[3] || "audit";
const base = process.env.BASE_URL || "http://localhost:3000";

const pages = [
  { slug: "home", path: "/" },
  { slug: "soins", path: "/soins" },
  { slug: "reservation", path: "/reservation" },
  { slug: "a-propos", path: "/a-propos" },
  { slug: "contact", path: "/contact" },
];

const widths = [375, 768, 1280, 1440];

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

for (const page of pages) {
  for (const width of widths) {
    const height = width <= 768 ? 900 : 1000;
    const p = await browser.newPage({ viewport: { width, height } });
    await p.goto(base + page.path, { waitUntil: "networkidle" });
    await p.waitForTimeout(600);
    const name = `${prefix}-${page.slug}-${width}.png`;
    await p.screenshot({ path: join(outDir, name), fullPage: true });
    await p.close();
    console.log("saved", name);
  }
}

await browser.close();
