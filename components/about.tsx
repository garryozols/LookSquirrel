import { Reveal } from "./motion/reveal";

export function About() {
  return (
    <section id="about" className="section-pad bg-ink px-5 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <p className="text-eyebrow text-squirrel">About</p>
          <h2 className="text-display-l mt-3 max-w-md text-cream">
            Curiosity, weaponised.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="text-body-l space-y-5 text-cream/85">
            <p>
              Garry Ozols hosts Look! Squirrel! the way most people scroll:
              too fast, too interested, no apologies. One week it&rsquo;s the
              economics of home batteries. The next it&rsquo;s why a 2024
              Suzuki Spacia Custom is sitting in his driveway after a
              six-month fight with Japanese auction houses and Australian
              compliance plates.
            </p>
            <p>
              There&rsquo;s no format. There&rsquo;s no lane. If something is
              interesting enough to make Garry stop mid-sentence and say
              &ldquo;wait, actually&mdash;&rdquo;, it becomes an episode.
              That&rsquo;s the whole editorial process.
            </p>
            <p className="text-cream">
              This isn&rsquo;t a show that pretends to have a short
              attention span. It has a selective one. It just happens to be
              very good at spotting the thing worth chasing &mdash; and
              terrible at pretending not to be excited about it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
