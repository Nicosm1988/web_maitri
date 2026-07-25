import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

export function PageSection({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageSectionProps) {
  return (
    <section className={cn("py-14 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
          <h1 className="text-balance font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </header>
        {children}
      </div>
    </section>
  );
}
