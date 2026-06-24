"use client";

import { motion, useMotionValue } from "motion/react";
import type { MotionValue } from "motion/react";

// Cursor-follow label shared by the home WorkCards and the case-study Next case.
// `useCursorFollow()` owns the pointer motion values + the move handler (motion
// values, so tracking the cursor doesn't re-render per pixel). Usage:
//   const { x, y, onMouseMove } = useCursorFollow();
//   <div className="group relative" onMouseMove={onMouseMove}> … hover target …
//     <CursorFollowPill x={x} y={y} label="View work" />
//   </div>
// The pill fades in on `group-hover` (CSS) and tracks the cursor inside the
// nearest positioned ancestor (the `group relative` element).
export function useCursorFollow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };
  return { x, y, onMouseMove };
}

export default function CursorFollowPill({
  x,
  y,
  label,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  label: string;
}) {
  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none absolute left-0 top-0 z-20"
    >
      <span className="inline-block -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-1.5 text-overline font-secondary uppercase tracking-overline text-white opacity-0 backdrop-blur-md transition-opacity duration-300 ease-out group-hover:opacity-100">
        {label}
      </span>
    </motion.div>
  );
}
