import type { Variants } from "motion/react";

// Animación de entrada COMPARTIDA del sitio y principio de movimiento por
// defecto: los elementos entran con fade + una subida sutil (y 14 → 0) en 0.4s
// ease-out. Se reutiliza en todas partes:
//   - al hacer scroll, cuando entran al viewport (componente <Reveal>),
//   - al montar, en contenido above-the-fold (hero) y al abrir el menú.
// `visible` acepta un delay (vía `custom`) para escalonar varios elementos.
// Respeta prefers-reduced-motion (sin desplazamiento, sin duración).
export function entranceVariants(reduce: boolean | null): Variants {
  return {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y: 14, transition: { duration: 0.2 } },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduce ? 0 : delay,
        duration: reduce ? 0 : 0.4,
        ease: "easeOut",
      },
    }),
  };
}
