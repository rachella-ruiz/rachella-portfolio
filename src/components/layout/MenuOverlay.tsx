"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { Variants } from "motion/react";
import RollLink from "@/components/RollLink";

type MenuLink = { href: string; label: string };

const links: MenuLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

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

export default function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  // El backdrop entra con blur 0 → 16px.
  const backdropVariants: Variants = {
    hidden: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: { duration: reduce ? 0 : 0.3 },
    },
    visible: {
      opacity: 1,
      backdropFilter: reduce ? "blur(0px)" : "blur(16px)",
      transition: { duration: reduce ? 0 : 0.45, ease: "easeOut" },
    },
  };

  // El panel se expande desde la hamburguesa (origen arriba-derecha).
  const panelVariants: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.2, transition: { duration: 0.3, ease: "easeIn" } },
    visible: {
      opacity: 1,
      scale: 1,
      transition: reduce
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Contenidos escalonados: el delay define en qué momento entra cada uno.
  const itemVariants: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y: 14, transition: { duration: 0.2 } },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduce ? 0 : delay,
        duration: reduce ? 0 : 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop con blur; clic para cerrar */}
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            onClick={onClose}
            variants={backdropVariants}
            className="absolute inset-0 h-full w-full cursor-default bg-black/40"
          />

          {/* Panel que se expande desde la esquina superior derecha */}
          <motion.aside
            data-lenis-prevent
            variants={panelVariants}
            style={{ transformOrigin: "top right" }}
            className="absolute right-0 top-0 flex h-full w-full flex-col justify-between overflow-y-auto rounded-l-xxlarge bg-white p-medium text-grey-1000 sm:p-large md:w-1/2 md:max-w-3xl"
          >
            {/* Botón de cierre (entra al final, ~0.70s) */}
            <motion.div
              variants={itemVariants}
              custom={0.7}
              className="flex justify-end"
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar menú"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-grey-100 text-grey-900 transition-colors hover:bg-grey-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </motion.div>

            {/* Enlaces grandes (entran primero, ~0.30s) */}
            <motion.nav
              variants={itemVariants}
              custom={0.3}
              className="mt-large flex flex-col gap-small"
            >
              {links.map((link) => (
                <RollLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={onClose}
                  dotPosition="end"
                  className="text-h2 font-primary font-semibold text-grey-1000"
                />
              ))}
            </motion.nav>

            {/* Tarjeta oscura "Schedule call" (entra en medio, ~0.50s) */}
            <motion.div variants={itemVariants} custom={0.5} className="mt-large">
              <Link
                href="/contact"
                onClick={onClose}
                className="group relative block h-44 overflow-hidden rounded-large bg-grey-1000 text-grey-100"
              >
                {/* La imagen (eslabón completo) ocupa la mitad derecha,
                    proporcionada (object-contain), no recortada. */}
                <span className="pointer-events-none absolute inset-y-0 right-0 w-1/2">
                  <Image
                    src="/menu-link.avif"
                    alt=""
                    fill
                    aria-hidden="true"
                    sizes="(max-width: 640px) 45vw, 14rem"
                    className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </span>
                {/* Etiqueta con la flecha de /arrow.svg */}
                <span className="absolute left-medium top-medium z-10 inline-flex items-center gap-2 text-button-lg font-primary font-medium">
                  Schedule call
                  <ArrowIcon className="h-2.5 w-2.5" />
                </span>
              </Link>
            </motion.div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
