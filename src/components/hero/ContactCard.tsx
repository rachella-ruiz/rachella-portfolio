"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

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

// Tarjeta de contacto (glass). Colapsada: foto + nombre/rol + dot con ping.
// En hover se expande (Framer Motion: layout + crossfade) y revela email + call.
export default function ContactCard() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      className="relative flex items-center gap-small rounded-large border border-white/15 bg-white/10 p-2 backdrop-blur-md"
    >
      {/* Dot con ping (esquina superior derecha) */}
      <span className="pointer-events-none absolute -right-1 -top-1 flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500" />
      </span>

      {/* Foto */}
      <Image
        src="/photo.jpg"
        alt="Rachella Ruiz"
        width={80}
        height={80}
        className="h-20 w-20 shrink-0 rounded-medium object-cover"
      />

      {/* Contenido: crossfade entre colapsado y expandido */}
      <div className="px-xsmall">
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="min-w-[15rem] pr-small"
            >
              <p className="text-caption font-secondary uppercase tracking-overline text-text-tertiary">
                Email
              </p>
              <a
                href="mailto:rachellaruiz@gmail.com"
                className="block text-body font-medium text-text-heading"
              >
                rachellaruiz@gmail.com
              </a>
              <div className="my-xsmall border-t border-dashed border-white/20" />
              <p className="text-caption font-secondary uppercase tracking-overline text-text-tertiary">
                Call
              </p>
              <a
                href="https://calendly.com/rachellaruiz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-body font-medium text-text-heading"
              >
                Schedule a call
                <ArrowIcon className="h-2.5 w-2.5" />
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="closed"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pr-small"
            >
              <p className="text-body font-semibold text-text-heading">
                Contact Rachella
              </p>
              <p className="text-body-sm text-text-tertiary">Product Designer</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
