"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { entranceVariants } from "@/lib/motion";

// Reveal: entrada por scroll. Envuelve cualquier contenido y lo anima (fade +
// subida sutil) cuando entra en el viewport, reutilizando la animación de
// entrada COMPARTIDA del sitio (entranceVariants). Es el DEFAULT para secciones
// nuevas: cada bloque que aparece debería ir dentro de un <Reveal>.
//   - once: anima una sola vez (no se revierte al salir).
//   - amount 0.2: dispara cuando ~20% del bloque es visible.
//   - delay: escalona varios <Reveal> dentro de una misma sección.
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={entranceVariants(reduce)}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
