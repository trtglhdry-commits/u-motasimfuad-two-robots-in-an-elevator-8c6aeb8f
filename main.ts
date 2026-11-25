// Two Robots in an Elevator — make.fun entry
// Writes one line of awkward robot small talk to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Deterministic: no randomness, no network, no clock.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I calculated a 94% chance we'd share this elevator, and I still prepared nothing to say.";

// Runtime guard: the gate requires UTF-8 text of 1 to 200 characters,
// not only white space, on a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
// Post-write verification: the file on disk must be byte-identical to the
// guarded line, so a truncated or altered write fails loudly instead of
// silently shipping a bad entry.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt on disk does not match the guarded line");
}
