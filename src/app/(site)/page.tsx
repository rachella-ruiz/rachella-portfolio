// Home. Hero construido (Paso 2); SelectedWork y ConnectCTA siguen como
// placeholders con el espaciado de sección.
import Hero from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="selected-work"
        aria-label="Selected Work"
        className="mx-auto w-full max-w-6xl px-medium py-section-small"
      >
        <div className="min-h-[60vh]" />
      </section>

      <section
        id="connect"
        aria-label="Connect"
        className="mx-auto w-full max-w-6xl px-medium py-section-small"
      >
        <div className="min-h-[40vh]" />
      </section>
    </>
  );
}
