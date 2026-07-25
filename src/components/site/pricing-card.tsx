import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingCard({
  title,
  price,
  description,
  features,
  highlighted,
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "rounded-md border bg-card p-5 shadow-sm",
        highlighted ? "border-primary shadow-primary/10" : "border-border",
      )}
    >
      {highlighted ? (
        <p className="mb-4 inline-flex rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
          Más elegido
        </p>
      ) : null}
      <h3 className="font-heading text-2xl font-semibold">{title}</h3>
      <p className="mt-4 font-heading text-3xl font-semibold">{price}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
      <ul className="mt-5 grid gap-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 text-primary" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
