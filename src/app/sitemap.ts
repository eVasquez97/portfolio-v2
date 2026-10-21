import type { MetadataRoute } from "next";
import projects from "@/utils/projects.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://evasquez97.vercel.app";

  const staticRoutes = ["", "/about", "/projects", "/courses"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
