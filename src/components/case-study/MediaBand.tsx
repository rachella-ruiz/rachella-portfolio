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
  const fullBleed = section.fullBleed ?? false;
  // Contained = the site's full-width px-large gutter (same as the other case
  // sections). Full-bleed = edge-to-edge (no gutter), so it spans wider still.
  return (
    <div className={fullBleed ? "w-full" : "px-large"}>
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
