type FAQ = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-md border border-border bg-card p-5 open:shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:hidden">
            <span>{item.question}</span>
            <span className="grid size-7 shrink-0 place-items-center rounded-md bg-muted text-lg leading-none text-primary transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
