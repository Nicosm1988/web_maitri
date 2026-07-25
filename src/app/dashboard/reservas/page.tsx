import Link from "next/link";

import { EmptyState } from "@/components/states/empty-state";
import { buttonVariants } from "@/components/ui/button";
import { requireProfile } from "@/lib/supabase/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function ReservationsPage() {
  const supabase = await createSupabaseServerClient();
  await requireProfile(supabase);

  return (
    <EmptyState
      title="No hay reservas registradas"
      description="Tus próximas clases y el historial de reservas van a aparecer en esta pantalla."
      action={
        <Link href="/horarios" className={buttonVariants({ size: "lg" })}>
          Ver horarios
        </Link>
      }
    />
  );
}
