// One Letter: Coffee or Tea
// Writes exactly one letter to /output/entry.txt: "A" for coffee.
// Nothing else: no newline, no explanation, no punctuation.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
// "A" = coffee. "B" would be tea; this entry picks coffee.
const LETTER = "A";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");
