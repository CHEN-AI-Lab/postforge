# Key Decisions

## 2026-06-02: Monorepo Restructure

**Context**: The project was a flat Next.js app with no shared layer, no i18n, no tests.

**Decision**: Convert to pnpm monorepo with Harness architecture:
- `shared/` — all cross-platform logic (types, constants, validators, utils, api, hooks, messages)
- `apps/web/` — Next.js web app only
- `packages/ui/` — shared UI components
- Full Harness skeleton: scripts/ + tests/ + .github/workflows/ + docs/

**Consequence**: Future platforms (weapp, app, desktop) can reuse shared/ without duplication. Bilingual support (zh-CN + en) built in from day one.

## 2026-06-02: Bilingual via next-intl

**Context**: All user-facing text was hardcoded in English.

**Decision**: Use next-intl for i18n with `[locale]` routing. Translation files in `shared/messages/{locale}.json`. Default: zh-CN. Language switcher in top-right corner.

**Consequence**: Every new page/component must use `useTranslations()` or `getTranslations()` instead of hardcoded strings.

## 2026-06-04: Convert to Generic SaaS Starter Template

**Context**: PostForge-specific content repurposing code (platforms, tones, lengths, generation) was coupled to the landing page and shared layer.

**Decision**: Strip PostForge-specific logic and replace with:
- Generic types (User, Session, ApiResponse, PaginatedResponse)
- Generic validators (email, password, URL, signup/login input)
- Generic HTTP client (ApiClient class)
- Generic React hooks (useCopyToClipboard, useDebounce, useLocalStorage, useLocale)
- Generic SaaS landing page content (shared/messages/ and apps/web/messages/)

**Consequence**: The project is now a clean starter template for any SaaS product. To build PostForge again, add business logic on top of this foundation.