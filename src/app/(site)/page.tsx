import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ClassPreviewCard } from "@/components/site/class-card";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { SchedulePreview } from "@/components/site/schedule-preview";
import { buttonVariants } from "@/components/ui/button";
import { faqs } from "@/content/faq";
import { quickActions } from "@/content/navigation";
import { classTypes, schedulePreview, valueProps } from "@/content/practices";
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

      <div className="marquee-band overflow-hidden border-b border-border/70 py-4">
        <p className="marquee-track whitespace-nowrap font-heading text-2xl italic text-foreground/70">
          Mover · Respirar · Habitar · Escuchar · Mover · Respirar · Habitar · Escuchar · Mover
          · Respirar · Habitar · Escuchar ·
        </p>
      </div>

      <Section
        eyebrow="La intención"
        title="Una práctica para habitarte con más presencia."
        description="Maitri es una invitación a la amistad con la propia experiencia. El cuerpo es el punto de partida; la escucha, una forma de continuar."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="practice-value rounded-[2rem] border border-border/70 bg-card/70 p-7 shadow-sm"
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

      <section className="relative isolate min-h-[72svh] overflow-hidden">
        <Image
          src="/images/maitri-casa-respirada.webp"
          alt=""
          fill
          sizes="100vw"
          className="atmosphere-image -z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/72 via-foreground/20 to-transparent" />
        <div className="mx-auto flex min-h-[72svh] w-full max-w-6xl items-center px-4 py-20 sm:px-6">
          <div className="max-w-xl text-background">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/70">
              Casa respirada
            </p>
            <h2 className="mt-5 text-balance font-heading text-5xl font-semibold leading-[0.95] sm:text-7xl">
              No necesitás llegar de una manera especial.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-background/82">
              Vení como estás. La práctica empieza cuando hacés espacio para sentir lo que ya
              está acá.
            </p>
          </div>
        </div>
      </section>

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

      <Section
        eyebrow="Próximas clases"
        title="Encontrá un momento para practicar."
        description="Estas franjas son orientativas. Confirmá estilo, docente y cupo antes de venir."
      >
        <SchedulePreview days={schedulePreview.slice(0, 3)} />
        <Link
          href="/horarios"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6 min-h-11")}
        >
          Ver agenda y modalidades
        </Link>
      </Section>

      <Section
        eyebrow="Tu primera vez"
        title="Llegar también es parte de la práctica."
        description="Si no sabés qué clase elegir, escribinos. Te orientamos según tu experiencia y lo que estés buscando."
      >
        <ol className="grid gap-5 md:grid-cols-3">
          {[
            ["01", "Contanos", "Escribinos por WhatsApp y contanos si es tu primera vez."],
            [
              "02",
              "Elegimos juntos",
              "Te ayudamos a encontrar una práctica y un horario posible.",
            ],
            [
              "03",
              "Vení como estás",
              "Ropa cómoda, unos minutos de anticipación y curiosidad.",
            ],
          ].map(([number, title, body]) => (
            <li key={number} className="border-t border-primary/35 pt-5">
              <span className="font-heading text-4xl italic text-primary/55">{number}</span>
              <h3 className="mt-8 font-heading text-3xl font-semibold">{title}</h3>
              <p className="mt-3 max-w-sm leading-7 text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
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
