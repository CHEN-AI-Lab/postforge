# Architecture

## Design

This project follows a 4-layer domain architecture within a pnpm monorepo:

```
UI (Next.js pages/components)
    ↓ API Routes / Server Actions
Domain (shared/ — business logic + validation)
    ↓
Data (Supabase / External APIs)
```

## Monorepo Structure

Workspace packages:

- **shared** — all cross-platform business logic (types, constants, validators, utils, api, hooks, messages)
- **apps/web** — Next.js 14+ App Router web application
- **packages/ui** — shared UI component library (Button, Input, Card, Badge)

## Key Principles

1. **Shared-first** — business logic belongs in `shared/`, not duplicated in `apps/`
2. **i18n by default** — all user-facing text goes through next-intl (zh-CN + en)
3. **Quality gates** — type-check, lint, test, build before every push

## Bilingual Support

- next-intl handles locale routing `/zh-CN/...` and `/en/...`
- Translation files: `shared/messages/{locale}.json` (default) or `apps/web/messages/{locale}.json` (page overrides)
- Language switcher in top-right corner, cookie-persisted
- Default locale: zh-CN

## Getting Started

```bash
# 1. Customize your brand
# Edit shared/constants/index.ts — set PROJECT_NAME, PROJECT_TAGLINE
# Edit apps/web/src/app/[locale]/page.tsx — set LOGO_LETTER

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your API keys

# 4. Start development
pnpm dev:web
# → http://localhost:3000/zh-CN or http://localhost:3000/en
```

## Adding a New Page

1. Add types in `shared/types/` if cross-platform
2. Add constants in `shared/constants/` if cross-platform
3. Add translations in `shared/messages/{locale}.json`
4. Create page in `apps/web/src/app/[locale]/{route}/page.tsx`
5. Use `getTranslations()` (server) or `useTranslations()` (client) for i18n