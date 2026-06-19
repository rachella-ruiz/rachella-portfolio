"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type MenuLink = { href: string; label: string; dot?: boolean };

const links: MenuLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work", dot: true },
  { href: "/contact", label: "Contact" },
];

export default function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Fondo que se desvanece; clic para cerrar */}
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-black/50"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.3 }}
          />

          {/* Panel que entra deslizándose desde la derecha */}
          <motion.aside
            data-lenis-prevent
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col justify-between overflow-y-auto rounded-l-xxlarge bg-white p-medium text-grey-1000 sm:p-large"
            variants={{ hidden: { x: "100%" }, visible: { x: 0 } }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
          >
            {/* Botón de cierre */}
            <div className="flex justify-end">
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
            </div>

            {/* Enlaces grandes */}
            <nav className="mt-large flex flex-col gap-small">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-h2 font-primary font-semibold text-grey-1000 transition-colors hover:text-primary-500"
                >
                  <span className="relative inline-block">
                    {link.label}
                    {link.dot && (
                      <span className="absolute -right-3 top-1 h-2 w-2 rounded-full bg-primary-500" />
                    )}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Tarjeta oscura "Schedule call" con imagen que se amplía al hover */}
            <Link
              href="/contact"
              onClick={onClose}
              className="group relative mt-large flex h-44 items-start overflow-hidden rounded-large bg-grey-1000 p-medium text-grey-100"
            >
              <span className="text-button-lg font-primary font-medium">
                Schedule call ↗
              </span>
              <Image
                src="/menu-link.avif"
                alt=""
                width={220}
                height={160}
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-2 h-auto w-44 origin-bottom-right object-contain transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </Link>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
