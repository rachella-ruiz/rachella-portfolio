import type { MediaSection as MediaSectionData } from "@/data/case-studies/types";
import Media from "./Media";

// Renders items by layout. 'single' = one item; 'pair' = two side by side
// (stack on mobile); 'grid' = responsive grid. fullBleed breaks out of the
// 75rem container to near-viewport width; otherwise stays contained. Per-item
// captions render via Media; an optional band-level caption renders below.
const LAYOUT_CLASS: Record<MediaSectionData["layout"], string> = {
  single: "",
  pair: "grid grid-cols-1 gap-medium min-[992px]:grid-cols-2",
  grid: "grid grid-cols-1 gap-medium min-[480px]:grid-cols-2 min-[992px]:grid-cols-3",
};

export default function MediaBand({
  section,
}: {
  section: MediaSectionData;
}) {
  const width = section.width ?? "full";
  const fullBleed = section.fullBleed ?? false;
  // medium = --container-medium (75rem) centered, matching TextSection/ProcessSteps.
  // full (default): px-large gutter, or w-full edge-to-edge when fullBleed.
  const outerClass =
    width === "medium"
      ? "mx-auto max-w-[var(--container-medium)] px-large"
      : fullBleed
        ? "w-full"
        : "px-large";
  return (
    <div className={outerClass}>
      <div className={LAYOUT_CLASS[section.layout]}>
        {section.items.map((item, i) => (
          <Media key={i} item={item} />
        ))}
      </div>
      {section.caption && (
        <p className="mt-small font-secondary text-caption text-text-tertiary">
          {section.caption}
        </p>
      )}
    </div>
  );
}
