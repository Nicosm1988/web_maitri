import type { Metadata } from "next";

import { InstructorCard } from "@/components/site/instructor-card";
import { Section } from "@/components/site/section";
import { instructors } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Docentes de yoga",
  description:
    "Conocé el equipo docente de Maitri Yoga Flow y sus especialidades en Hatha, Vinyasa, Yin y yoga para principiantes.",
  path: "/docentes",
  keywords: ["docentes de yoga", "estudio de yoga en CABA"],
});

export default function InstructorsPage() {
  return (
    <Section
      eyebrow="Docentes"
      title="Personas que acompañan personas."
      description="Cada docente trae una forma de escuchar, guiar y adaptar la práctica para que el encuentro sea claro y cuidado."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.slug} {...instructor} />
        ))}
      </div>
    </Section>
  );
}
