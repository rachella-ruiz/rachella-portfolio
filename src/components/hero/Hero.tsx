import Marquee from "@/components/Marquee";
import ContactCard from "./ContactCard";
import Globe from "./Globe";

// Sección Hero: card redondeada (radius medium) sobre grey-1000 con una capa
// oscura y un halo de borde sutil. Detrás del contenido, dos "bolas" de
// gradiente borrosas (mix-blend screen) que flotan con CSS keyframes.
export default function Hero() {
  return (
    <section aria-label="Hero" className="px-large pb-section-small pt-medium">
      <div className="relative overflow-hidden rounded-medium bg-grey-1000 p-large shadow-[0_0_6px_0_rgba(255,255,255,0.3)]">
        {/* Fondo animado: capa oscura + dos bolas de gradiente (screen) */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/50">
          <span
            className="hero-ball-warm absolute left-0 top-0 h-full w-[55%] rounded-full blur-[80px] mix-blend-screen"
            style={{
              background:
                "linear-gradient(90deg, var(--color-yellow), var(--color-red))",
            }}
          />
          <span
            className="hero-ball-cool absolute right-0 top-0 h-full w-[55%] rounded-full blur-[80px] mix-blend-screen"
            style={{
              background:
                "linear-gradient(78deg, var(--primary-900), var(--primary-500))",
            }}
          />
        </div>

        {/* Contenido: dos columnas 50/50 */}
        <div className="relative z-10 flex flex-col gap-xlarge md:min-h-[32rem] md:flex-row">
          {/* Columna izquierda: globe (arriba), titular (medio), marquee (abajo) */}
          <div className="flex w-full min-w-0 flex-col justify-between gap-xxlarge md:flex-1">
            <div className="flex items-center gap-xsmall text-body-sm font-primary text-text-secondary">
              <Globe className="inline-block h-5 w-5" />
              <span>USA based | Eastern Time</span>
            </div>

            <h1 className="max-w-xl text-h4 font-primary font-semibold text-text-heading">
              Hey there!
              <br />
              I&apos;m Rachella, a Product Designer focused on helping people
              navigate complex systems under uncertainty
            </h1>

            <Marquee
              text="AVAILABLE FOR REMOTE ROLES"
              className="text-white/25"
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
