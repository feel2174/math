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
    {
      path: "/grade-1/counting-on-fingers",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-1/carrying",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-2/multiplication-concept",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-2/times-table-order",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-3/division-meaning",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-3/fraction-intro",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-4/accuracy-over-speed",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-4/place-value",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-5/common-denominator-mistakes",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-5/reduce-and-common-denominator",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-6/ratio-new-language",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/grade-6/pre-middle-checklist",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
