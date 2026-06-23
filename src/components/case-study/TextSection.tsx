import type { TextSection as TextSectionData } from "@/data/case-studies/types";
import RichText from "./RichText";
import SplitLayout from "./SplitLayout";

// 25/75 grid in the 75rem container (matching SelectedWork). Left 25%: the label
// (and optional heading), top-aligned, NOT sticky. Right 75%: the body via
// RichText. columns===2 (default) flows the body in two CSS columns on desktop,
// collapsing to one ≤991px; bullet items use break-inside:avoid (in RichText).
export default function TextSection({
  section,
}: {
  section: TextSectionData;
}) {
  const columns = section.columns ?? 2;
  return (
    <div className="px-large">
      <SplitLayout
        left={
          <div>
            <p className="text-overline font-secondary uppercase text-text-tertiary">
              {section.label}
            </p>
            {section.heading && (
              <h2 className="mt-small text-h4 font-primary font-semibold text-text-heading">
                {section.heading}
              </h2>
            )}
          </div>
        }
        right={
          <RichText
            items={section.body}
            className={`text-body-lg leading-body text-text-primary${
              columns === 2
                ? " min-[992px]:columns-2 min-[992px]:[column-gap:var(--space-xlarge)]"
                : ""
            }`}
          />
        }
      />
    </div>
  );
}
