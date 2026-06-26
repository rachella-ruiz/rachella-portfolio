"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import Marquee from "@/components/Marquee";
import PrimaryButton from "@/components/PrimaryButton";
import ScheduleCallLink from "@/components/ScheduleCallLink";
import Reveal from "@/components/motion/Reveal";
import { EMAIL_HREF } from "@/data/contact";
import { trailImages } from "@/data/trail-images";

// Connect CTA: sección de cierre antes del footer. Marquee + titular gigante +
// botones. Sobre el desktop con puntero fino, un mouse-trail de imágenes
// (GSAP) sigue al cursor SOLO dentro de esta sección.
export default function ConnectCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Guards: nada de trail con reduced-motion ni en punteros gruesos (touch).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const section = sectionRef.current;
    const overlay = overlayRef.current;
    if (!section || !overlay) return;

    let lastX = 0;
    let lastY = 0;
    let index = 0;
    let primed = false;

    // Crea un clon y lo anima de (fromX,fromY) al punto actual; al terminar se
    // elimina del DOM para que los nodos no se acumulen.
    const spawn = (
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      src: string,
    ) => {
      const clone = document.createElement("div");
      clone.className = "cta-trail-clone";
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      clone.appendChild(img);
      overlay.appendChild(clone);

      gsap.set(clone, {
        x: fromX,
        y: fromY,
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
      });
      const tl = gsap.timeline({ onComplete: () => clone.remove() });
      tl.to(clone, { opacity: 1, duration: 0.2 });
      // El movimiento arranca a la vez que el fade-in ("<").
      tl.to(clone, { x: toX, y: toY, duration: 0.5 }, "<");
      // Fade-out + encogido del <img>, DESPUÉS del movimiento.
      tl.to(img, { opacity: 0, scale: 0.6, duration: 0.2 });
    };

    const onMove = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      // Primer movimiento: solo fija el origen (evita un clon volando desde 0,0).
      if (!primed) {
        lastX = x;
        lastY = y;
        primed = true;
        return;
      }
      // Umbral POR EJE (no distancia): >100px en X o en Y.
      if (Math.abs(x - lastX) > 100 || Math.abs(y - lastY) > 100) {
        // Captura el punto del spawn ANTERIOR antes de actualizar last*.
        const fromX = lastX;
        const fromY = lastY;
        lastX = x;
        lastY = y;
        spawn(fromX, fromY, x, y, trailImages[index]);
        // Cicla el array (cualquier longitud): vuelve a 0 tras el último.
        index = (index + 1) % trailImages.length;
      }
    };

    section.addEventListener("pointermove", onMove);
    return () => section.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="connect"
      aria-label="Connect"
      className="relative px-large py-section-large"
    >
      <Reveal className="flex flex-col items-center text-center">
        {/* Mismo texto que el marquee del Hero (mismo componente). Ancho completo,
            color tertiary (grey-400, ~8.9:1 sobre negro → AA) para legibilidad.
            El componente añade " –". */}
        <Marquee
          text="AVAILABLE FOR REMOTE ROLES"
          className="w-full text-text-tertiary"
        />

        <h1 className="mt-section-small text-h1 font-primary font-semibold text-text-heading">
          Let&rsquo;s connect
          {/* Dot de acento (primary-400), MISMO tratamiento que los títulos de
              About y Contact: span redondo en em (escala con el titular). */}
          <span
            aria-hidden="true"
            className="ml-[0.04em] inline-block h-[0.16em] w-[0.16em] rounded-full bg-primary-400 align-baseline"
          />
        </h1>

        <div className="mt-large flex flex-col items-center gap-medium">
          <PrimaryButton href={EMAIL_HREF} label="Send an email" />
          <ScheduleCallLink />
        </div>
      </Reveal>

      {/* Overlay del trail: fixed inset-0, pointer-events-none, por encima del
          contenido. Los clones (fixed + clientX/clientY) no necesitan cálculo
          de scroll. Solo se generan al mover el cursor DENTRO de la sección. */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40"
      />
    </section>
  );
}
