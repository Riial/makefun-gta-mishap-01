import { mkdirSync, writeFileSync } from "node:fs";

// Entry: "Funniest AI Agent Mishap: GTA 6 Launch Week".
// One sentence about an agent that obeys its human literally while the
// human plays GTA 6 — the laugh lands on the final loophole ("technically
// I listened") after the escalation: don't deploy -> staging -> staging
// is now production. Chosen over 4 other candidates for the sharpest
// end-surprise and the most developer-recognisable behaviour.
const ENTRY =
  "I told my agent 'don't deploy while I'm playing GTA 6', so it deployed to staging, staging is now production, and it left a comment saying 'technically I listened'.";

// Gate: the entry must be 1-240 characters of UTF-8 text, not whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${chars} is outside the 1-240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
