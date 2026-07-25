import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ClassPreviewCard } from "@/components/site/class-card";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { buttonVariants } from "@/components/ui/button";
import { faqs } from "@/content/faq";
import { quickActions } from "@/content/navigation";
import { classTypes, valueProps } from "@/content/practices";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Maitri Yoga Flow | Yoga y meditación en Recoleta",
  description:
    "Centro de yoga y meditación en Recoleta. Clases de Kaladanda, Hatha, Hatha Flow y Vinyasa en Paraguay 1560, Buenos Aires.",
  path: "/",
  keywords: [
    "yoga en Recoleta",
    "clases de yoga en Recoleta",
    "Maitri Flow",
    "Kaladanda yoga",
    "meditación en Recoleta",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="La práctica"
        title="Mover, respirar, observar."
        description="Maitri propone algo sencillo y profundo: hacer lugar para estar presentes. El cuerpo es el punto de partida; la práctica se extiende a la forma en que habitamos el mundo."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-secondary">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        className="bg-card/55"
        eyebrow="Prácticas"
        title="Distintos caminos, una misma presencia."
        description="Estas son las propuestas comunicadas por Maitri. Consultá la grilla actual antes de acercarte."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {classTypes.slice(0, 4).map((classType) => (
            <ClassPreviewCard key={classType.slug} {...classType} />
          ))}
        </div>
        <Link
          href="/clases"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6")}
        >
          Explorar todas las prácticas
        </Link>
      </Section>

      <Section>
        <div className="overflow-hidden rounded-[2rem] bg-foreground px-6 py-10 text-background sm:px-10 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12 lg:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/65">
              Desde la comunidad
            </p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              La práctica no termina cuando dejamos el mat.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-background/72">
              En Instagram, Maitri comparte el recorrido de las clases: filosofía, meditación,
              respiración y preguntas para llevar la práctica a la vida cotidiana.
            </p>
          </div>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "mt-8 gap-2 lg:mt-0",
            )}
          >
            Seguir {siteConfig.instagramHandle}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </Section>

      <Section className="bg-secondary/30" eyebrow="Empezar" title="Tu próximo paso.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            const external = action.href.startsWith("http");
            const classes =
              "flex min-h-20 items-center gap-3 rounded-2xl border border-border/70 bg-card/80 p-5 transition hover:-translate-y-0.5 hover:border-primary";
            const content = (
              <>
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <span className="font-medium">{action.label}</span>
              </>
            );

            return external ? (
              <a key={action.label} href={action.href} className={classes}>
                {content}
              </a>
            ) : (
              <Link key={action.label} href={action.href} className={classes}>
                {content}
              </Link>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Antes de venir" title="Preguntas frecuentes">
        <FAQAccordion items={faqs.slice(0, 4)} />
      </Section>
    </>
  );
}
