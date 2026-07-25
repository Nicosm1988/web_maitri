import type { SupabaseClient, User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

import type { Database, Profile } from "@/lib/supabase/types";

export async function ensureProfile(supabase: SupabaseClient<Database>, user: User) {
  const metadata = user.user_metadata ?? {};
  const fullName =
    typeof metadata.full_name === "string"
      ? metadata.full_name
      : typeof metadata.name === "string"
        ? metadata.name
        : null;
  const avatarUrl =
    typeof metadata.avatar_url === "string"
      ? metadata.avatar_url
      : typeof metadata.picture === "string"
        ? metadata.picture
        : null;

  const { data, error } = await supabase
    .from("profiles")
    .upsert(
      {
        id: user.id,
        email: user.email ?? null,
        full_name: fullName,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    )
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getCurrentUser(supabase: SupabaseClient<Database>) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function getProfile(supabase: SupabaseClient<Database>, userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function requireUser(
  supabase: SupabaseClient<Database> | null,
  redirectTo = "/login",
) {
  if (!supabase) {
    redirect(`${redirectTo}?error=config`);
  }

  const user = await getCurrentUser(supabase);

  if (!user) {
    redirect(redirectTo);
  }

  return user;
}

export async function requireProfile(supabase: SupabaseClient<Database> | null) {
  if (!supabase) {
    redirect("/login?error=config");
  }

  const user = await requireUser(supabase);
  const profile =
    (await getProfile(supabase, user.id)) ?? (await ensureProfile(supabase, user));

  return { user, profile };
}

export function isAdmin(profile: Profile | null) {
  return profile?.role === "admin";
}
