import { Sparkles } from "lucide-react";

type InstructorCardProps = {
  name: string;
  specialty: string;
  bio: string;
};

export function InstructorCard({ name, specialty, bio }: InstructorCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="rounded-md border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-md bg-secondary font-heading text-2xl font-semibold text-secondary-foreground">
          {initials}
        </div>
        <div>
          <h2 className="font-heading text-2xl font-semibold leading-tight">{name}</h2>
          <p className="mt-1 flex items-center gap-2 text-sm font-medium text-primary">
            <Sparkles className="size-4" aria-hidden="true" />
            {specialty}
          </p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-muted-foreground">{bio}</p>
    </article>
  );
}
