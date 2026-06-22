"use client";

import { motion, useReducedMotion } from "motion/react";
import Marquee from "@/components/Marquee";
import { entranceVariants } from "@/lib/motion";
import ContactCard from "./ContactCard";
import Globe from "./Globe";

// Sección Hero. La card (background-container) va sobre grey-1000 con una capa
// rgba(0,0,0,0.5); las bolas de gradiente (blend overlay) flotan detrás con CSS
// keyframes y el canto lleva un borde glass (.hero-card::before).
// El contenido entra al cargar con la MISMA animación que el menú hamburguesa
// (itemVariants: fade + y14 → 0, 0.4s easeOut), escalonado por `custom` (delay):
// eyebrow → h1 → marquee → ContactCard.
export default function Hero() {
  const reduce = useReducedMotion();

  // Animación de entrada compartida del sitio. El delay (custom) escalona.
  const itemVariants = entranceVariants(reduce);

  return (
    <section
      aria-label="Hero"
      className="mt-[var(--nav-height)] px-large pb-section-small"
    >
      {/* background-container. Padding móvil 3rem/1.5rem; 3rem (p-large) en desktop.
          .hero-card pinta el borde glass (1px gradiente) en el canto. */}
      <div className="hero-card relative overflow-hidden rounded-medium bg-grey-1000 px-[1.5rem] py-[3rem] md:p-large">
        {/* Capa oscura sobre el grey-1000 */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/50" />

        {/* Wrapper de las bolas (button-grad_gradient): opacity 0.8, radius 12px.
            El blend overlay se aísla dentro de este grupo (opacidad < 1). */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[12px] opacity-80"
        >
          <span
            className="hero-ball-warm absolute left-0 top-0 h-full w-[55%] rounded-full blur-[80px] mix-blend-overlay"
            style={{
              background:
                "linear-gradient(90deg, var(--color-yellow) 0%, var(--color-red) 100%)",
            }}
          />
          <span
            className="hero-ball-cool absolute right-0 top-0 h-full w-[55%] rounded-full blur-[80px] mix-blend-overlay"
            style={{
              background:
                "linear-gradient(78deg, var(--primary-900) 0%, var(--primary-500) 100%)",
            }}
          />
        </div>

        {/* Contenido: dos columnas 50/50. Parent del stagger de entrada. */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col gap-xlarge md:flex-row"
        >
          {/* Columna izquierda: globe (arriba), titular (medio), marquee (abajo).
              Gaps específicos: globe→h4 = 5rem (xxlarge); h4→marquee = 2rem (medium). */}
          <div className="flex w-full min-w-0 flex-col md:flex-1">
            <motion.div
              variants={itemVariants}
              custom={0.1}
              className="flex items-center gap-xsmall text-body-sm font-primary text-text-secondary"
            >
              <Globe className="inline-block h-5 w-5" />
              <span>USA based | Eastern Time</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              custom={0.25}
              className="mt-[2rem] max-w-xl text-h4 font-primary font-semibold text-text-heading md:mt-xxlarge"
            >
              Hey there!
              <br />
              I&apos;m Rachella, a Product Designer focused on helping people
              navigate complex systems under uncertainty
            </motion.h1>

            <motion.div variants={itemVariants} custom={0.4} className="mt-medium">
              <Marquee
                text="AVAILABLE FOR REMOTE ROLES"
                className="text-white/25"
              />
            </motion.div>
          </div>

          {/* Columna derecha: contact card anclada abajo a la derecha */}
          <motion.div
            variants={itemVariants}
            custom={0.55}
            className="flex w-full min-w-0 md:flex-1 md:items-end md:justify-end"
          >
            <ContactCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
