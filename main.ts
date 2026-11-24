import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Honest tab-hoarder count: dozens of tabs, specific enough to read as a
// real lived-in number rather than a round estimate. Written as bytes
// exactly, with no newline, so the gate sees digits only.
const ENTRY = "73";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
