import type { Metadata } from "next";
import Link from "next/link";

import { ClassCard } from "@/components/site/class-card";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { Hero } from "@/components/site/hero";
import { InstructorCard } from "@/components/site/instructor-card";
import { PricingCard } from "@/components/site/pricing-card";
import { SchedulePreview } from "@/components/site/schedule-preview";
import { Section } from "@/components/site/section";
import { buttonVariants } from "@/components/ui/button";
import {
  classTypes,
  faqs,
  instructors,
  pricingOptions,
  quickActions,
  schedulePreview,
  valueProps,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Maitri Yoga Flow | Yoga en Buenos Aires",
  description:
    "Estudio de yoga en Buenos Aires con clases de Hatha, Vinyasa, Yin, yoga para principiantes, meditación y respiración.",
  path: "/",
  keywords: [
    "yoga en Buenos Aires",
    "clases de yoga en Buenos Aires",
    "estudio de yoga en CABA",
    "yoga para principiantes",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Una práctica posible"
        title="Yoga con técnica, calma y cercanía."
        description="Maitri combina clases claras, docentes atentos y un recorrido simple para encontrar una práctica que puedas sostener."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-md border border-border bg-card p-5 shadow-sm"
              >
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-heading text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        className="bg-card"
        eyebrow="Clases"
        title="Elegí el ritmo que necesitás hoy."
        description="Todas las clases tienen descripción, nivel, duración e intensidad para que puedas decidir con claridad."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {classTypes.slice(0, 3).map((classType) => (
            <ClassCard key={classType.slug} {...classType} />
          ))}
        </div>
        <Link
          href="/clases"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6")}
        >
          Ver todas las clases
        </Link>
      </Section>

      <Section
        eyebrow="Horarios"
        title="Una grilla simple para empezar."
        description="Elegí un momento de la semana y escribinos para confirmar disponibilidad. Los cupos se cuidan para sostener una atención cercana."
      >
        <SchedulePreview days={schedulePreview} />
      </Section>

      <Section className="bg-muted/45" eyebrow="Docentes" title="Acompañamiento humano.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.slug} {...instructor} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Precios"
        title="Opciones para practicar a tu ritmo."
        description="Clase suelta, packs y membresía mensual para acompañar distintas formas de continuidad."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {pricingOptions.map((option) => (
            <PricingCard key={option.title} {...option} />
          ))}
        </div>
      </Section>

      <Section className="bg-card" eyebrow="Accesos rápidos" title="Tu próximo paso.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            const external = action.href.startsWith("http");
            const content = (
              <>
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <span className="font-medium">{action.label}</span>
              </>
            );

            return external ? (
              <a
                key={action.label}
                href={action.href}
                className="flex min-h-16 items-center gap-3 rounded-md border border-border bg-background p-4 transition hover:border-primary"
              >
                {content}
              </a>
            ) : (
              <Link
                key={action.label}
                href={action.href}
                className="flex min-h-16 items-center gap-3 rounded-md border border-border bg-background p-4 transition hover:border-primary"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Preguntas frecuentes">
        <FAQAccordion items={faqs.slice(0, 4)} />
      </Section>
    </>
  );
}
