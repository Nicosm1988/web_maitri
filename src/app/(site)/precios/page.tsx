import type { Metadata } from "next";

import { PricingCard } from "@/components/site/pricing-card";
import { PageSection } from "@/components/site/page-section";
import { pricingOptions } from "@/content/practices";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Precios conscientes",
  description: "Consultá las modalidades vigentes para practicar yoga en Maitri Yoga Flow.",
  path: "/precios",
  keywords: ["precios yoga Buenos Aires", "yoga en Recoleta", "consultar clases de yoga"],
});

export default function PricingPage() {
  return (
    <PageSection
      eyebrow="Precios"
      title="Una conversación clara sobre cómo sostener la práctica."
      description="Los valores y modalidades pueden cambiar. Consultá la información vigente directamente con Maitri antes de reservar."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {pricingOptions.map((option) => (
          <PricingCard key={option.title} {...option} />
        ))}
      </div>
    </PageSection>
  );
}
