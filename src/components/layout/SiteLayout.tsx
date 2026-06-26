import ProgressiveBlur from "@/components/ProgressiveBlur";
import ConditionalFooter from "./ConditionalFooter";
import Footer from "./Footer";
import Nav from "./Nav";

// Envoltura común de las páginas del sitio: Nav arriba, contenido, Footer abajo.
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      {/* pt = alto del navbar fijo (variable compartida --nav-height) */}
      <main className="flex-1 pt-[var(--nav-height)]">{children}</main>
      {/* Footer en todas las rutas excepto /contact (ver ConditionalFooter). */}
      <ConditionalFooter>
        <Footer />
      </ConditionalFooter>
      {/* Desenfoque progresivo decorativo, fijo al borde inferior del viewport */}
      <ProgressiveBlur />
    </div>
  );
}
