"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RollLink from "@/components/RollLink";
import { projects } from "@/data/projects";
import MenuOverlay from "./MenuOverlay";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar fija arriba, fondo negro, borde inferior 1px grey-600.
          El contenido se compensa con padding-top en SiteLayout.
          Al abrir el menú se oculta para dejar libre la X del overlay. */}
      <header
        className={`fixed inset-x-0 top-0 z-[100] w-full border-b border-grey-600 bg-black transition-opacity duration-300 ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <nav className="flex w-full items-center justify-between px-large py-2">
          {/* Logo */}
          <Link href="/" aria-label="Inicio" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="Rachella Ruiz"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
          </Link>

          {/* navbar_links: fila, a la derecha, centrado, gap 2rem */}
          <div className="flex items-center justify-end gap-medium">
            <div className="hidden items-center gap-medium md:flex">
              <RollLink
                href="/about"
                label="About"
                className="text-button-lg font-primary text-text-secondary"
              />
              {/* Work: excepción del navbar — roll sin punto; lleva badge data-driven */}
              <RollLink
                href="/work"
                label="Work"
                showDot={false}
                className="text-button-lg font-primary text-text-primary"
                badge={
                  <span className="absolute -right-4 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-500 px-1 text-[0.625rem] font-medium leading-none text-white">
                    {projects.length}
                  </span>
                }
              />
              <RollLink
                href="/contact"
                label="Contact"
                className="text-button-lg font-primary text-text-secondary"
              />
            </div>

            {/* Hamburguesa de 2 líneas (siempre visible) */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-2 text-text-primary"
            >
              <span className="h-0.5 w-6 bg-current" />
              <span className="h-0.5 w-6 bg-current" />
            </button>
          </div>
        </nav>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
