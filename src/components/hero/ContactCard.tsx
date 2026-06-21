"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState, useSyncExternalStore } from "react";

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

// Flecha ↗ (de /arrow.svg) inline con currentColor.
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

// Tarjeta de contacto: foto FIJA a la izquierda + panel glass a la derecha.
// El panel mantiene su ancho y crece SOLO en altura hacia arriba (anclado abajo).
// En hover (desktop) se expande; en touch (móvil) un tap alterna el estado.
export default function ContactCard() {
  const [open, setOpen] = useState(false);
  const canHover = useSyncExternalStore(
    subscribeHover,
    getHoverSnapshot,
    getHoverServerSnapshot,
  );

  // Variants: el contenido "rueda" hacia arriba al abrir y hacia abajo al cerrar.
  const open_v = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 12 } };
  const closed_v = { initial: { opacity: 0, y: -12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -12 } };

  return (
    <motion.div
      onHoverStart={canHover ? () => setOpen(true) : undefined}
      onHoverEnd={canHover ? () => setOpen(false) : undefined}
      onTap={!canHover ? () => setOpen((o) => !o) : undefined}
      className="relative flex w-full items-end gap-small md:w-auto"
    >
      {/* Dot con ping ancho (fuera del panel para que el pulso no se recorte) */}
      <span className="pointer-events-none absolute right-1 top-1 z-10 flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping-wide rounded-full bg-primary-500" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500" />
      </span>

      {/* Foto fija (no se mueve al expandir) */}
      <Image
        src="/photo.jpg"
        alt="Rachella Ruiz"
        width={80}
        height={80}
        className="h-20 w-20 shrink-0 rounded-medium object-cover"
      />

      {/* Panel glass: ancho fijo, altura animada (layout) */}
      <motion.div
        layout
        transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
        className="relative min-w-0 flex-1 overflow-hidden rounded-xsmall bg-white/20 p-small backdrop-blur-[20px] md:w-[13rem] md:flex-none"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {open ? (
            <motion.div
              key="open"
              variants={open_v}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <p className="text-caption font-secondary uppercase tracking-overline text-text-tertiary">
                Email
              </p>
              <a
                href="mailto:rachellaruiz@gmail.com"
                className="block break-all text-body-sm font-medium text-text-heading md:whitespace-nowrap md:break-normal"
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
                className="inline-flex items-center gap-1.5 text-body-sm font-medium text-text-heading"
              >
                Schedule a call
                <ArrowIcon className="h-2.5 w-2.5" />
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="closed"
              variants={closed_v}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <p className="text-body font-semibold text-text-heading">
                Contact Rachella
              </p>
              <p className="text-body-sm text-text-tertiary">Product Designer</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
