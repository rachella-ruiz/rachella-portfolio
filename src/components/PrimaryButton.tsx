import Link from "next/link";
import RollText from "@/components/RollText";

// Botón primario CANÓNICO del sitio.
//   - Fondo grey-200, texto black, estilo button-lg.
//   - Pill (radius 999px). Padding 1.125rem vertical / space-custom-1 (1.25rem)
//     horizontal. Layout flex, gap space-custom-2 (1.5rem) entre label y dot.
//   - Texto con el MISMO roll que los nav-links (RollText; el texto se anima, no
//     cambia de color).
//   - Dot primary-500 a la derecha; al hover dispara el ripple ping-wide UNA vez
//     (vía .pb-dot::after, ver globals.css).
export default function PrimaryButton({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-[var(--space-custom-2)] rounded-full bg-grey-200 px-[var(--space-custom-1)] py-[1.125rem] text-button-lg font-primary text-black ${className ?? ""}`}
    >
      <RollText label={label} />
      <span
        aria-hidden="true"
        className="pb-dot inline-flex h-2 w-2 rounded-full bg-primary-500"
      />
    </Link>
  );
}
