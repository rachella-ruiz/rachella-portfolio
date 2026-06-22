// Home. Hero (Paso 2) + Selected Work (Paso 3). ConnectCTA sigue de placeholder.
import Hero from "@/components/hero/Hero";
import SelectedWork from "@/components/work/SelectedWork";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="selected-work"
        aria-label="Selected Work"
        className="px-large py-section-small"
      >
        <SelectedWork />
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
