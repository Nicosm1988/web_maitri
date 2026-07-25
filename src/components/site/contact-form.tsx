"use client";

import { useActionState } from "react";

import { type ContactFormState, sendContactMessage } from "@/app/(site)/contacto/actions";
import { Button } from "@/components/ui/button";

const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactFormState,
  );

  return (
    <form action={formAction} className="grid gap-4" noValidate>
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="min-h-11 rounded-md border border-input bg-background px-3 py-2 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/35"
          aria-describedby={state.errors?.name ? "name-error" : undefined}
          aria-invalid={Boolean(state.errors?.name)}
        />
        {state.errors?.name ? (
          <p id="name-error" className="text-sm text-destructive">
            {state.errors.name[0]}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          className="min-h-11 rounded-md border border-input bg-background px-3 py-2 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/35"
          aria-describedby={state.errors?.email ? "email-error" : undefined}
          aria-invalid={Boolean(state.errors?.email)}
        />
        {state.errors?.email ? (
          <p id="email-error" className="text-sm text-destructive">
            {state.errors.email[0]}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Teléfono opcional
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className="min-h-11 rounded-md border border-input bg-background px-3 py-2 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/35"
          aria-describedby={state.errors?.phone ? "phone-error" : undefined}
          aria-invalid={Boolean(state.errors?.phone)}
        />
        {state.errors?.phone ? (
          <p id="phone-error" className="text-sm text-destructive">
            {state.errors.phone[0]}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="interest" className="text-sm font-medium">
          Consulta
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue="primera-clase"
          autoComplete="off"
          className="min-h-11 rounded-md border border-input bg-background px-3 py-2 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/35"
          aria-describedby={state.errors?.interest ? "interest-error" : undefined}
          aria-invalid={Boolean(state.errors?.interest)}
        >
          <option value="primera-clase">Quiero probar una clase</option>
          <option value="horarios">Consultar horarios</option>
          <option value="precios">Consultar precios</option>
          <option value="membresias">Consultar membresías</option>
          <option value="otro">Otra consulta</option>
        </select>
        {state.errors?.interest ? (
          <p id="interest-error" className="text-sm text-destructive">
            {state.errors.interest[0]}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          autoComplete="off"
          className="min-h-32 rounded-md border border-input bg-background px-3 py-2 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/35"
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          aria-invalid={Boolean(state.errors?.message)}
        />
        {state.errors?.message ? (
          <p id="message-error" className="text-sm text-destructive">
            {state.errors.message[0]}
          </p>
        ) : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {state.message ? (
        <p
          className={
            state.status === "success"
              ? "rounded-md bg-primary/10 p-3 text-sm text-primary"
              : "rounded-md bg-destructive/10 p-3 text-sm text-destructive"
          }
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="h-12" disabled={pending}>
        {pending ? "Abriendo WhatsApp…" : "Continuar en WhatsApp"}
      </Button>
    </form>
  );
}
