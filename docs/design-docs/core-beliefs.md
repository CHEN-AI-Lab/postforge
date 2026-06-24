# Design Docs: Core Beliefs

These are the immutable principles that guide every decision.

## 1. Documents Are Source of Truth

- All knowledge lives in `docs/`. Not in Slack, Notion, or anyone's head.
- If an agent can't read it, it doesn't exist.
- Docs are version-controlled alongside code — they drift together or not at all.

## 2. AGENTS.md Is a Map, Not an Encyclopedia

- Keep AGENTS.md around 100 lines.
- It points to deeper docs — it doesn't contain them.
- This enables "progressive disclosure": agents start small and dive deeper as needed.

## 3. Constrain Instead of Instruct

- Don't tell agents "please don't do X". Make X impossible.
- Use TypeScript strict mode, ESLint custom rules, CI checks.
- Better to have a compiler error than a 10-line instruction that might be ignored.

## 4. First Make It Readable

- Agents can only use what they can see.
- Every feature must be verifiable: DOM snapshot, log query, API response.
- UI must be inspectable via DevTools. Logs must be structured. Errors must be grep-able.

## 5. Fast Feedback > Perfect Instructions

- Short PR lifecycles. Fix forward.
- Low cost of error correction vs high cost of waiting.
- Test flakiness → re-run, don't block.

## 6. Human Taste, Agent Execution

- Humans decide direction and constraints.
- Agents write all code.
- When something's wrong, the fix is to add a constraint, not to "try harder."

## 7. Taste Decays → Encode It

- When a human fixes something an agent did wrong, encode the fix as:
  - A lint rule
  - A doc update
  - A test
- If it's not encoded, it will be repeated.