/* eslint-disable @next/next/no-img-element */
"use client";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useEffect, useRef } from "react";
import { aboutGallery } from "@/data/about-gallery";

// Misma máscara de borde que el marquee del home (disuelve en los extremos).
const FADE_MASK =
  "linear-gradient(270deg, rgba(0,0,0,0), black 50%, rgba(0,0,0,0))";
// Velocidad del auto-scroll en px/s (lenta, al ritmo del marquee del home).
const SPEED = 40;

// Galería full-bleed: tira horizontal que auto-scrollea en bucle sin costura y
// se puede arrastrar (desktop y touch). El set se DUPLICA y el desplazamiento
// se envuelve (gsap.utils.wrap) en el ancho de un set → sin salto ni hueco.
// Draggable (gratis, sin InertiaPlugin) arrastra; al soltar, reanuda. Respeta
// prefers-reduced-motion (pausa el auto-scroll; el arrastre sigue).
export default function AboutGallery() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    const viewport = viewportRef.current;
    if (!strip || !viewport) return;

    gsap.registerPlugin(Draggable);
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const count = aboutGallery.length;

    let x = 0;
    let dragging = false;
    let setWidth = 1;
    let wrap = (v: number) => v;

    // El ancho de un set = offsetLeft del primer item del 2.º set (incluye el
    // gap). Se mide tras cargar las imágenes (ResizeObserver) y al cambiar tamaño.
    const measure = () => {
      const firstOfSecond = strip.children[count] as HTMLElement | undefined;
      setWidth = firstOfSecond?.offsetLeft || strip.scrollWidth / 2 || 1;
      wrap = gsap.utils.wrap(-setWidth, 0);
      x = wrap(x);
      gsap.set(strip, { x });
    };
    measure();

    const tick = (_t: number, deltaMs: number) => {
      if (dragging || reduced) return;
      x = wrap(x - (SPEED * deltaMs) / 1000);
      gsap.set(strip, { x });
    };
    gsap.ticker.add(tick);

    // Draggable sobre un proxy; el trigger es el viewport (se arrastra en
    // cualquier punto de la galería). Sin inercia premium.
    const proxy = document.createElement("div");
    let startX = 0;
    let startPointer = 0;
    const draggable = Draggable.create(proxy, {
      type: "x",
      trigger: viewport,
      inertia: false,
      cursor: "grab",
      activeCursor: "grabbing",
      onPress() {
        dragging = true;
        startX = x;
        startPointer = this.x;
      },
      onDrag() {
        x = wrap(startX + (this.x - startPointer));
        gsap.set(strip, { x });
      },
      onRelease() {
        dragging = false;
      },
    })[0];

    // Re-medir cuando las imágenes carguen (la tira cambia de ancho).
    const ro = new ResizeObserver(() => measure());
    ro.observe(strip);

    return () => {
      gsap.ticker.remove(tick);
      draggable?.kill();
      ro.disconnect();
    };
  }, []);

  return (
    <section aria-label="Photo gallery" className="w-full">
      <div
        ref={viewportRef}
        className="cursor-grab overflow-hidden"
        style={{ WebkitMaskImage: FADE_MASK, maskImage: FADE_MASK }}
      >
        {/* Tira: el set duplicado para el bucle sin costura. gap = space-small. */}
        <div ref={stripRef} className="flex w-max gap-small">
          {[...aboutGallery, ...aboutGallery].map((img, i) => {
            const original = i < aboutGallery.length;
            return (
              <img
                key={i}
                src={img.src}
                alt={original ? img.alt : ""}
                aria-hidden={original ? undefined : true}
                draggable={false}
                className="h-64 w-auto shrink-0 select-none rounded-large object-cover"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
