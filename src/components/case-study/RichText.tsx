import type { ReactNode } from "react";
import type { BodyItem } from "@/data/case-studies/types";

// Minimal inline parser: converts **bold** runs to <strong>, leaving the rest
// as plain text. No markdown library, no dangerouslySetInnerHTML.
// Splitting on /\*\*(.+?)\*\*/ with a capturing group interleaves plain text
// (even indices) and bold runs (odd indices). Handles: no bold, one run,
// multiple runs, and bold at the start/end of a string. Unmatched "**" stays
// literal.
export function parseBold(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

// Renders BodyItem[] : strings become <p> paragraphs, bullet lists become <ul>.
// Both run through parseBold. Spacing between blocks uses a spacing token
// (margin-bottom, which also behaves well inside CSS multi-column layouts).
// The parent passes typographic + column classes via `className`.
export default function RichText({
  items,
  className,
}: {
  items: BodyItem[];
  className?: string;
}) {
  return (
    <div className={`[&>*:not(:last-child)]:mb-medium ${className ?? ""}`}>
      {items.map((item, i) =>
        typeof item === "string" ? (
          <p key={i}>{parseBold(item)}</p>
        ) : (
          <ul key={i} className="list-disc space-y-small pl-5">
            {item.items.map((li, j) => (
              <li key={j} className="break-inside-avoid pl-1">
                {parseBold(li)}
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}
