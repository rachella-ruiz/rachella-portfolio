import type { FeatureSection as FeatureSectionData } from "@/data/case-studies/types";
import Media from "./Media";
import RichText from "./RichText";
import SplitLayout from "./SplitLayout";

// Text on one side, a single Media on the other, controlled by mediaSide
// ('right' default). On mobile it stacks with TEXT FIRST regardless of mediaSide
// (reverseOnMobile is set so the text leads).
export default function FeatureSection({
  section,
}: {
  section: FeatureSectionData;
}) {
  const mediaSide = section.mediaSide ?? "right";
  const mediaOnLeft = mediaSide === "left";

  const text = (
    <div>
      <h2 className="text-h3 font-primary font-semibold text-text-heading">
        {section.heading}
      </h2>
      <RichText
        items={section.body}
        className="mt-large text-body-lg leading-body text-text-primary"
      />
    </div>
  );
  const media = <Media item={section.media} />;

  // medium = --container-medium (75rem) centered (same system as MediaBand /
  // TextSection); full (default) = px-large gutter.
  const outerClass =
    section.width === "medium"
      ? "mx-auto max-w-[var(--container-medium)] px-large"
      : "px-large";

  return (
    <div className={outerClass}>
      <SplitLayout
        ratio="minmax(0,1fr) minmax(0,1fr)"
        left={mediaOnLeft ? media : text}
        right={mediaOnLeft ? text : media}
        // Media on the left → text is the right slot → bring it first on mobile.
        reverseOnMobile={mediaOnLeft}
      />
    </div>
  );
}
