// En Next 16 `params` es un Promise: hay que await.
export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="mx-auto w-full max-w-6xl px-medium py-section-small">
      <p className="text-overline font-secondary uppercase text-text-tertiary">
        Proyecto
      </p>
      <h1 className="text-h2 font-primary text-text-heading">{slug}</h1>
    </section>
  );
}
