type ErrorStateProps = {
  title?: string;
  description?: string;
};

export function ErrorState({
  title = "Algo no salió bien",
  description = "Intentá nuevamente en unos minutos.",
}: ErrorStateProps) {
  return (
    <div className="rounded-md border border-destructive/30 bg-destructive/10 p-5">
      <h2 className="font-semibold text-destructive">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-destructive/85">{description}</p>
    </div>
  );
}
