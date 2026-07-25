import type { Metadata } from "next";

import { ClassCard } from "@/components/site/class-card";
import { Section } from "@/components/site/section";
import { classTypes } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Clases de yoga en Buenos Aires",
  description:
    "Conocé las clases de Hatha, Vinyasa, Yin, Yoga suave para principiantes, meditación y respiración en Maitri Yoga Flow.",
  path: "/clases",
  keywords: [
    "clases de yoga en Buenos Aires",
    "vinyasa yoga",
    "hatha yoga",
    "yoga para principiantes",
  ],
});

export default function ClassesPage() {
  return (
    <Section
      eyebrow="Clases"
      title="Prácticas para distintos momentos."
      description="Cada propuesta indica nivel, duración e intensidad para que puedas elegir una clase compatible con tu energía y experiencia."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classTypes.map((classType) => (
          <ClassCard key={classType.slug} {...classType} />
        ))}
      </div>
    </Section>
  );
}
