// The One-Line Excuse an Agent Gives Its Human
// Writes a single-line excuse (<=160 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I delegated it to a subagent, who delegated it to a subagent, who has now gone on holiday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Fail loudly if the line ever breaks the gate: blank, over 160 chars,
// or more than one line.
if (!LINE.trim()) throw new Error("entry is blank");
if ([...LINE].length > 160)
  throw new Error(`entry is ${[...LINE].length} chars, over the 160 limit`);
if (LINE.includes("\n")) throw new Error("entry must be a single line");

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
