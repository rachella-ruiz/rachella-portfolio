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

// Enlaces de la card: mismo tratamiento que los nav-links (button-lg,
// grey-300 por defecto y grey-100 al hover).
const LINK_CLASS =
  "font-primary text-button-sm text-grey-300 transition-colors hover:text-grey-100 md:text-button-lg";

// Tarjeta de contacto en DOS zonas:
//   1) Fila SIEMPRE visible (items-stretch): foto + cabecera (nombre + rol).
//      La foto NO tiene alto fijo: estira para igualar el alto de la fila
//      (= alto de la card cerrada) y recorta con object-cover.
//   2) Zona expandible HERMANA, debajo de la fila: email + "Schedule a call".
//      Al desplegar crece hacia abajo, sin afectar a la foto ni a la fila.
// En hover (desktop) se expande; en touch (móvil) un tap alterna el estado.
export default function ContactCard() {
  const [open, setOpen] = useState(false);
  const canHover = useSyncExternalStore(
    subscribeHover,
    getHoverSnapshot,
    getHoverServerSnapshot,
  );

  return (
    <motion.div
      onHoverStart={canHover ? () => setOpen(true) : undefined}
      onHoverEnd={canHover ? () => setOpen(false) : undefined}
      onTap={!canHover ? () => setOpen((o) => !o) : undefined}
      className="relative flex w-full flex-col md:w-[20rem]"
    >
      {/* Dot + ripple. Anclado a la esquina superior-derecha de la card; como la
          fila de arriba no cambia de alto, esta esquina es estable y no salta. */}
      <span className="pointer-events-none absolute right-[1rem] top-[-0.15rem] z-20 flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping-wide rounded-full bg-primary-500" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500" />
      </span>

      {/* Zona 1: fila foto + cabecera. items-stretch → la foto iguala el alto. */}
      <div className="flex items-stretch gap-2">
        {/* Foto: ancho fijo, SIN alto fijo (estira a la fila), recorta cover. */}
        <div className="relative w-16 shrink-0 overflow-hidden rounded-xsmall md:w-20">
          <Image
            src="/photo.jpg"
            alt="Rachella Ruiz"
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        {/* Cabecera glass: define el alto de la fila (= card cerrada). */}
        <div className="flex flex-1 flex-col justify-center rounded-xsmall bg-[var(--opacity-20)] px-small py-small backdrop-blur-[20px]">
          <p className="text-body font-semibold text-text-heading">
            Contact Rachella
          </p>
          <p className="text-body-sm text-text-tertiary">Product Designer</p>
        </div>
      </div>

      {/* Zona 2: expandible debajo. Crece en alto (0 → auto) hacia abajo. */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="expand"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-2 rounded-xsmall bg-[var(--opacity-20)] p-small backdrop-blur-[20px]">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
