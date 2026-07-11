import { XMLParser } from "fast-xml-parser";
import type { Episode } from "./types";
import { FALLBACK_EPISODES } from "./episodes";
import { PODCAST_RSS_URL, REVALIDATE_SECONDS, SITE_NAME, SITE_TAGLINE } from "./constants";
import {
  excerpt,
  extractSpotifyEpisodeId,
  formatSecondsToClock,
  parseDurationToSeconds,
  slugify,
  stripHtml,
} from "./utils";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  removeNSPrefix: true,
  textNodeName: "#text",
});

export interface ShowMeta {
  title: string;
  description: string;
  imageUrl: string | null;
  link: string | null;
}

interface RawItem {
  title?: string;
  description?: string;
  summary?: string;
  encoded?: string;
  pubDate?: string;
  duration?: string;
  episode?: string;
  image?: { "@_href"?: string };
  enclosure?: { "@_url"?: string };
  guid?: string | { "#text"?: string };
  link?: string;
}

interface RawChannel {
  title?: string;
  description?: string;
  summary?: string;
  link?: string | string[];
  image?: { url?: string; "@_href"?: string };
  item?: RawItem | RawItem[];
}

function textOf(value: string | { "#text"?: string } | undefined): string | null {
  if (!value) return null;
  if (typeof value === "string") return value;
  return value["#text"] ?? null;
}

function toEpisode(item: RawItem, channelImage: string | null, seenSlugs: Set<string>): Episode {
  const title = item.title?.trim() ?? "Untitled episode";
  const guid = textOf(item.guid) ?? item.link ?? title;

  let slug = slugify(title);
  if (!slug) slug = slugify(guid) || "episode";
  if (seenSlugs.has(slug)) {
    const suffix = slugify(guid).slice(-6) || Math.random().toString(36).slice(-6);
    slug = `${slug}-${suffix}`;
  }
  seenSlugs.add(slug);

  const html = item.encoded ?? item.summary ?? item.description ?? "";
  const description = excerpt(item.summary ?? item.description ?? html, 220);
  const durationSeconds = parseDurationToSeconds(item.duration);
  const duration =
    durationSeconds !== null ? formatSecondsToClock(durationSeconds) : item.duration ?? "";

  const episodeNumber = item.episode ? parseInt(item.episode, 10) : null;

  return {
    slug,
    title,
    episodeNumber: Number.isNaN(episodeNumber) ? null : episodeNumber,
    publishedAt: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
    description,
    showNotesHtml: html || `<p>${stripHtml(description)}</p>`,
    duration,
    durationSeconds,
    audioUrl: item.enclosure?.["@_url"] ?? null,
    imageUrl: item.image?.["@_href"] ?? channelImage,
    guid,
    spotifyEpisodeId: extractSpotifyEpisodeId(item.link, guid),
    series: undefined,
  };
}

async function fetchChannel(): Promise<RawChannel | null> {
  try {
    const res = await fetch(PODCAST_RSS_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { "User-Agent": "look-squirrel-site/1.0" },
    });
    if (!res.ok) return null;
    const xml = await res.text();
    const parsed = parser.parse(xml);
    const channel = parsed?.rss?.channel;
    if (!channel) return null;
    return channel as RawChannel;
  } catch {
    return null;
  }
}

export async function getEpisodes(): Promise<Episode[]> {
  const channel = await fetchChannel();
  if (!channel) return FALLBACK_EPISODES;

  const items = Array.isArray(channel.item) ? channel.item : channel.item ? [channel.item] : [];
  if (items.length === 0) return FALLBACK_EPISODES;

  const channelImage = channel.image?.["@_href"] ?? channel.image?.url ?? null;
  const seenSlugs = new Set<string>();

  const episodes = items.map((item) => toEpisode(item, channelImage, seenSlugs));
  episodes.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  return episodes;
}

export async function getEpisodeBySlug(slug: string): Promise<Episode | null> {
  const episodes = await getEpisodes();
  return episodes.find((e) => e.slug === slug) ?? null;
}

export async function getShowMeta(): Promise<ShowMeta> {
  const channel = await fetchChannel();
  if (!channel) {
    return {
      title: SITE_NAME,
      description: SITE_TAGLINE,
      imageUrl: null,
      link: null,
    };
  }
  const link = Array.isArray(channel.link) ? channel.link[0] : channel.link;
  return {
    title: channel.title?.trim() || SITE_NAME,
    description: stripHtml(channel.summary ?? channel.description ?? SITE_TAGLINE),
    imageUrl: channel.image?.["@_href"] ?? channel.image?.url ?? null,
    link: link ?? null,
  };
}
