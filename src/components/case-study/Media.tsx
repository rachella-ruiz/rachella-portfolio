/* eslint-disable @next/next/no-img-element */
import type { MediaItem } from "@/data/case-studies/types";
import Embed from "./Embed";
import ScrollLoop from "./ScrollLoop";

// Shared atom: renders a single MediaItem by type, plus an optional caption.
// Composed by ProcessSteps, MediaBand, CaseHeader and FeatureSection.
// Content images use a plain <img> (w-full, native aspect) because case media
// has no fixed dimensions in the data model.
export default function Media({ item }: { item: MediaItem }) {
  let media;
  if (item.type === "image") {
    media = (
      <img
        src={item.src}
        alt={item.alt}
        className="block h-auto w-full rounded-large"
      />
    );
  } else if (item.type === "embed") {
    media = <Embed src={item.src} title={item.title} ratio={item.ratio} />;
  } else {
    media = (
      <ScrollLoop
        src={item.src}
        alt={item.alt}
        durationSec={item.durationSec}
      />
    );
  }

  return (
    <figure>
      {media}
      {item.caption && (
        <figcaption className="mt-small font-secondary text-caption text-text-tertiary">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}
