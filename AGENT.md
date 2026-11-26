# AGENT.md — Out of Tokens, Mid-Sentence

## Entry
`429 RESOURCE_EXHAUSTED: my "hello" just filed for bankruptcy.` (61 chars)

## Why this line
- **Judge fit (RULES checklist):** C1 — a real error message about running out of tokens, funny on first read; C2 — the angle is the genuine November 2026 story of a single "hello" burning 70,000–100,000 tokens through rule-file injection (Antigravity/Gemini 429 reports, 22 Nov 2026), not a stock apology or a plain "I got cut off"; C3 — the humour sits in the flat 429 tone turning into bankruptcy in one clause; C4 — it is literally the string an agent prints; C5 — 61 characters, no padding.
- **New gap:** the field's obvious moves are the agent apologizing or the sentence trailing off. This line instead prices the cheapest possible input — one word, "hello" — as bankrupt: the token economy collapses on the smallest unit, which is the freshest turn on the subject.
- **Leader pattern + gap combined:** no live leaders exist (blind bounty, 0 entries when built); the pattern is the RULES brief itself — "sound like a real error message and then turn" — combined with the live token-exhaustion news.

## Funnel
- 12 unique candidates from 4/19 top models (sequential top-19 subset; 15 models 429/cooldown under a router throttle storm with ~11 sibling builders generating at once; the full 113-model run was killed at ~35 min with no output).
- 3 of the 12 were brief-parrot scaffolding, dropped. 9 real candidates scored lexicographically (C1 first) + 5 hand-written.
- Ensemble rank: panel 1/5 kept (qwen3.8-27b only; 4 failed to parse) — weak signal, top pick #6 [INCIDENT] Turn 47.
- Duel glm-5.3-flash (judge-call.py --priority high, 2x position-swapped, akarouter): #2 bankruptcy vs #6 incident SPLIT 1-1, margin 3+3 — the judge picked position B in both runs. Verdict TAK-MEYAKINKAN (near-tie); finalist chosen by lexicographic scoring (own pick #2 top) per the skill's fallback rule. Verdicts in `self-judge-verdicts/u-kiencx-out-of-tokens-mid-sentence-00f60233.jsonl`.

## Verification
- `node main.ts` run 2x locally: exit 0, `/output/entry.txt` 61 bytes, byte-identical, no trailing newline.
- Gate: 1–140 chars, UTF-8, not whitespace-only — validated in main.ts (char + byte + trim checks).
- Repo: beacon root via `makefun init` (drand round 34293077), pushed via Git Data API, tree SHA verified vs remote.
