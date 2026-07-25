import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/dashboard/", "/admin", "/admin/", "/auth/"],
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
