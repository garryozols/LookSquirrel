import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getEpisodes } from "@/lib/rss";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const episodes = await getEpisodes();

  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/episodes`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...episodes.map((episode) => ({
      url: `${SITE_URL}/episodes/${episode.slug}`,
      lastModified: episode.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
