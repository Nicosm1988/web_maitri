import type { Metadata } from "next";

import { SchedulePreview } from "@/components/site/schedule-preview";
import { PageSection } from "@/components/site/page-section";
import { buttonVariants } from "@/components/ui/button";
import { schedulePreview } from "@/content/practices";
import { whatsappUrl } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Horarios de yoga en Recoleta",
  description:
    "Franjas de actividad publicadas para Maitri Flow en Recoleta. Confirmá la clase vigente antes de venir.",
  path: "/horarios",
  keywords: ["horarios de yoga", "clases de yoga en Buenos Aires", "reservar clase de yoga"],
});

export default function SchedulePage() {
  return (
    <PageSection
      eyebrow="Horarios"
      title="Organizá tu práctica semanal."
      description="Estas franjas de actividad son orientativas. Escribinos para confirmar estilo, docente, valor y disponibilidad."
    >
      <SchedulePreview days={schedulePreview} />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="rounded-[2rem] border border-border bg-card p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Modalidad
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold">Presencial</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Encuentros en Paraguay 1560, Recoleta. Confirmá previamente clase y cupo.
          </p>
        </article>
        <article className="rounded-[2rem] border border-dashed border-border bg-secondary/30 p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Modalidad
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold">Virtual</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Consultá si hay propuestas virtuales disponibles en la grilla vigente.
          </p>
        </article>
      </div>
      <a
        href={whatsappUrl}
        className={cn(buttonVariants({ size: "lg" }), "mt-8 min-h-12 px-6")}
      >
        Reservar clase de prueba
      </a>
    </PageSection>
  );
}
