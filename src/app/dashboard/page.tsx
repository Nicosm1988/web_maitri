import { CalendarDays } from "lucide-react";
import Link from "next/link";

import { UserMenu } from "@/components/auth/user-menu";
import { EmptyState } from "@/components/states/empty-state";
import { buttonVariants } from "@/components/ui/button";
import { requireProfile } from "@/lib/supabase/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { user, profile } = await requireProfile(supabase);
  const displayName = profile.full_name ?? user.email ?? "Practicante";
  const email = profile.email ?? user.email ?? "";

  return (
    <div className="grid gap-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
          Dashboard
        </p>
        <h1 className="mt-2 font-heading text-4xl font-semibold">Hola, {displayName}</h1>
        <p className="mt-3 text-muted-foreground">
          Tu perfil ya está listo para reservas, membresías e historial.
        </p>
      </div>

      <UserMenu name={displayName} email={email} avatarUrl={profile.avatar_url} />

      <EmptyState
        title="Todavía no tenés próximas reservas"
        description="Cuando reserves una clase, vas a verla acá con fecha, horario, docente y estado."
        action={
          <Link href="/horarios" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
            <CalendarDays className="size-4" aria-hidden="true" />
            Reservar clase
          </Link>
        }
      />
    </div>
  );
}
