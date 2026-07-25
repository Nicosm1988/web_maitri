"use client";

import { ErrorState } from "@/components/states/error-state";

export default function Error() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-3xl place-items-center px-4">
      <ErrorState />
    </main>
  );
}
