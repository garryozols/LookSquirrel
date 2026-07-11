import type { Platform } from "./types";
import { SPOTIFY_SHOW_URL } from "./constants";

/**
 * Where to listen. Add a new platform by dropping in another entry —
 * { name, url, icon } — the Subscribe section renders straight from this list.
 * `icon` accepts "spotify" | "apple" | "amazon" | "rss" | "generic".
 */
export const PLATFORMS: Platform[] = [
  {
    name: "Spotify",
    url: SPOTIFY_SHOW_URL,
    icon: "spotify",
  },
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/podcast/look-squirrel",
    icon: "apple",
  },
  {
    name: "Amazon Music",
    url: "https://music.amazon.com/podcasts/look-squirrel",
    icon: "amazon",
  },
];
