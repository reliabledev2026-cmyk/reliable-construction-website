import type { MetadataRoute } from "next";
import { IMG } from "@/data/images";
import { residentialProjects } from "@/data/residential-projects";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

/**
 * All public routes are derived from the same data that renders the website.
 * Dates change only when content changes, avoiding a false "updated today"
 * signal every time the sitemap is requested.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const contentLastModified = "2026-09-05";

  const staticRoutes = [
    {
      path: "/",
      changeFrequency: "weekly" as const,
      priority: 1,
      images: [IMG.heroMain],
    },
    {
      path: "/about",
      changeFrequency: "yearly" as const,
      priority: 0.8,
      images: [IMG.modernHome, IMG.reviewingDrawings],
    },
    {
      path: "/services",
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: services.map((service) => service.image),
    },
    {
      path: "/projects",
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: residentialProjects.map((project) => project.image),
    },
    {
      path: "/contact",
      changeFrequency: "yearly" as const,
      priority: 0.8,
      images: [IMG.concreteBuilding],
    },
    {
      path: "/privacy",
      changeFrequency: "yearly" as const,
      priority: 0.2,
      images: [],
    },
    {
      path: "/terms",
      changeFrequency: "yearly" as const,
      priority: 0.2,
      images: [],
    },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: contentLastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images: route.images.map(absoluteUrl),
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: contentLastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [absoluteUrl(service.image)],
    })),
    ...residentialProjects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: contentLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [...new Set(project.gallery)].map(absoluteUrl),
    })),
  ];
}
