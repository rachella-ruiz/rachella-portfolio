"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
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

  // El shell se expande desde la hamburguesa (origen arriba-derecha).
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

          {/* Shell externo "menu": 50vw × 100vh, padding 0.75rem (único padding del shell).
              Es el gap entre el borde del viewport y la card blanca. */}
          <motion.aside
            data-lenis-prevent
            variants={panelVariants}
            style={{ transformOrigin: "top right" }}
            className="absolute right-0 top-0 h-full w-full overflow-hidden p-3 md:w-1/2"
          >
            {/* Card interna "menu_content": blanca, flex col, space-between, gap 2rem,
                altura 100% del shell, padding 5rem 2.25rem 2.25rem. */}
            <div className="relative flex h-full w-full flex-col items-start justify-between gap-medium overflow-hidden rounded-xxlarge bg-white px-[2.25rem] pb-[2.25rem] pt-xxlarge text-grey-1000">
              {/* Botón de cierre 4rem (absoluto arriba-derecha; entra al final ~0.70s) */}
              <motion.div
                variants={itemVariants}
                custom={0.7}
                className="absolute right-[2.25rem] top-[2.25rem]"
              >
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar menú"
                  className="flex h-xlarge w-xlarge items-center justify-center rounded-full bg-grey-100 p-0 text-grey-900 transition-colors hover:bg-grey-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
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

              {/* Enlaces (arriba; entran primero ~0.30s) */}
              {/* pr-medium alinea los puntos (al final de cada link) con el
                  centro de la X de cierre y con el borde de la tarjeta. */}
              <motion.nav
                variants={itemVariants}
                custom={0.3}
                className="flex w-full flex-col gap-small pr-medium"
              >
                {links.map((link) => (
                  <RollLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    onClick={onClose}
                    dotPosition="end"
                    className="text-h3 font-primary font-semibold text-grey-1000"
                  />
                ))}
              </motion.nav>

              {/* Tarjeta negra "Schedule call" (abajo; entra ~0.50s).
                  Imagen transparente con object-contain (eslabón completo), anclada
                  a la derecha, llenando el área de la tarjeta (inset-0). */}
              <motion.div
                variants={itemVariants}
                custom={0.5}
                className="w-full pr-medium"
              >
                <a
                  href="https://calendly.com/rachellaruiz/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="group relative block h-44 overflow-hidden rounded-large bg-black text-grey-300 transition-colors hover:text-grey-100"
                >
                  <Image
                    src="/menu-link2.avif"
                    alt=""
                    fill
                    aria-hidden="true"
                    sizes="(max-width: 640px) 90vw, 28rem"
                    className="object-contain object-right transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  {/* Etiqueta con la flecha de /arrow.svg — hereda el color del
                      enlace (grey-300 normal, grey-100 en hover). */}
                  <span className="absolute left-medium top-medium z-10 inline-flex items-center gap-2 text-button-lg font-primary font-medium">
                    Schedule call
                    <ArrowIcon className="h-2.5 w-2.5" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
