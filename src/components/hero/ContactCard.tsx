"use client";

import { motion } from "motion/react";
import type { Transition } from "motion/react";
import Image from "next/image";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

// useLayoutEffect en cliente, useEffect en server (evita el warning de SSR).
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Lee si el dispositivo soporta hover (sin setState-en-effect).
const HOVER_QUERY = "(hover: hover)";
function subscribeHover(callback: () => void) {
  const mq = window.matchMedia(HOVER_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getHoverSnapshot() {
  return window.matchMedia(HOVER_QUERY).matches;
}
function getHoverServerSnapshot() {
  return true;
}

// Transición compartida (expandir y colapsar): 0.38s, ease-out cúbico.
const TRANSITION: Transition = {
  duration: 0.38,
  ease: [0.215, 0.61, 0.355, 1],
};

// Flecha ↗ (de /icons/arrow.svg) inline con currentColor.
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 9 9"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 1L1 8" />
      <path d="M2.91 1H8V6.09" />
    </svg>
  );
}

// Enlaces de la card: mismo tratamiento que los nav-links (button-lg,
// grey-300 por defecto y grey-100 al hover).
const LINK_CLASS =
  "font-primary text-button-sm text-grey-300 transition-colors hover:text-grey-100 md:text-button-lg";

// Tarjeta de contacto que se abre HACIA ARRIBA: la base/foto quedan ancladas
// abajo (items-end) y el alto extra aparece por encima.
//   - Foto: alto fijo = alto de la card CERRADA (medido), pegada a la base; no
//     crece ni se mueve.
//   - Panel glass: anima su alto entre cerrado y "auto" (crece hacia arriba).
//   - Contenido cerrado (nombre + rol) y abierto (email + Schedule a call)
//     ocupan la MISMA zona y hacen crossfade de opacidad (a la vez que el alto).
// Hover (desktop) expande; tap (móvil) alterna.
export default function ContactCard() {
  const [open, setOpen] = useState(false);
  const canHover = useSyncExternalStore(
    subscribeHover,
    getHoverSnapshot,
    getHoverServerSnapshot,
  );

  // Medimos el alto del contenido cerrado (nombre + rol) para fijar tanto la
  // foto como el alto del panel cerrado. ResizeObserver: el callback no dispara
  // la regla set-state-in-effect y la primera notificación llega antes del paint.
  const closedRef = useRef<HTMLDivElement>(null);
  const [closedH, setClosedH] = useState<number | null>(null);
  useIsoLayoutEffect(() => {
    const el = closedRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const h =
        entries[0]?.borderBoxSize?.[0]?.blockSize ?? el.offsetHeight;
      setClosedH(Math.round(h));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <motion.div
      onHoverStart={canHover ? () => setOpen(true) : undefined}
      onHoverEnd={canHover ? () => setOpen(false) : undefined}
      onTap={!canHover ? () => setOpen((o) => !o) : undefined}
      className="relative flex w-full items-end gap-2 md:w-[20rem]"
    >
      {/* Dot + ripple, en la esquina superior-derecha de la card. */}
      <span className="pointer-events-none absolute right-[1rem] top-[-0.15rem] z-20 flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping-wide rounded-full bg-primary-500" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500" />
      </span>

      {/* Foto: pegada a la base, alto = card cerrada (medido), no crece. */}
      <div
        className="relative w-16 shrink-0 overflow-hidden rounded-xsmall md:w-20"
        style={{ height: closedH ?? undefined }}
      >
        <Image
          src="/photo.jpg"
          alt="Rachella Ruiz"
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Panel glass: base anclada (la fila es items-end). Anima el alto entre
          cerrado (closedH) y abierto ("auto") → crece hacia arriba. El contenido
          va anclado abajo (justify-end) para que la base no se mueva. */}
      <motion.div
        animate={{ height: open ? "auto" : (closedH ?? "auto") }}
        transition={TRANSITION}
        className="relative flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-xsmall bg-[var(--opacity-20)] backdrop-blur-[20px]"
      >
        {/* Capa ABIERTA (email + Schedule a call): en flujo, define el alto
            "auto" del panel abierto. Crossfade de opacidad. */}
        <motion.div
          animate={{ opacity: open ? 1 : 0 }}
          transition={TRANSITION}
          aria-hidden={!open}
          style={{ pointerEvents: open ? "auto" : "none" }}
          className="p-small"
        >
          <p className="text-caption font-secondary uppercase tracking-overline text-text-tertiary">
            Email
          </p>
          <a
            href="mailto:rachellaruiz@gmail.com"
            className={`block whitespace-nowrap ${LINK_CLASS}`}
          >
            rachellaruiz@gmail.com
          </a>
          <div className="my-xsmall border-t border-dashed border-white/25" />
          <p className="text-caption font-secondary uppercase tracking-overline text-text-tertiary">
            Call
          </p>
          <a
            href="https://calendly.com/rachellaruiz/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 ${LINK_CLASS}`}
          >
            Schedule a call
            <ArrowIcon className="h-2.5 w-2.5" />
          </a>
        </motion.div>

        {/* Capa CERRADA (nombre + rol): superpuesta y anclada abajo (misma zona),
            crossfade inverso. Se mide para fijar foto y alto cerrado. */}
        <motion.div
          ref={closedRef}
          animate={{ opacity: open ? 0 : 1 }}
          transition={TRANSITION}
          aria-hidden={open}
          style={{ pointerEvents: open ? "none" : "auto" }}
          className="absolute inset-x-0 bottom-0 p-small"
        >
          <p className="text-body font-semibold text-text-heading">
            Contact Rachella
          </p>
          <p className="text-body-sm text-text-tertiary">Product Designer</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
