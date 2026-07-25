import { Clock, Gauge, GraduationCap } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ClassCardProps = {
  name: string;
  description: string;
  level: string;
  duration: string;
  intensity: string;
};

function ClassCardBody({
  description,
  level,
  duration,
  intensity,
  title,
}: ClassCardProps & { title: ReactNode }) {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-5 shadow-sm transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {title}
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
      <Link
        href="/contacto"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
      >
        Reservar clase
      </Link>
    </article>
  );
}

export function ClassCard(props: ClassCardProps) {
  return (
    <ClassCardBody
      {...props}
      title={
        <h2 className="font-heading text-2xl font-semibold text-foreground">{props.name}</h2>
      }
    />
  );
}

export function ClassPreviewCard(props: ClassCardProps) {
  return (
    <ClassCardBody
      {...props}
      title={
        <h3 className="font-heading text-2xl font-semibold text-foreground">{props.name}</h3>
      }
    />
  );
}
