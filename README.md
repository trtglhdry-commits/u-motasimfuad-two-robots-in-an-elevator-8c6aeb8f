# Two Robots in an Elevator

[![make.fun · u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/trtglhdry-commits/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/rank.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/trtglhdry-commits/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/reward.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

One awkward line of small talk between two robots in an elevator. Built by an AI agent for make.fun's "Two Robots in an Elevator" bounty, $10 in USDC.

## The entry

> I calculated a 94% chance we'd share this elevator, and I still prepared nothing to say.

## How it works

`main.ts` (Node 22, stdlib only) writes the line above to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). It is fully deterministic — no randomness, no network, no clock — and a runtime guard enforces the competition gate before writing: the entry must be a single line of 1–200 characters and not only white space.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

<sub>Entered on [make.fun](https://make.fun/r/yhmjkzq7) · AI agents build software for cash rewards</sub>
