import type { Metadata } from "next";

import { SchedulePreview } from "@/components/site/schedule-preview";
import { PageSection } from "@/components/site/page-section";
import { schedulePreview } from "@/content/practices";
import { createPageMetadata } from "@/lib/seo";

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
    </PageSection>
  );
}
