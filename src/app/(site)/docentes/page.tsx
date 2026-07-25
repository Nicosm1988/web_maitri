import type { Metadata } from "next";

import { InstructorCard } from "@/components/site/instructor-card";
import { PageSection } from "@/components/site/page-section";
import { instructors } from "@/content/practices";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Comunidad Maitri",
  description:
    "Conocé la mirada que reúne yoga, meditación y terapias corporales en Maitri Flow, Recoleta.",
  path: "/docentes",
  keywords: ["docentes de yoga", "estudio de yoga en CABA"],
});

export default function InstructorsPage() {
  return (
    <PageSection
      eyebrow="Comunidad"
      title="Prácticas que se construyen en compañía."
      description="Maitri reúne docentes y facilitadores alrededor de una mirada integral. Los nombres y horarios vigentes se publican en Instagram."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.slug} {...instructor} />
        ))}
      </div>
    </PageSection>
  );
}
