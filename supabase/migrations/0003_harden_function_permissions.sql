-- Trigger functions and SECURITY DEFINER helpers should never inherit PostgreSQL's
-- default EXECUTE privilege for PUBLIC.
revoke all on function public.set_updated_at() from public, anon, authenticated;
revoke all on function public.prevent_profile_role_escalation() from public, anon, authenticated;
revoke all on function public.handle_new_user() from public, anon, authenticated;
revoke all on function public.prevent_booking_identity_changes() from public, anon, authenticated;

-- is_admin() is intentionally callable only by authenticated users and policies.
revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;
