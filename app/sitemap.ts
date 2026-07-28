import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/grade-1", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/grade-2", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/grade-3", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/grade-4", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/grade-5", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/grade-6", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/odap-note", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
