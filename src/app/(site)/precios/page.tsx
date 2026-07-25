import type { Metadata } from "next";

import { PricingCard } from "@/components/site/pricing-card";
import { Section } from "@/components/site/section";
import { pricingOptions } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Precios y membresías",
  description:
    "Opciones de clase suelta, packs y membresía mensual para practicar yoga en Maitri Yoga Flow.",
  path: "/precios",
  keywords: ["precios yoga Buenos Aires", "membresía yoga", "packs de clases de yoga"],
});

export default function PricingPage() {
  return (
    <Section
      eyebrow="Precios"
      title="Elegí cómo querés sostener tu práctica."
      description="Los valores finales se informan al consultar. La estructura contempla clase suelta, packs y membresía mensual."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {pricingOptions.map((option) => (
          <PricingCard key={option.title} {...option} />
        ))}
      </div>
    </Section>
  );
}
