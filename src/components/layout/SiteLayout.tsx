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
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
