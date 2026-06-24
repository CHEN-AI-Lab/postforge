# PostForge — Write Once, Publish Everywhere

AI-powered content repurposing. Turn one blog post into Twitter threads, LinkedIn posts, newsletters, and more — in seconds.

> **永久硬性规则：每个项目必须严格按 Harness 骨架 + 需求文档结构创建。详见 `CLAUDE.md`。**

## Quick Start

```bash
# Install dependencies
pnpm install

# Start the web app
pnpm dev:web     # http://localhost:3000

# Run tests
pnpm test

# Type-check
pnpm type-check
pnpm lint
```

## Architecture

See `ARCHITECTURE.md` and `docs/architecture.md` for full details.

```
postforge/
├── apps/
│   └── web/          # Next.js App Router web app
├── packages/
│   └── ui/           # Reusable UI components (Button, Card, Input, Badge)
├── shared/           # Cross-platform shared code
│   ├── types/        # TypeScript interfaces & types
│   ├── constants/    # Project config, branding, plans
│   ├── utils/        # Pure utility functions
│   ├── validators/   # Validation rules (email, password, URL, etc.)
│   ├── api/          # HTTP client wrapper
│   ├── hooks/        # React hooks (clipboard, debounce, locale, etc.)
│   └── messages/     # i18n translations (zh-CN, en)
├── tests/            # Unit & integration tests
├── scripts/          # Setup, check, deploy automation
├── docs/             # Architecture, decisions, specs, plans
└── .github/          # CI/CD workflows
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Monorepo | pnpm workspaces + Turborepo |
| Styling | Tailwind CSS |
| i18n | next-intl (zh-CN + en, cookie-only) |
| Testing | Vitest |
| CI/CD | GitHub Actions |

## Customization

To turn this template into your product:

1. **Branding**: Edit `shared/constants/index.ts` — set `PROJECT_NAME`, `PROJECT_TAGLINE`, `PROJECT_DESCRIPTION`
2. **Content**: Edit `shared/messages/{locale}.json` and `apps/web/messages/{locale}.json`
3. **Features**: Edit the `EXAMPLE_FEATURES` array in `shared/constants/index.ts`
4. **Pricing**: Edit the `EXAMPLE_PLANS` array in `shared/constants/index.ts`
5. **Auth**: Add your auth provider (Supabase, Clerk, NextAuth.js)

## Project Status

Current: Landing page with hero, demo section, features grid, and pricing cards. Bilingual (zh-CN / en). Turbo pipeline fixed.
