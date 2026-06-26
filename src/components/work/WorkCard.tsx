"use client";

import { cubicBezier, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import CursorFollowPill, {
  useCursorFollow,
} from "@/components/motion/CursorFollowPill";
import ProjectBadge from "@/components/ProjectBadge";
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

  // Etiqueta "VIEW WORK" que sigue al cursor (lógica compartida con Next case).
  const { x, y, onMouseMove } = useCursorFollow();

  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ translateY, rotateX, scale, transformOrigin: "center" }}
    >
      <Link
        href={`/work/${project.slug}`}
        onMouseMove={onMouseMove}
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

        {/* Badge de proyecto (componente compartido), abajo-izquierda. */}
        <ProjectBadge
          name={project.name}
          className="absolute bottom-medium left-medium z-10"
        />

        {/* "VIEW WORK" que sigue al cursor (fade in en hover; no bloquea el link). */}
        <CursorFollowPill x={x} y={y} label="View work" />
      </Link>
    </motion.div>
  );
}
