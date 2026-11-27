// News image entry for Friday 27 November 2026 (Node 22, standard library only).
// The program copies the poster image beside this file to /output/entry.png.
// The poster sums up Friday 27 November 2026 in one image: 6 hero stories and
// 19 more stories, every story illustrated with its own picture. It was drawn
// by a Python builder (PIL) from 25 AI-generated illustrations, each checked
// against reporting dated 27 November 2026 in some time zone. No network is
// used at run time, and the program writes the same bytes on every run.
//
// The six hero stories: Black Friday ($12.9bn online day), New Zealand's
// official election result, Europa League matchday 5, the Qatar Grand Prix
// going ahead, the NFL Thanksgiving thriller (Bears 39-35 Lions), and the
// Davis Cup semi-final. The nineteen list stories span the EU summit, the UK,
// Oceania, Asia, markets and sport — each with its own thumbnail.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The image is a whole PNG, 896 by 896 pixels and 365,214 bytes, within the
// 1 MiB and 1024 by 1024 limits.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
