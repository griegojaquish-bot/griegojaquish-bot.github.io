import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://shanjiang.asia/sitemap.xml",
    host: "https://shanjiang.asia",
  };
}
