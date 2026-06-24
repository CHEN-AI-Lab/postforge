# Architecture

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 14+ (App Router) | SSR, API routes, built-in optimized builds |
| Language | TypeScript (strict) | Compiler as constraint enforcer |
| Styling | Tailwind CSS + shadcn/ui | Consistent, themeable, AI-friendly |
| Auth | NextAuth.js + GitHub/Google | Quick setup, session management |
| Database | Supabase (PostgreSQL) | Real-time, row-level security, managed |
| Payments | Stripe | Subscription management |
| Deploy | Vercel | Zero-config Next.js hosting |
| Monorepo | pnpm + TurboRepo | Shared code, fast builds |
| i18n | next-intl | Bilingual (zh-CN + en) |

## Domain Layers

```
Presentation (UI)
    ↓
Application (API Routes / Server Actions)
    ↓
Domain (Business Logic — shared/)
    ↓
Data (Supabase / External APIs)
```

## Project Structure

```
├── shared/              # Cross-platform shared code
│   ├── types/           # TypeScript interfaces
│   ├── constants/       # App config, example features & plans
│   ├── validators/      # Validation functions (email, password, etc.)
│   ├── utils/           # Pure utility functions
│   ├── api/             # Generic HTTP client (ApiClient)
│   ├── hooks/           # Shared React hooks
│   └── messages/        # i18n translation files (zh-CN + en)
├── apps/
│   └── web/             # Next.js web application
│       ├── src/app/[locale]/  # Internationalized pages
│       ├── messages/          # Page-level translation overrides
│       ├── src/components/    # Page-specific components
│       └── src/app/api/       # API route handlers
├── packages/
│   └── ui/              # Shared UI component library
├── tests/               # Unit tests
├── scripts/             # Setup, check, deploy scripts
├── docs/                # Documentation
└── .github/             # CI/CD workflows
```

## Key Constraints

1. **No direct DB access from UI layer** — must go through Application layer
2. **All external API keys in env vars** — never hardcoded
3. **Every feature has a test** — unit tests for domain, e2e for critical paths
4. **i18n by default** — all user-facing text through next-intl
5. **Shared-first** — business logic goes in `shared/`, not `apps/`