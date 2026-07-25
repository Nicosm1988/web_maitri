import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { AdminShell } from "@/components/dashboard/admin-shell";
import { isAdmin, requireProfile } from "@/lib/supabase/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const { profile } = await requireProfile(supabase);

  if (!isAdmin(profile)) {
    redirect("/dashboard?error=admin");
  }

  return <AdminShell>{children}</AdminShell>;
}
