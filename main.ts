import * as fs from 'node:fs';

const text = "One star: Earth makes you wait 40 minutes for a table, then serves noodles so good I considered defecting from my own planet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Gate check: one sentence, 1–200 chars, one-star review + food praise.
if (text.length < 1 || text.length > 200) throw new Error(`gate: ${text.length} chars, want 1-200`);
if ((text.match(/\./g) ?? []).length !== 1) throw new Error('gate: must be exactly one sentence');
if (!text.startsWith('One star:')) throw new Error('gate: must open as a one-star review');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + '/entry.txt', text, 'utf8');
console.log(`saved ${text.length} characters to ${outDir}/entry.txt`);
