import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Moon's long-overdue reply to everyone staring up at it, written to /output/entry.txt.
const ENTRY = "Every wish, every howl, every 3 a.m. 'I'm changing my life.' I heard them all. And yes, I'm following you home. It's not personal. It's orbital.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
