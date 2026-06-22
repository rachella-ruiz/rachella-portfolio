"use client";

import {
  cubicBezier,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Project } from "@/data/projects";

// Ease-out cúbico (mismo del sitio) para el translateY ligado al scroll.
const easeOutCubic = cubicBezier(0.215, 0.61, 0.355, 1);

// Card de proyecto. Réplica de "Work list - Item scroll" de Webflow: la
// transform va LIGADA al progreso de scroll de la card (reversible, continua),
// sin fades. Etiqueta "VIEW WORK" que sigue al cursor con motion values.
export default function WorkCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 0% entra desde 100vh abajo → 50% en su sitio → 100% se mantiene/encoge.
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100vh", "0vh", "0vh"],
    { ease: [easeOutCubic, easeOutCubic] },
  );
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.9]);

  // Posición del cursor (motion values → no re-renderiza por píxel).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ translateY, rotateX, scale, transformOrigin: "center" }}
    >
      <Link
        href={`/work/${project.slug}`}
        onMouseMove={handleMove}
        aria-label={project.name}
        className="group relative block aspect-[16/9] cursor-pointer overflow-hidden rounded-large bg-grey-800"
      >
        {/* Imagen (cover). Fallback grey-800 con la misma aspect-ratio. */}
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div aria-hidden="true" className="absolute inset-0 bg-grey-800" />
        )}

        {/* Pill abajo-izquierda: dot + nombre (glass oscuro). */}
        <span className="absolute bottom-medium left-medium z-10 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-primary-500"
          />
          <span className="text-body-sm font-medium text-white">
            {project.name}
          </span>
        </span>

        {/* "VIEW WORK" que sigue al cursor (fade in en hover; no bloquea el link). */}
        <motion.div
          style={{ x: mx, y: my }}
          className="pointer-events-none absolute left-0 top-0 z-20"
        >
          <span className="inline-block -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-1.5 text-overline font-secondary uppercase tracking-overline text-white opacity-0 backdrop-blur-md transition-opacity duration-300 ease-out group-hover:opacity-100">
            View work
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
