export function LoadingState({ label = "Cargando…" }: { label?: string }) {
  return (
    <div className="grid min-h-48 place-items-center rounded-md border border-border bg-card p-6">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="size-3 animate-pulse rounded-full bg-primary" aria-hidden="true" />
        <span>{label}</span>
      </div>
    </div>
  );
}
