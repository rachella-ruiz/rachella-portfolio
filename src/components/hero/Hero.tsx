import Marquee from "@/components/Marquee";
import GlobeIcon from "@/components/icons/GlobeIcon";
import ContactCard from "./ContactCard";

// Sección Hero: card grande redondeada, fondo oscuro, con dos "bolas" de
// gradiente borrosas que flotan (CSS keyframes) detrás del contenido.
export default function Hero() {
  return (
    <section aria-label="Hero" className="px-large pb-section-small pt-medium">
      <div className="relative overflow-hidden rounded-ultra bg-grey-1000">
        {/* Fondo animado: dos bolas de gradiente borrosas */}
        <div aria-hidden="true" className="absolute inset-0">
          <span
            className="hero-ball-warm absolute left-0 top-0 h-full w-[55%] rounded-full blur-[80px] mix-blend-overlay"
            style={{
              background:
                "linear-gradient(90deg, var(--color-yellow), var(--color-red))",
            }}
          />
          <span
            className="hero-ball-cool absolute right-0 top-0 h-full w-[55%] rounded-full blur-[80px] mix-blend-overlay"
            style={{
              background:
                "linear-gradient(78deg, var(--primary-900), var(--primary-500))",
            }}
          />
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col p-large md:min-h-[40rem] md:p-xlarge">
          {/* Ubicación */}
          <div className="flex items-center gap-xsmall text-body-sm font-primary text-text-secondary">
            <GlobeIcon className="h-4 w-4" />
            <span>USA based | Eastern Time</span>
          </div>

          {/* Titular */}
          <h1 className="mt-xlarge max-w-2xl text-h4 font-primary font-semibold text-text-heading md:text-h3">
            Hey there!
            <br />
            I&apos;m Rachella, a Product Designer focused on helping people
            navigate complex systems under uncertainty
          </h1>

          {/* Marquee, tenue, hacia el fondo */}
          <div className="mt-large md:mt-auto md:pt-xxlarge">
            <Marquee
              text="AVAILABLE FOR REMOTE ROLES"
              className="text-white/20"
            />
          </div>

          {/* Contact card: apilada en móvil, abajo-derecha en desktop */}
          <div className="mt-large md:absolute md:bottom-large md:right-large md:mt-0">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
}
