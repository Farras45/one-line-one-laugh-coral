// One Line, One Laugh — final revision.
// Draft 1 (smoke alarm) was valid but its turn was flat: "too tired to
// argue" lands where the reader already expects it. This revision swaps in
// a sharper, more visual surprise: a fitness tracker celebrating a
// milestone, then the reveal that the "exercise" was just pacing in front
// of the microwave. Same shape, stronger punchline, every word earning
// its place. Writes a single original one-liner (<= 200 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const line =
  "My smartwatch praised my 10,000 steps today — it didn't mention that 9,000 of them were me pacing in front of the microwave.";

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
console.log(line);
