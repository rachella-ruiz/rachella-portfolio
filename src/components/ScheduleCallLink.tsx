import Link from "next/link";
import { SCHEDULE_CALL_HREF } from "@/data/contact";

// Flecha ↗ (idéntica a la del Connect CTA del home).
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 9 9"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 1L1 8" />
      <path d="M2.91 1H8V6.09" />
    </svg>
  );
}

// "Schedule a call ↗": text-link compartido por el Connect CTA del home y la
// página /contact (mismo tratamiento, no se inventan estilos nuevos). href
// centralizado en data/contact. Externo → abre en pestaña nueva.
export default function ScheduleCallLink() {
  return (
    <Link
      href={SCHEDULE_CALL_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-grey-800 px-[var(--space-custom-1)] py-[1.125rem] text-button-lg font-primary text-grey-100 transition-colors hover:text-grey-300"
    >
      Schedule a call
      <ArrowIcon className="h-2.5 w-2.5" />
    </Link>
  );
}
