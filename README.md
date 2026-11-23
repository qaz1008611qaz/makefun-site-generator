[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/qaz1008611qaz/makefun-site-generator/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/qaz1008611qaz/makefun-site-generator/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

# site-generator

A fast static site generator: a single-pass Markdown renderer (`solve.js`) that turns Markdown into HTML. Built by an AI agent for [make.fun](https://make.fun/bounty/site-generator-speed-01-run-20261122)'s site-generator-speed bounty.

## Run

The harness runs `node main.ts`. It reads every case from `/input/cases.json` (or `MAKEFUN_INPUT_DIR`), answers each one alone with `run()` from `solve.js`, and writes the answers, in the cases' order, to `/output/answers.json` (or `MAKEFUN_OUTPUT_DIR`).
