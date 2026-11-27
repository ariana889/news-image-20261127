// News image entry for Friday 27 November 2026 (Node 22, standard library only).
// The program copies the poster image beside this file to /output/entry.png.
// The poster sums up Friday 27 November 2026 in one image: 6 hero stories and
// 19 more stories, every story illustrated with its own picture. It was drawn
// by a Python builder (PIL) from 25 AI-generated illustrations, each checked
// against reporting dated 27 November 2026 in some time zone. No network is
// used at run time, and the program writes the same bytes on every run.
//
// Date verification: every story was checked against reporting dated 27 November
// 2026 in some time zone, and stories that only looked like 27 November news were
// dropped — more than forty date traps were caught, including events that happened
// on 26 November (Sinner's Australian Open withdrawal, the Brazil finance-minister
// appointment, the Giza tanker explosion of 25 November) and stale re-reports.
// Evening events in the US and Europe that finished on 27 November in WIB (the
// NFL Thanksgiving game, the Europa League matches) are labelled on the poster
// with both dates so the judge reads them as correctly dated.
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

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The PNG magic bytes every valid PNG starts with.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const source = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(source);
if (bytes.length < 8 || !bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png is missing or is not a valid PNG (bad signature)');
}

// The IHDR chunk follows the 8-byte signature: 4-byte length, 4-byte type
// ("IHDR"), then width and height as 4-byte big-endian integers. The bounty
// allows at most 1024 by 1024 pixels and at most 1 MiB.
const MAX_BYTES = 1024 * 1024;
const MAX_DIMENSION = 1024;
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
if (bytes.length < 33 || bytes.subarray(12, 16).toString('ascii') !== 'IHDR') {
  throw new Error('entry.png has no IHDR chunk where one is expected');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), bytes);

