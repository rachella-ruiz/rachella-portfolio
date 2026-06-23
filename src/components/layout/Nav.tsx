"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import RollLink from "@/components/RollLink";
import { projects } from "@/data/projects";
import MenuOverlay from "./MenuOverlay";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Página actual: Work activo en /work y /work/* (nested); el resto, exacto.
  const isActive = (href: string, nested = false) =>
    nested ? pathname === href || pathname.startsWith(`${href}/`) : pathname === href;

  // Activo = color de hover persistente (grey-100); inactivo = grey-300 con
  // hover a grey-100. Solo color: la animación de roll sigue solo en hover.
  const navLinkClass = (href: string, nested = false) =>
    `text-button-lg font-primary transition-colors ${
      isActive(href, nested)
        ? "text-grey-100"
        : "text-grey-300 hover:text-grey-100"
    }`;

  return (
    <>
      {/* Navbar fija arriba, fondo negro, borde inferior 1px grey-600.
          El contenido se compensa con padding-top en SiteLayout.
          Al abrir el menú se oculta para dejar libre la X del overlay. */}
      <header
        className={`fixed inset-x-0 top-0 z-[100] w-full border-b border-dotted border-grey-600 bg-black transition-opacity duration-300 ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <nav className="flex w-full items-center justify-between px-large py-2">
          {/* Logo */}
          <Link href="/" aria-label="Inicio" className="shrink-0">
            <Image
              src="/brand/logo.svg"
              alt="Rachella Ruiz"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
          </Link>

          {/* navbar_links: fila, a la derecha, centrado, gap 2rem */}
          <div className="flex items-center justify-end gap-medium">
            <div className="hidden items-center gap-[2.25rem] md:flex">
              <RollLink
                href="/about"
                label="About"
                active={isActive("/about")}
                className={navLinkClass("/about")}
              />
              {/* Work: excepción del navbar — roll sin punto; lleva badge data-driven.
                  Activo en /work y /work/* (nested). */}
              <RollLink
                href="/work"
                label="Work"
                showDot={false}
                active={isActive("/work", true)}
                className={navLinkClass("/work", true)}
                badge={
                  <span className="absolute -right-4 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-400 px-1 text-[0.625rem] font-medium leading-none text-white">
                    {projects.length}
                  </span>
                }
              />
              <RollLink
                href="/contact"
                label="Contact"
                active={isActive("/contact")}
                className={navLinkClass("/contact")}
              />
            </div>

            {/* Hamburguesa de 2 líneas (siempre visible) */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-grey-300 transition-colors hover:text-grey-100"
            >
              <span className="h-0.5 w-8 bg-current" />
              <span className="h-0.5 w-8 bg-current" />
            </button>
          </div>
        </nav>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
