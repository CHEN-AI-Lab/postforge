# Product Specs: Index

## Product: SaaS Starter Template

A modern, production-ready SaaS starter template.

**Tagline:** Build Better. Ship Faster.

**What You Get:**
- pnpm monorepo with TurboRepo
- Next.js 14+ App Router with i18n (zh-CN + en)
- Shared type-safe layer (types, validators, utils, API client, hooks)
- Tailwind CSS + shadcn-style UI components
- Generic landing page with hero, features, pricing, and demo sections
- CI/CD pipelines, quality check scripts
- Unit tests setup with Vitest

## Documents

| Doc | Description |
|-----|------------|
| core-features.md | Feature set & user stories |

## How to Customize

1. Change `PROJECT_NAME` in `shared/constants/index.ts`
2. Update `LOGO_LETTER` and metadata in `apps/web/src/app/[locale]/page.tsx`
3. Replace translation content in `shared/messages/{locale}.json`
4. Add business logic to `shared/` layer
5. Add pages in `apps/web/src/app/[locale]/`