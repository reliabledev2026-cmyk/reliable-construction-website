import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { residentialProjects } from "@/data/residential-projects";
import { services } from "@/data/services";

/**
 * Sitemap. Project and service routes are derived from their data files.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const now = new Date("2026-09-01");

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/projects", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...residentialProjects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
