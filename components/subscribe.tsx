import { PLATFORMS } from "@/lib/platforms";
import { PlatformIcon } from "./icons";
import { Reveal } from "./motion/reveal";

export function Subscribe() {
  return (
    <section id="subscribe" className="section-pad bg-ink-deep px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-eyebrow text-squirrel">Follow along</p>
          <h2 className="text-display-l mt-3 text-cream">Wherever you listen.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {PLATFORMS.map((platform, i) => (
            <Reveal key={platform.name} delay={i * 0.05}>
              <a
                href={platform.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-4 rounded-md border border-line bg-ink px-6 py-6 transition-colors hover:border-squirrel"
              >
                <span className="flex items-center gap-4">
                  <span className="text-cream transition-colors group-hover:text-squirrel">
                    <PlatformIcon icon={platform.icon} />
                  </span>
                  <span className="text-display-m text-cream">{platform.name}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-squirrel opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
