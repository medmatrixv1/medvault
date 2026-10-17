-- Run this once in Supabase: SQL Editor -> New query -> paste -> Run
create table if not exists public.vaults (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.vaults enable row level security;

create policy "read own vault"   on public.vaults for select using ((select auth.uid()) = user_id);
create policy "insert own vault" on public.vaults for insert with check ((select auth.uid()) = user_id);
create policy "update own vault" on public.vaults for update using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "delete own vault" on public.vaults for delete using ((select auth.uid()) = user_id);
