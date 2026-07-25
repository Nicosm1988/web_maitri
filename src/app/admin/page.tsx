import { EmptyState } from "@/components/states/empty-state";

export default function AdminPage() {
  return (
    <div className="grid gap-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-background/60">
          Admin
        </p>
        <h1 className="mt-2 font-heading text-4xl font-semibold">Panel operativo</h1>
        <p className="mt-3 max-w-2xl text-background/70">
          Base protegida por rol admin para gestionar clases, horarios, docentes, reservas y
          contenido en próximas iteraciones.
        </p>
      </div>
      <EmptyState
        title="Módulos preparados"
        description="El schema, las rutas y la autorización ya dejan el terreno listo para conectar CRUDs reales con RLS."
      />
    </div>
  );
}
