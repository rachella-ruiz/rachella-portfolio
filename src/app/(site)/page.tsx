// Home. Hero (Paso 2) + Selected Work (Paso 3) + Connect CTA (Paso 4).
import ConnectCTA from "@/components/connect/ConnectCTA";
import Hero from "@/components/hero/Hero";
import SelectedWork from "@/components/work/SelectedWork";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="selected-work"
        aria-label="Selected Work"
        className="mt-[var(--space-xhuge)] px-large pb-section-small"
      >
        <SelectedWork />
      </section>

      <ConnectCTA />
    </>
  );
}
