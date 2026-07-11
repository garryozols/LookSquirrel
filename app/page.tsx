import { Hero } from "@/components/hero";
import { MarqueeBanner } from "@/components/marquee-banner";
import { FeaturedEpisode } from "@/components/featured-episode";
import { EpisodeGrid } from "@/components/episode-grid";
import { About } from "@/components/about";
import { Subscribe } from "@/components/subscribe";
import { Footer } from "@/components/footer";
import { getEpisodes } from "@/lib/rss";

export default async function HomePage() {
  const episodes = await getEpisodes();
  const [latest, ...rest] = episodes;

  return (
    <>
      <Hero latestEpisodeSlug={latest?.slug ?? null} />
      <MarqueeBanner items={episodes.slice(0, 8).map((e) => e.title)} />
      {latest && <FeaturedEpisode episode={latest} />}
      <EpisodeGrid episodes={rest.slice(0, 6)} />
      <About />
      <Subscribe />
      <Footer />
    </>
  );
}
