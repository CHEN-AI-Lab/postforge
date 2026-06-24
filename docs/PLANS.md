# PLANS.md — Customization Guide

To turn this starter template into your own product:

## Step 1: Branding

- `shared/constants/index.ts` — set `PROJECT_NAME`, `PROJECT_TAGLINE`, `PROJECT_DESCRIPTION`
- `apps/web/src/app/[locale]/page.tsx` — set `LOGO_LETTER`
- `apps/web/src/app/layout.tsx` — update metadata title/description

## Step 2: Content

- `shared/messages/en.json` and `shared/messages/zh-CN.json` — update all copy
- `apps/web/messages/en.json` and `apps/web/messages/zh-CN.json` — update page overrides
- Update `EXAMPLE_FEATURES` and `EXAMPLE_PLANS` in `shared/constants/index.ts`

## Step 3: Pages

- Landing page: `apps/web/src/app/[locale]/page.tsx`
- Add signin: `apps/web/src/app/[locale]/signin/page.tsx`
- Add signup: `apps/web/src/app/[locale]/signup/page.tsx`
- Add dashboard: `apps/web/src/app/[locale]/dashboard/page.tsx`

## Step 4: Business Logic

- Add types in `shared/types/`
- Add validators in `shared/validators/`
- Add API endpoints in `apps/web/src/app/api/`
- Add components in `apps/web/src/components/`

## Step 5: Auth & Database

- Integrate Supabase + NextAuth.js
- See `docs/references/supabase-llms.txt` for patterns