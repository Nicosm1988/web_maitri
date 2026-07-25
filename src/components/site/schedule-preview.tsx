import { CalendarDays } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScheduleDay = {
  day: string;
  items: readonly {
    time: string;
    className: string;
    teacher?: string;
  }[];
};

export function SchedulePreview({ days }: { days: readonly ScheduleDay[] }) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
      <div className="flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-semibold">Franjas publicadas</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            La actividad puede variar. Confirmá estilo, docente y cupo antes de venir.
          </p>
        </div>
        <Link
          href="/contacto"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
        >
          <CalendarDays className="size-4" aria-hidden="true" />
          Reservar clase
        </Link>
      </div>
      <div className="grid md:grid-cols-5">
        {days.map((day) => (
          <section
            key={day.day}
            className="border-b border-border p-4 md:border-b-0 md:border-r"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              {day.day}
            </h3>
            <div className="mt-4 grid gap-3">
              {day.items.map((item) => (
                <article key={`${day.day}-${item.time}`} className="rounded-md bg-muted p-3">
                  <p className="font-semibold text-foreground">{item.time}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.className}</p>
                  {item.teacher ? (
                    <p className="text-xs text-muted-foreground">Docente: {item.teacher}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
