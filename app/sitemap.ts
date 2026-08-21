import type { MetadataRoute } from "next";
import { designCases, services } from "./design-data";

export const dynamic = "force-static";

const base = "https://shanjiang.asia";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["", "/design-detailing", "/as-built-blueprint", "/ai-applications", "/tekla-steel-detailing", "/tekla-steel-detailing-cn", "/privacy"];
  return [
    ...core.map((path, index) => ({ url: `${base}${path}`, changeFrequency: index < 3 ? "weekly" as const : "monthly" as const, priority: index === 0 ? 1 : index < 3 ? 0.9 : 0.6 })),
    ...services.map((service) => ({ url: `${base}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.75 })),
    ...designCases.slice(0, 6).map((item) => ({ url: `${base}/cases/${item.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
