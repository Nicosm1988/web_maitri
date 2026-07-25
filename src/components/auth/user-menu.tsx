import Image from "next/image";

import { signOut } from "@/app/dashboard/actions";
import { Button } from "@/components/ui/button";

type UserMenuProps = {
  name: string;
  email: string;
  avatarUrl?: string | null;
};

export function UserMenu({ name, email, avatarUrl }: UserMenuProps) {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-3">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt=""
            width={48}
            height={48}
            className="size-12 rounded-md object-cover"
          />
        ) : (
          <div className="grid size-12 place-items-center rounded-md bg-secondary font-heading text-xl font-semibold text-secondary-foreground">
            {name.slice(0, 1).toUpperCase()}
          </div>
        )}
        <div className="min-w-0">
          <p className="truncate font-semibold">{name}</p>
          <p className="truncate text-sm text-muted-foreground">{email}</p>
        </div>
      </div>
      <form action={signOut}>
        <Button type="submit" variant="outline" size="lg" className="w-full sm:w-auto">
          Cerrar sesión
        </Button>
      </form>
    </div>
  );
}
