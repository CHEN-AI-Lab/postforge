#!/usr/bin/env bash
set -euo pipefail

echo "=== Deploy ==="

# Run quality check first
./scripts/check.sh

# Deploy to Vercel
echo "→ Deploying to Vercel..."
vercel --prod

echo ""
echo "✅ Deployment complete!"