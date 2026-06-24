import type { TextSection as TextSectionData } from "@/data/case-studies/types";
import RichText from "./RichText";
import SplitLayout from "./SplitLayout";

// 25/75 grid in the full-width container (matching SelectedWork). Left 25%: the
// label (and optional heading), top-aligned, NOT sticky. Right 75%: the body via
// RichText, ALWAYS a single column at every breakpoint. The `columns?` field is
// kept in the type for back-compat but no longer changes the layout.
export default function TextSection({
  section,
}: {
  section: TextSectionData;
}) {
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
            className="text-body-lg leading-body text-text-primary"
          />
        }
      />
    </div>
  );
}
