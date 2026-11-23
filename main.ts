// Driver: the harness runs `node /bot/main.ts`. It reads every case from
// /input/cases.json (or MAKEFUN_INPUT_DIR), answers each one alone with run()
// from solve.js, and writes the answers, in the cases' order, to
// /output/answers.json (or MAKEFUN_OUTPUT_DIR). V8's incremental marking is
// turned off before solve.js is imported, so the whole build runs under it.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { setFlagsFromString } from 'node:v8';

setFlagsFromString('--no-incremental-marking');

const { run } = (await import(new URL('./solve.js', import.meta.url).href)) as {
  run: (input: unknown) => unknown;
};

const inDir = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(inDir, 'cases.json'), 'utf8')) as {
  id: string;
  input: unknown;
}[];

const answers: unknown[] = [];
for (const c of cases) answers.push(run(c.input));

writeFileSync(join(outDir, 'answers.json'), JSON.stringify(answers));
