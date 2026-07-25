import { requireProfile } from "@/lib/supabase/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function ProfilePage() {
  const supabase = await createSupabaseServerClient();
  const { profile } = await requireProfile(supabase);

  return (
    <div className="rounded-md border border-border bg-card p-6 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">Perfil</p>
      <h1 className="mt-2 font-heading text-4xl font-semibold">Tus datos</h1>
      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-muted-foreground">Nombre</dt>
          <dd className="mt-1 font-medium">{profile.full_name ?? "Sin definir"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Email</dt>
          <dd className="mt-1 font-medium">{profile.email ?? "Sin email"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Teléfono</dt>
          <dd className="mt-1 font-medium">{profile.phone ?? "Pendiente"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Rol</dt>
          <dd className="mt-1 font-medium">{profile.role}</dd>
        </div>
      </dl>
    </div>
  );
}
