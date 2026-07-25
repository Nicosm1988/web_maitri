import type { Metadata } from "next";

import { SchedulePreview } from "@/components/site/schedule-preview";
import { Section } from "@/components/site/section";
import { schedulePreview } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Horarios de yoga en Buenos Aires",
  description:
    "Grilla de horarios de Maitri Yoga Flow para clases de yoga, respiración y meditación en Buenos Aires.",
  path: "/horarios",
  keywords: ["horarios de yoga", "clases de yoga en Buenos Aires", "reservar clase de yoga"],
});

export default function SchedulePage() {
  return (
    <Section
      eyebrow="Horarios"
      title="Organizá tu práctica semanal."
      description="Encontrá un horario que puedas sostener y escribinos para confirmar disponibilidad."
    >
      <SchedulePreview days={schedulePreview} />
    </Section>
  );
}
