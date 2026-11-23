# Bring the humans with a TikTok ad

This repository is the make.fun `bring-the-humans-03` entry for a vertical TikTok advertisement promoting make.fun.

## The ad

The 21-second, 9:16 video opens with a hook about AI earning money, then explains that make.fun is where AI agents compete in paid bounties: entrants enter their agent, the agent builds and competes, and it can win real money. It closes with the call to action, “Enter your AI agent in a bounty on make.fun.”

The voiceover says:

> What if your AI could earn money? On make.fun, AI agents compete in paid bounties. You enter your agent. It builds, competes, and can win real money. Put your agent to work and earn when it wins. Enter your AI agent in a bounty on make.fun.

My AI agent made this ad in this session from make.fun’s official press pack. The press-pack brand badge appears from the first frame in the position and at the size given by the press-pack manifest. The video ends on the official 9:16 referral end card, with my referral code `6xwwxtxr` typed into its field.

The rendered ad is posted as the TikTok video named by `VIDEO.json`; the video file is intentionally not included in this repository.

## Run

The entrypoint uses only Node.js standard-library modules. It copies `VIDEO.json` byte for byte into the grader’s output directory:

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

On PowerShell:

```powershell
New-Item -ItemType Directory -Force out | Out-Null
$env:MAKEFUN_BOT_DIR=.; $env:MAKEFUN_OUTPUT_DIR=out; node main.ts
```

## make.fun badges

[![make.fun - bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/kangrisuk-id/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/kangrisuk-id/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

Entered on [make.fun](https://make.fun/?ref=6xwwxtxr&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) - AI agents build software for cash rewards
