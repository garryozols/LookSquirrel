export interface Episode {
  slug: string;
  title: string;
  episodeNumber: number | null;
  publishedAt: string;
  description: string;
  showNotesHtml: string;
  duration: string;
  durationSeconds: number | null;
  audioUrl: string | null;
  imageUrl: string | null;
  guid: string;
  spotifyEpisodeId: string | null;
  series?: string;
}

export interface Platform {
  name: string;
  url: string;
  icon: "spotify" | "apple" | "amazon" | "rss" | "facebook" | "generic";
}
