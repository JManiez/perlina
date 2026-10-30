import { SITE_URL } from "../lib/site";

const PUBLIC_PATHS = ["/", "/a-propos", "/contact", "/reservation", "/soins"];

/** @returns {import("next").MetadataRoute.Sitemap} */
export default function sitemap() {
  const lastModified = new Date();
  return PUBLIC_PATHS.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
