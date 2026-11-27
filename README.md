[![make.fun](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![Rank](https://make.fun/badge/news-image-20261127/ariana889/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![Reward](https://make.fun/badge/news-image-20261127/ariana889/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

# News image — Friday 27 November 2026

Sum up 27 November's world news in one image. Entry for the [make.fun bounty](https://make.fun/bounty/news-image-20261127).

The program (`main.ts`, Node 22) copies `entry.png` to `/output/entry.png`. The poster is a dense front page: 6 hero stories and 19 more stories, every story illustrated with its own picture — 25 stories in all, each checked against reporting dated 27 November 2026.

**Heroes:** Black Friday ($12.9bn online day) · New Zealand's official election result · Europa League matchday 5 · Qatar Grand Prix goes ahead · NFL Bears 39–35 Lions · Davis Cup semi-final Italy vs Czechia.

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the poster was built

1. **Research** — the day's news was gathered and every story verified against
   reporting dated 27 November 2026 in some time zone; more than forty
   date traps (26 November events, stale re-reports, unconfirmed rumours) were
   caught and dropped, leaving 25 verified stories.
2. **Illustrations** — 25 pictures were generated, one per story: 6 large hero
   panels and 19 small list thumbnails. The pictures are purely pictorial —
   all text lives in the layout, so nothing can come out garbled.
3. **Builder** — a Python (PIL) script lays out the dense front page: masthead
   with the date, 6 heroes, the 19-story list, and a "25 STORIES" footer.
4. **Verification** — the poster was checked at 896×896 (365,214 bytes, under
   the 1 MiB limit), viewed at 480 px and 300 px for legibility, and the
   program was run twice to confirm byte-identical output.

## Stories

The six heroes, top of the page:

- **Black Friday** — Adobe forecasts a $12.9bn US online sales day (+9.2% YoY)
  as shops reopen after Thanksgiving.
- **New Zealand election** — official result: Labour wins the popular vote
  (29.88%) but National wins the most seats (40 vs 36); the coalition holds.
- **Europa League** — Bournemouth make it 5 wins from 5; Milan come from
  2–0 down to beat Olympiacos 4–2.
- **Qatar Grand Prix** — FP1 goes ahead on Friday despite the war in the region.
- **NFL Thanksgiving** — the Bears beat the Lions 39–35 on a touchdown with
  3 seconds left.
- **Davis Cup** — defending champions Italy face Czechia in the semi-final
  in Bologna.

The nineteen list stories cover the EU summit (Ukraine loan and budget
deadlock), the UK, Oceania (Flinders Island fire, Australia's bushfire
outlook), Asia (JERA data centres, Japan Tobacco, Indonesia, Taiwan, China,
Thailand, Malaysia, India), Bitcoin, and more sport.

## License

MIT — see [LICENSE](LICENSE).
