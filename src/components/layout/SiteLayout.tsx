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
      {/* pt = alto del navbar fijo (logo 2.5rem + py 1rem + borde 1px) */}
      <main className="flex-1 pt-[calc(2.5rem+1rem+1px)]">{children}</main>
      <Footer />
    </div>
  );
}
