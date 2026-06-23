import type { CSSProperties, ReactNode } from "react";

// Presentational, content-agnostic two-column primitive. Desktop (≥992px): two
// columns at the given `ratio`. Mobile (≤991px): stacks. By default the left
// slot stacks on top; reverseOnMobile flips the stacking order on mobile only
// (the desktop column placement is unchanged). Default ratio = the 25/75 used
// by SelectedWork.
export default function SplitLayout({
  left,
  right,
  ratio = "minmax(min-content,1fr) minmax(0,3fr)",
  reverseOnMobile = false,
}: {
  left: ReactNode;
  right: ReactNode;
  ratio?: string;
  reverseOnMobile?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-1 gap-xlarge min-[992px]:grid-cols-[var(--split-cols)] min-[992px]:gap-[var(--space-xxlarge)]"
      style={{ "--split-cols": ratio } as CSSProperties}
    >
      {/* DOM order stays left→right so desktop columns are deterministic;
          only the mobile stacking order is swapped via `order`. */}
      <div className={reverseOnMobile ? "max-[991px]:order-2" : undefined}>
        {left}
      </div>
      <div className={reverseOnMobile ? "max-[991px]:order-1" : undefined}>
        {right}
      </div>
    </div>
  );
}
