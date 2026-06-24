#!/usr/bin/env bash
set -euo pipefail

echo "=== Quality Check ==="

# 1. Type check shared
echo "→ Type-checking shared..."
cd shared && npx tsc --noEmit && cd ..

# 2. Type check web app
echo "→ Type-checking web..."
cd apps/web && npx tsc --noEmit && cd ../..

# 3. Lint
echo "→ Linting..."
cd apps/web && npx next lint && cd ../..

# 4. Tests
echo "→ Running tests..."
npx vitest run

# 5. Build
echo "→ Building..."
cd apps/web && npx next build && cd ../..

echo ""
echo "✅ All checks passed!"