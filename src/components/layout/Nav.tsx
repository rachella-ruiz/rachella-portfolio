"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import MenuOverlay from "./MenuOverlay";

// Link del nav con dos efectos en hover (además del aclarado de texto):
//  1) un punto morado que aparece encima (scale + opacity).
//  2) un "roll" vertical: dos copias del label; al hover una sube y sale
//     mientras la otra entra desde abajo. Todo con CSS, reversible.
function NavLink({
  href,
  label,
  badge,
}: {
  href: string;
  label: string;
  badge?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center text-button-lg font-primary text-text-secondary transition-colors hover:text-text-primary"
    >
      {/* Punto morado encima del link */}
      <span className="pointer-events-none absolute -top-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 scale-0 rounded-full bg-primary-500 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />

      {/* Roll vertical: dos copias apiladas */}
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-[400ms] ease-out group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-[400ms] ease-out group-hover:translate-y-0">
          {label}
        </span>
      </span>

      {badge}
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-transparent">
        <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-large py-small">
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

          {/* Grupo derecho: links (desktop) + hamburguesa */}
          <div className="flex items-center gap-large">
            <div className="hidden items-center gap-large md:flex">
              <NavLink href="/about" label="About" />
              <NavLink
                href="/work"
                label="Work"
                badge={
                  <span className="absolute -right-4 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-500 px-1 text-[0.625rem] font-medium leading-none text-white">
                    {projects.length}
                  </span>
                }
              />
              <NavLink href="/contact" label="Contact" />
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
