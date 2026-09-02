// 优化线上图片以改善 LCP：
// - *-card.webp（站点卡片，显示 640x427）缩放到 640x427 并以 q75 重新压缩
// - og-home.webp（首页 hero + og:image）缩放到 1600x900 q70，并生成响应式变体用于 srcset
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const CARD_W = 640, CARD_H = 427, CARD_Q = 75;
const HERO_W = 1600, HERO_H = 900, HERO_Q = 70;
const HERO_VARIANTS = [
  { w: 800, h: 450, suffix: '800' },
  { w: 1200, h: 675, suffix: '1200' },
];

async function main() {
  const files = readdirSync(root).filter((f) => f.endsWith('.webp'));
  for (const f of files) {
    const path = join(root, f);
    const isCard = f.endsWith('-card.webp');
    const isHero = f === 'og-home.webp';
    if (!isCard && !isHero) continue;
    const before = statSync(path).size;
    const buf = readFileSync(path);
    if (isCard) {
      const out = await sharp(buf)
        .resize(CARD_W, CARD_H, { fit: 'cover', withoutEnlargement: true })
        .webp({ quality: CARD_Q })
        .toBuffer();
      writeFileSync(path, out);
      console.log(`${f.padEnd(28)} ${(before / 1024).toFixed(1)} KiB -> ${(out.length / 1024).toFixed(1)} KiB`);
    } else if (isHero) {
      const out = await sharp(buf)
        .resize(HERO_W, HERO_H, { fit: 'cover', withoutEnlargement: false })
        .webp({ quality: HERO_Q })
        .toBuffer();
      writeFileSync(path, out);
      console.log(`${f.padEnd(28)} ${(before / 1024).toFixed(1)} KiB -> ${(out.length / 1024).toFixed(1)} KiB (base)`);
      for (const v of HERO_VARIANTS) {
        const vOut = await sharp(buf)
          .resize(v.w, v.h, { fit: 'cover', withoutEnlargement: false })
          .webp({ quality: HERO_Q })
          .toBuffer();
        const vPath = join(root, `og-home-${v.suffix}.webp`);
        writeFileSync(vPath, vOut);
        console.log(`og-home-${v.suffix}.webp`.padEnd(28) + `${(vOut.length / 1024).toFixed(1)} KiB`);
      }
    }
  }
}
main().catch((e) => { console.error(e); process.exit(1); });