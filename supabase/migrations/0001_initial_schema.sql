create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  role text not null default 'student' check (role in ('student', 'teacher', 'admin')),
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.instructors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  bio text not null,
  photo_url text,
  specialties text[] not null default '{}',
  active boolean not null default true
);

create table if not exists public.class_types (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null,
  level text not null,
  intensity text not null,
  duration_minutes int not null check (duration_minutes > 0),
  active boolean not null default true
);

create table if not exists public.class_sessions (
  id uuid primary key default gen_random_uuid(),
  class_type_id uuid not null references public.class_types(id) on delete restrict,
  instructor_id uuid references public.instructors(id) on delete set null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  capacity int not null check (capacity > 0),
  location text not null,
  status text not null default 'scheduled' check (status in ('scheduled', 'cancelled', 'completed')),
  check (ends_at > starts_at)
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  class_session_id uuid not null references public.class_sessions(id) on delete cascade,
  status text not null default 'confirmed' check (status in ('confirmed', 'cancelled', 'waitlisted')),
  created_at timestamptz not null default now(),
  cancelled_at timestamptz,
  unique (user_id, class_session_id)
);

create table if not exists public.memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  type text not null,
  status text not null default 'active' check (status in ('active', 'paused', 'cancelled', 'expired')),
  starts_at date not null,
  ends_at date not null,
  created_at timestamptz not null default now(),
  check (ends_at >= starts_at)
);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  body text not null,
  rating int check (rating between 1 and 5),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists class_sessions_starts_at_idx on public.class_sessions(starts_at);
create index if not exists bookings_user_id_idx on public.bookings(user_id);
create index if not exists memberships_user_id_idx on public.memberships(user_id);
create index if not exists testimonials_active_idx on public.testimonials(active);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists site_settings_set_updated_at on public.site_settings;
create trigger site_settings_set_updated_at
before update on public.site_settings
for each row execute function public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

create or replace function public.prevent_profile_role_escalation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.role is distinct from old.role and not public.is_admin() then
    raise exception 'Only admins can change profile roles';
  end if;

  return new;
end;
$$;

drop trigger if exists profiles_prevent_role_escalation on public.profiles;
create trigger profiles_prevent_role_escalation
before update on public.profiles
for each row execute function public.prevent_profile_role_escalation();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', new.raw_user_meta_data ->> 'picture')
  )
  on conflict (id) do update
    set email = excluded.email,
        full_name = coalesce(public.profiles.full_name, excluded.full_name),
        avatar_url = coalesce(public.profiles.avatar_url, excluded.avatar_url),
        updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.instructors enable row level security;
alter table public.class_types enable row level security;
alter table public.class_sessions enable row level security;
alter table public.bookings enable row level security;
alter table public.memberships enable row level security;
alter table public.site_settings enable row level security;
alter table public.testimonials enable row level security;

drop policy if exists "Profiles are readable by owner or admin" on public.profiles;
create policy "Profiles are readable by owner or admin"
on public.profiles for select
to authenticated
using (id = auth.uid() or public.is_admin());

drop policy if exists "Users can insert own student profile" on public.profiles;
create policy "Users can insert own student profile"
on public.profiles for insert
to authenticated
with check (id = auth.uid() and role = 'student');

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles for update
to authenticated
using (id = auth.uid() or public.is_admin())
with check (id = auth.uid() or public.is_admin());

drop policy if exists "Active instructors are public" on public.instructors;
create policy "Active instructors are public"
on public.instructors for select
to anon, authenticated
using (active = true);

drop policy if exists "Admins manage instructors" on public.instructors;
create policy "Admins manage instructors"
on public.instructors for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Active class types are public" on public.class_types;
create policy "Active class types are public"
on public.class_types for select
to anon, authenticated
using (active = true);

drop policy if exists "Admins manage class types" on public.class_types;
create policy "Admins manage class types"
on public.class_types for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Scheduled class sessions are public" on public.class_sessions;
create policy "Scheduled class sessions are public"
on public.class_sessions for select
to anon, authenticated
using (
  status = 'scheduled'
  and exists (
    select 1 from public.class_types
    where public.class_types.id = class_sessions.class_type_id
      and public.class_types.active = true
  )
);

drop policy if exists "Admins manage class sessions" on public.class_sessions;
create policy "Admins manage class sessions"
on public.class_sessions for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Users read own bookings" on public.bookings;
create policy "Users read own bookings"
on public.bookings for select
to authenticated
using (user_id = auth.uid() or public.is_admin());

drop policy if exists "Users create own bookings" on public.bookings;
create policy "Users create own bookings"
on public.bookings for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "Admins manage bookings" on public.bookings;
create policy "Admins manage bookings"
on public.bookings for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Users read own memberships" on public.memberships;
create policy "Users read own memberships"
on public.memberships for select
to authenticated
using (user_id = auth.uid() or public.is_admin());

drop policy if exists "Admins manage memberships" on public.memberships;
create policy "Admins manage memberships"
on public.memberships for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Site settings are public readable" on public.site_settings;
create policy "Site settings are public readable"
on public.site_settings for select
to anon, authenticated
using (true);

drop policy if exists "Admins manage site settings" on public.site_settings;
create policy "Admins manage site settings"
on public.site_settings for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Active testimonials are public" on public.testimonials;
create policy "Active testimonials are public"
on public.testimonials for select
to anon, authenticated
using (active = true);

drop policy if exists "Admins manage testimonials" on public.testimonials;
create policy "Admins manage testimonials"
on public.testimonials for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

grant usage on schema public to anon, authenticated;
grant select on public.instructors, public.class_types, public.class_sessions, public.site_settings, public.testimonials to anon, authenticated;
grant select, insert, update on public.profiles, public.bookings to authenticated;
grant select on public.memberships to authenticated;
grant all on all tables in schema public to service_role;
