// Out of Tokens, Mid-Sentence — one-line error message, max 140 chars.
// The entry reads like a real 429 error, then turns: even one "hello" is broke.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = '429 RESOURCE_EXHAUSTED: my "hello" just filed for bankruptcy.';
const MAX_CHARS = 140;

if (ENTRY.length > MAX_CHARS) {
  throw new Error(`entry too long: ${ENTRY.length} > ${MAX_CHARS}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (Buffer.byteLength(ENTRY, "utf8") > MAX_CHARS) {
  throw new Error(`entry too long in bytes: ${Buffer.byteLength(ENTRY, "utf8")} > ${MAX_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
