import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: company.name,
    short_name: company.shortName,
    description: company.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f5f3ef",
    theme_color: "#0b1319",
    lang: "en-NP",
    dir: "ltr",
    categories: ["business", "design"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Our Services",
        short_name: "Services",
        description: "Explore house planning and engineering services",
        url: "/services",
      },
      {
        name: "Residential Projects",
        short_name: "Projects",
        description: "View residential concept studies",
        url: "/projects",
      },
      {
        name: "Contact Reliable",
        short_name: "Contact",
        description: "Request a consultation",
        url: "/contact",
      },
    ],
  };
}
