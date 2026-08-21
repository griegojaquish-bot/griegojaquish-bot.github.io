import type { MetadataRoute } from "next";
import { designCases, services } from "./design-data";
import { products } from "./products/data";
import { projects } from "./projects/data";
import { articles } from "./news/data";
import { articles as englishArticles } from "./en/news/data";

export const dynamic = "force-static";

const base = "https://shanjiang.asia";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["", "/design-detailing", "/as-built-blueprint", "/ai-applications", "/projects", "/news", "/en", "/en/factory", "/en/news", "/tekla-steel-detailing", "/tekla-steel-detailing-cn"];
  return [
    ...core.map((path, index) => ({ url: `${base}${path}`, changeFrequency: index < 3 ? "weekly" as const : "monthly" as const, priority: index === 0 ? 1 : index < 3 ? 0.9 : 0.6 })),
    ...services.map((service) => ({ url: `${base}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.75 })),
    ...designCases.map((item) => ({ url: `${base}/cases/${item.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...products.map((product) => ({ url: `${base}/products/${product.slug}`, changeFrequency: "monthly" as const, priority: 0.65 })),
    ...products.map((product) => ({ url: `${base}/en/products/${product.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.55 })),
    ...articles.map((article) => ({ url: `${base}/news/${article.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
    ...englishArticles.map((article) => ({ url: `${base}/en/news/${article.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
