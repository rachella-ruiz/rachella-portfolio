import Marquee from "@/components/Marquee";
import ContactCard from "./ContactCard";
import Globe from "./Globe";

// Sección Hero: card (background-container) sobre grey-1000 con una capa
// rgba(0,0,0,0.5) y un halo de borde. Las bolas de gradiente van dentro de un
// wrapper a 80% de opacidad (clave para el color) con blend overlay; flotan
// con CSS keyframes detrás del contenido.
export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="mt-xhuge px-large pb-section-small"
    >
      {/* background-container */}
      <div className="relative overflow-hidden rounded-medium bg-grey-1000 p-large shadow-[0_0_6px_0_rgba(255,255,255,0.3)]">
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

        {/* Contenido: dos columnas 50/50 */}
        <div className="relative z-10 flex flex-col gap-xlarge md:flex-row">
          {/* Columna izquierda: globe (arriba), titular (medio), marquee (abajo).
              Gaps específicos: globe→h4 = 5rem (xxlarge); h4→marquee = 2rem (medium). */}
          <div className="flex w-full min-w-0 flex-col md:flex-1">
            <div className="flex items-center gap-xsmall text-body-sm font-primary text-text-secondary">
              <Globe className="inline-block h-5 w-5" />
              <span>USA based | Eastern Time</span>
            </div>

            <h1 className="mt-xxlarge max-w-xl text-h4 font-primary font-semibold text-text-heading">
              Hey there!
              <br />
              I&apos;m Rachella, a Product Designer focused on helping people
              navigate complex systems under uncertainty
            </h1>

            <Marquee
              text="AVAILABLE FOR REMOTE ROLES"
              className="mt-medium text-white/25"
            />
          </div>

          {/* Columna derecha: contact card anclada abajo a la derecha */}
          <div className="flex w-full min-w-0 md:flex-1 md:items-end md:justify-end">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
}
