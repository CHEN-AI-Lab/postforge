#!/usr/bin/env bash
set -euo pipefail

echo "=== Project Setup ==="

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "Error: Node >= 18 required (found: $(node -v))"
  exit 1
fi

# Check pnpm
if ! command -v pnpm &> /dev/null; then
  echo "Installing pnpm..."
  npm install -g pnpm
fi

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Check .env file
if [ ! -f .env ]; then
  if [ -f .env.example ]; then
    echo "No .env found. Copying .env.example to .env..."
    cp .env.example .env
    echo "⚠️  Please edit .env with your actual API keys"
  else
    echo "⚠️  No .env.example found. Create a .env file manually."
  fi
fi

echo ""
echo "✅ Setup complete! Run: pnpm dev:web"