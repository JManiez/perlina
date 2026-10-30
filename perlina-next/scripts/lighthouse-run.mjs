import { execSync } from "child_process";
import { readFileSync, mkdirSync } from "fs";
import { join } from "path";

const prefix = process.argv[2] || "before";
const base = process.env.BASE_URL || "http://localhost:3000";
const outDir = "/opt/cursor/artifacts/lighthouse";
mkdirSync(outDir, { recursive: true });

const pages = [
  { slug: "home", path: "/" },
  { slug: "soins", path: "/soins" },
  { slug: "reservation", path: "/reservation" },
];
const forms = ["mobile", "desktop"];

const scores = [];

for (const page of pages) {
  for (const form of forms) {
    const file = join(outDir, `${prefix}-${page.slug}-${form}.json`);
    const preset = form === "desktop" ? " --preset=desktop" : " --form-factor=mobile";
    execSync(
      `npx --yes lighthouse "${base}${page.path}" --quiet --chrome-flags="--headless --no-sandbox" --only-categories=performance,accessibility,best-practices,seo${preset} --output=json --output-path="${file}"`,
      { stdio: "inherit" }
    );
    const report = JSON.parse(readFileSync(file, "utf8"));
    const c = report.categories;
    scores.push({
      page: page.slug,
      form,
      performance: Math.round((c.performance?.score ?? 0) * 100),
      accessibility: Math.round((c.accessibility?.score ?? 0) * 100),
      bestPractices: Math.round((c["best-practices"]?.score ?? 0) * 100),
      seo: Math.round((c.seo?.score ?? 0) * 100),
    });
  }
}

console.log(JSON.stringify(scores, null, 2));
