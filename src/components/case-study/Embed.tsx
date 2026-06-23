// Responsive, lazy-loaded iframe. Same-origin local embeds (served from
// /embeds/...) and external embeds (e.g. Whimsical) are both just URLs.
export default function Embed({
  src,
  title,
  ratio = "16 / 9",
}: {
  src: string;
  title: string;
  ratio?: string;
}) {
  return (
    <div className="w-full">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        style={{
          border: "none",
          width: "100%",
          aspectRatio: ratio,
          borderRadius: "var(--radius-large)",
        }}
      />
    </div>
  );
}
