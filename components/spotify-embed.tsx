export function SpotifyEmbed({
  src,
  title,
  height = 352,
}: {
  src: string;
  title: string;
  height?: number;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-line bg-ink-deep">
      <iframe
        title={title}
        src={src}
        width="100%"
        height={height}
        style={{ display: "block" }}
        frameBorder={0}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  );
}
