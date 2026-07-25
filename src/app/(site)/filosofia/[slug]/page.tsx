import { notFound } from "next/navigation";

import { PageSection } from "@/components/site/page-section";
import { dharmaTopics } from "@/content/dharma";

export function generateStaticParams() {
  return dharmaTopics.map(({ slug }) => ({ slug }));
}

export default async function DharmaArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = dharmaTopics.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <PageSection
      eyebrow={`Dharma · ${article.readingTime}`}
      title={article.title}
      description={article.excerpt}
    >
      <article className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card p-7 sm:p-12">
        <p className="font-heading text-3xl italic leading-relaxed text-primary">
          Una invitación a estudiar sin apuro y a comprobar cada enseñanza en la propia
          experiencia.
        </p>
        <div className="mt-10 space-y-6 text-lg leading-8 text-muted-foreground">
          <p>
            Este espacio editorial está preparado para alojar los textos completos de Maitri,
            preservando su voz, sus fuentes y el contexto de la tradición que los inspira.
          </p>
          <p>
            Antes de publicar cada artículo definitivo vamos a validar autoría, referencias y
            enfoque con las personas responsables de la enseñanza.
          </p>
        </div>
      </article>
    </PageSection>
  );
}
