import type { Metadata } from "next";
import { ArrowRight, BookOpen, CircleDot, Footprints } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PageSection } from "@/components/site/page-section";
import { dharmaTopics } from "@/content/dharma";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Filosofía y Dharma",
  description: "Enseñanzas contemplativas y artículos para acompañar la práctica en Maitri.",
  path: "/filosofia",
});

export default function PhilosophyPage() {
  return (
    <PageSection
      eyebrow="Filosofía & Dharma"
      title="La práctica también continúa fuera del mat."
      description="Una biblioteca viva para acercarnos a la meditación y a enseñanzas budistas con respeto, contexto y curiosidad."
    >
      <div className="mb-10 grid overflow-hidden rounded-[2rem] bg-secondary/35 md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-80">
          <Image
            src="/images/maitri-dharma-art.webp"
            alt="Ilustración artística de una postura de yoga"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <blockquote className="flex items-center p-8 font-heading text-4xl italic leading-tight text-primary sm:p-12 sm:text-5xl">
          Estudiar para mirar más profundo. Practicar para volverlo experiencia.
        </blockquote>
      </div>
      <div className="mb-14 grid gap-4 md:grid-cols-3">
        {[
          [
            CircleDot,
            "Cuatro Nobles Verdades",
            "Una mirada honesta sobre el sufrimiento y su transformación.",
          ],
          [
            Footprints,
            "Camino Óctuple",
            "Orientaciones para cultivar ética, atención y sabiduría.",
          ],
          [
            BookOpen,
            "Meditación",
            "Prácticas sencillas para observar y relacionarnos con la experiencia.",
          ],
        ].map(([Icon, title, body]) => (
          <article key={String(title)} className="rounded-[2rem] bg-secondary/45 p-7">
            <Icon className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-8 font-heading text-3xl font-semibold">{String(title)}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{String(body)}</p>
          </article>
        ))}
      </div>
      <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2">
        {dharmaTopics.map((article) => (
          <article key={article.slug} className="flex min-h-64 flex-col bg-card p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Lectura · {article.readingTime}
            </p>
            <h2 className="mt-5 font-heading text-3xl font-semibold">{article.title}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{article.excerpt}</p>
            <Link
              href={`/filosofia/${article.slug}`}
              className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 font-medium text-primary"
            >
              Leer artículo <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
