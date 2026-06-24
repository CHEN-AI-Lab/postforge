# SaaS Starter Template

A modern, production-ready SaaS starter template. Monorepo with pnpm, TurboRepo, Next.js 14+ App Router.

## Quick Start

```bash
pnpm install
pnpm dev:web     # http://localhost:3000
```

## Key Commands

```bash
pnpm build:web        # Production build
pnpm test             # Unit tests (Vitest)
pnpm lint             # Lint & type-check
pnpm type-check       # TypeScript check only
pnpm clean            # Clean caches
```

## Architecture

See `docs/architecture.md` for full details.

```
shared/   → Types, constants, validators, utils, API client, hooks, i18n messages
apps/web/ → Next.js App Router (pages, API routes, components)
packages/ui/ → Button, Input, Card, Badge components
```

## Code Location Rules (Hard Rules)

- **Types/DTO/Interfaces** → `shared/types/`
- **Constants/Enums/Config** → `shared/constants/`
- **Pure functions/Utilities** → `shared/utils/`
- **API client wrappers** → `shared/api/`
- **Validation schemas** → `shared/validators/`
- **React hooks** → `shared/hooks/`
- **Translation files** → `shared/messages/` (or `apps/web/messages/` for page overrides)
- **Page routes + layout** → `apps/web/src/app/[locale]/`
- **UI components** → `apps/web/src/components/` (page-specific) or `packages/ui/src/` (shared)
- **API route handlers** → `apps/web/src/app/api/`

## Quality Gates Before Push

1. `tsc --noEmit` — no type errors
2. `pnpm lint` — no lint errors
3. `pnpm test` — all tests pass
4. `pnpm build:web` — build succeeds
5. No `console.log` in production code
6. Every async operation handles loading/error/empty states
7. Components max 200 lines

## Bilingual Support

- Default: zh-CN (Chinese), toggle to English
- Language switcher in top-right corner
- Cookie remembers preference
- All text goes through next-intl (`getTranslations()` / `useTranslations()`)

## Customization Checklist

- [ ] `shared/constants/index.ts` — set `PROJECT_NAME`, `PROJECT_TAGLINE`
- [ ] `apps/web/src/app/[locale]/page.tsx` — set `LOGO_LETTER`
- [ ] `apps/web/src/app/layout.tsx` — update metadata
- [ ] `shared/messages/{locale}.json` — replace all copy
- [ ] `shared/constants/index.ts` — replace `EXAMPLE_FEATURES`, `EXAMPLE_PLANS`
- [ ] `apps/web/src/app/globals.css` — update colors (CSS variables)