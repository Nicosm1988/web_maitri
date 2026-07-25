create or replace function public.prevent_booking_identity_changes()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.user_id is distinct from old.user_id then
    raise exception 'Booking user_id cannot be changed';
  end if;

  if new.class_session_id is distinct from old.class_session_id then
    raise exception 'Booking class_session_id cannot be changed';
  end if;

  return new;
end;
$$;

drop trigger if exists bookings_prevent_identity_changes on public.bookings;
create trigger bookings_prevent_identity_changes
before update on public.bookings
for each row execute function public.prevent_booking_identity_changes();

drop policy if exists "Users create own bookings" on public.bookings;
create policy "Users create own bookings"
on public.bookings for insert
to authenticated
with check (
  user_id = auth.uid()
  and status in ('confirmed', 'waitlisted')
  and exists (
    select 1
    from public.class_sessions
    join public.class_types on class_types.id = class_sessions.class_type_id
    where class_sessions.id = class_session_id
      and class_sessions.status = 'scheduled'
      and class_sessions.starts_at > now()
      and class_types.active = true
  )
);

drop policy if exists "Users cancel own bookings" on public.bookings;
create policy "Users cancel own bookings"
on public.bookings for update
to authenticated
using (user_id = auth.uid())
with check (
  user_id = auth.uid()
  and status = 'cancelled'
  and cancelled_at is not null
);
