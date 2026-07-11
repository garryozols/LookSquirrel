import type { Episode } from "./types";

/**
 * Typed fallback data. Used only if PODCAST_RSS_URL is unreachable at build
 * time, so the site still ships. Real episode data comes from the RSS feed —
 * see lib/rss.ts.
 */
export const FALLBACK_EPISODES: Episode[] = [
  {
    slug: "solar-sharer-scheme",
    title: "The Solar Sharer scheme, and who it actually helps",
    episodeNumber: 5,
    publishedAt: "2024-06-18T21:00:00.000Z",
    description:
      "Free daytime power sounds like a gift. It's a load-shifting incentive wearing a Christmas jumper. We pull apart what Solar Sharer actually does to the grid, your bill, and your washing machine's sense of purpose.",
    showNotesHtml:
      "<p>Free daytime power sounds like a gift. It's a load-shifting incentive wearing a Christmas jumper.</p><p>We pull apart what the Solar Sharer scheme actually does — to the grid, to your bill, and to your washing machine's newfound sense of purpose. Who wins, who's subsidising who, and whether \"free\" is doing a lot of quiet work in that sentence.</p>",
    duration: "38:12",
    durationSeconds: 2292,
    audioUrl: null,
    imageUrl: null,
    guid: "fallback-solar-sharer-scheme",
    spotifyEpisodeId: null,
    series: "Energy",
  },
  {
    slug: "home-battery-storage",
    title: "Home batteries: the maths they don't put on the brochure",
    episodeNumber: 4,
    publishedAt: "2024-05-14T21:00:00.000Z",
    description:
      "Everyone's selling you a battery. Almost nobody's showing you the payback curve. We do the actual maths — cycles, degradation, tariffs — and work out when a home battery is genuinely worth it.",
    showNotesHtml:
      "<p>Everyone's selling you a battery right now. Almost nobody's showing you the payback curve.</p><p>We do the actual maths — cycles, degradation, time-of-use tariffs, the lot — and work out when a home battery is genuinely worth it versus when it's an expensive feeling.</p>",
    duration: "41:05",
    durationSeconds: 2465,
    audioUrl: null,
    imageUrl: null,
    guid: "fallback-home-battery-storage",
    spotifyEpisodeId: null,
    series: "Energy",
  },
  {
    slug: "solar-buying-guide",
    title: "The solar buying guide nobody hands you before you sign",
    episodeNumber: 3,
    publishedAt: "2024-04-09T21:00:00.000Z",
    description:
      "Cheap solar quotes are cheap for a reason. We cover what actually separates a good install from a bad one — and the phoenixing trick that leaves you with panels and no one to call when they fail.",
    showNotesHtml:
      "<p>Cheap solar quotes are cheap for a reason. We cover what actually separates a good install from a bad one — inverter choice, panel tier, who's on the roof.</p><p>Then the part that should be printed on every brochure: phoenixing, where an installer folds the company, opens a new one under a different name, and leaves you with panels, a warranty that means nothing, and no one to call.</p>",
    duration: "45:30",
    durationSeconds: 2730,
    audioUrl: null,
    imageUrl: null,
    guid: "fallback-solar-buying-guide",
    spotifyEpisodeId: null,
    series: "Energy",
  },
  {
    slug: "virtual-power-plants",
    title: "Virtual power plants: your battery, moonlighting",
    episodeNumber: 2,
    publishedAt: "2024-03-05T21:00:00.000Z",
    description:
      "Thousands of home batteries acting as one giant power plant, dispatched by an app you barely notice. It's clever, it's a little unsettling, and it's already running in your street.",
    showNotesHtml:
      "<p>Thousands of home batteries, quietly wired together into one giant power plant, dispatched by an app you barely notice on your phone.</p><p>It's clever engineering, it's a genuinely good deal for a lot of households, and it's a little unsettling once you realise how much control you've handed over — and to whom. We get into all three.</p>",
    duration: "36:48",
    durationSeconds: 2208,
    audioUrl: null,
    imageUrl: null,
    guid: "fallback-virtual-power-plants",
    spotifyEpisodeId: null,
    series: "Energy",
  },
  {
    slug: "grey-importing-a-japanese-kei-car",
    title: "Grey-importing a kei car, or: how I bought a Suzuki Spacia sight unseen",
    episodeNumber: 1,
    publishedAt: "2024-02-01T21:00:00.000Z",
    description:
      "I bought a 2024 Suzuki Spacia Custom from a Japanese auction house I'd never used, in a language I don't speak, without seeing it in person. This is the episode where the rabbit hole started.",
    showNotesHtml:
      "<p>I bought a 2024 Suzuki Spacia Custom from a Japanese auction house I'd never used, in a language I don't speak, without seeing it in person. Naturally, I recorded the whole descent.</p><p>Auction sheets, compliance workshops, shipping manifests, the exact moment you realise customs doesn't care how excited you are. This is the episode where the rabbit hole started — and the reason this show exists.</p>",
    duration: "52:14",
    durationSeconds: 3134,
    audioUrl: null,
    imageUrl: null,
    guid: "fallback-grey-importing-a-japanese-kei-car",
    spotifyEpisodeId: null,
    series: "Cars",
  },
];
