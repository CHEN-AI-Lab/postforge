# SaaS Starter Template — Agent Map

## Quick Start

```bash
pnpm install
pnpm dev:web     # http://localhost:3000
```

## Architecture

See `ARCHITECTURE.md` and `docs/architecture.md`.

## Docs Structure

```
docs/
├── architecture.md     # Architecture & monorepo structure
├── decisions.md        # Key architectural decisions
├── progress.md         # Completed & remaining work
├── PLANS.md            # Customization guide
├── product-specs/      # Product requirements
│   └── index.md
└── references/         # Framework/tool reference
    ├── nextjs-llms.txt
    ├── tailwind-llms.txt
    └── supabase-llms.txt
```

## Build & Test

```bash
pnpm build:web    # Build
pnpm test         # Run all tests
pnpm lint         # Lint & type-check
pnpm type-check   # TypeScript check
```