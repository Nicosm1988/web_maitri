import { Clock, Gauge, GraduationCap } from "lucide-react";

type ClassCardProps = {
  name: string;
  description: string;
  level: string;
  duration: string;
  intensity: string;
};

export function ClassCard({ name, description, level, duration, intensity }: ClassCardProps) {
  return (
    <article className="rounded-md border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0">
      <h3 className="font-heading text-2xl font-semibold text-foreground">{name}</h3>
      <p className="mt-3 min-h-24 text-sm leading-6 text-muted-foreground">{description}</p>
      <dl className="mt-5 grid gap-2 text-sm text-foreground">
        <div className="flex items-center gap-2">
          <GraduationCap className="size-4 text-primary" aria-hidden="true" />
          <dt className="sr-only">Nivel</dt>
          <dd>{level}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-primary" aria-hidden="true" />
          <dt className="sr-only">Duración</dt>
          <dd>{duration}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Gauge className="size-4 text-primary" aria-hidden="true" />
          <dt className="sr-only">Intensidad</dt>
          <dd>{intensity}</dd>
        </div>
      </dl>
    </article>
  );
}
