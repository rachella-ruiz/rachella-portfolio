"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import MenuOverlay from "./MenuOverlay";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-transparent">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-medium py-small">
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

          {/* Links desktop */}
          <div className="hidden items-center gap-large md:flex">
            <Link
              href="/about"
              className="text-button-sm font-primary font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              About
            </Link>
            <Link
              href="/work"
              className="relative text-button-sm font-primary font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Work
              <span className="absolute -right-4 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-500 px-1 text-[0.625rem] font-medium leading-none text-white">
                {projects.length}
              </span>
            </Link>
            <Link
              href="/contact"
              className="text-button-sm font-primary font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Contact
            </Link>
          </div>

          {/* Hamburguesa (siempre visible) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-text-primary md:ml-large"
          >
            <span className="h-0.5 w-6 bg-current" />
            <span className="h-0.5 w-6 bg-current" />
            <span className="h-0.5 w-6 bg-current" />
          </button>
        </nav>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
