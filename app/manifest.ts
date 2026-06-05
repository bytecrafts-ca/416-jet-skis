import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "416 Jet Skis",
    description: siteConfig.seo.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0a1628",
    theme_color: "#0a1628",
    lang: "en-CA",
    categories: ["lifestyle", "sports"],
    icons: [
      {
        src: siteConfig.logoImage,
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
