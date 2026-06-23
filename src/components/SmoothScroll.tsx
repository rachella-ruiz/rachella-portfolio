"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Inicializa Lenis una sola vez al montar y lo limpia al desmontar.
// Si el usuario prefiere movimiento reducido, no se activa (accesibilidad).
// Además, en cada cambio de ruta resetea el scroll al tope (Lenis no lo hace
// solo en navegaciones client-side, así que la posición anterior persistía).
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
      infinite: false,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Al cambiar de ruta, vuelve al tope INMEDIATAMENTE (sin animar).
  useEffect(() => {
    // 1) Resetea el estado interno de Lenis para que no restaure la posición
    //    anterior en su próximo frame. immediate = sin animación; force = aunque
    //    esté stopped/locked. (No-op si no hay Lenis: reduced-motion.)
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    // 2) Salto duro del scroll del documento: garantiza el tope al instante y
    //    cubre el caso sin Lenis. Ambos apuntan a 0 → sin parpadeo.
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
