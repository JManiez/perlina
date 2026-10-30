import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const dir = "/opt/cursor/artifacts/lighthouse";
const prefix = process.argv[2] || "before";

const files = readdirSync(dir).filter((f) => f.startsWith(prefix) && f.endsWith(".json"));
const rows = files.sort().map((f) => {
  const report = JSON.parse(readFileSync(join(dir, f), "utf8"));
  const c = report.categories;
  const name = f.replace(`${prefix}-`, "").replace(".json", "");
  return {
    name,
    performance: Math.round((c.performance?.score ?? 0) * 100),
    accessibility: Math.round((c.accessibility?.score ?? 0) * 100),
    bestPractices: Math.round((c["best-practices"]?.score ?? 0) * 100),
    seo: Math.round((c.seo?.score ?? 0) * 100),
  };
});
console.log(JSON.stringify(rows, null, 2));
