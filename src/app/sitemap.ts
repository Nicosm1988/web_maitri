import type { MetadataRoute } from "next";

import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["/", ...mainNav.map((item) => item.href)];

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
