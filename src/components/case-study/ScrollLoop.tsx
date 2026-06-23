/* eslint-disable @next/next/no-img-element */
"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

// Edge mask: same treatment as the home marquee (transparent → black → transparent)
// but on the vertical axis, fading the top and bottom edges of the frame.
const EDGE_MASK =
  "linear-gradient(180deg, rgba(0,0,0,0), black 12%, black 88%, rgba(0,0,0,0))";

// Renders a tall image that scrolls vertically in a seamless, continuous loop
// inside a fixed-height masked frame (an endless document scrolling past).
// Mirrors the home marquee but on the Y axis: the image is stacked twice and
// the strip translates up by half its height (= one image) on a linear,
// infinite timeline, so the wrap is seamless. Respects prefers-reduced-motion
// (static, scrolled to top, no animation).
export default function ScrollLoop({
  src,
  alt,
  durationSec = 20,
}: {
  src: string;
  alt: string;
  durationSec?: number;
}) {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.to(strip, {
      yPercent: -50,
      duration: durationSec,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [durationSec]);

  return (
    <div
      className="h-[40rem] overflow-hidden rounded-large"
      style={{ WebkitMaskImage: EDGE_MASK, maskImage: EDGE_MASK }}
    >
      {/* Dos copias apiladas: al subir -50% (una imagen) el wrap es continuo. */}
      <div ref={stripRef}>
        <img src={src} alt={alt} className="block w-full" />
        <img src={src} alt="" aria-hidden="true" className="block w-full" />
      </div>
    </div>
  );
}
