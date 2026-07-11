export const SITE_NAME = "Look! Squirrel!";
export const SITE_TAGLINE = "Your attention span is selective, not short.";
export const HOST_NAME = "Garry Ozols";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://podcastlooksquirrel.com"
).replace(/\/$/, "");

export const PODCAST_RSS_URL =
  process.env.PODCAST_RSS_URL ?? "https://anchor.fm/s/114326198/podcast/rss";

export const SHOW_ID = process.env.SHOW_ID ?? "033Ej7pQIh0GKnzoLnqhUd";

export const SPOTIFY_SHOW_EMBED_URL = `https://open.spotify.com/embed/show/${SHOW_ID}`;
export const SPOTIFY_SHOW_URL = `https://open.spotify.com/show/${SHOW_ID}`;

export function spotifyEpisodeEmbedUrl(episodeId: string) {
  return `https://open.spotify.com/embed/episode/${episodeId}`;
}

export const DESCRIPTORS = ["CURIOSITY", "UNFILTERED", "UNAPOLOGETIC"] as const;

export const REVALIDATE_SECONDS = 3600;
