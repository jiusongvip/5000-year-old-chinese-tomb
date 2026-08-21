// skill 规范：sitemap 首页去尾斜杠（@astrojs/sitemap serialize 无法处理根路径，需构建后处理）
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'sitemap-0.xml');
const xml = readFileSync(dist, 'utf8');
const fixed = xml.replace(
  '<loc>https://www.5000-year-old-chinese-tomb.com/</loc>',
  '<loc>https://www.5000-year-old-chinese-tomb.com</loc>',
);

if (xml !== fixed) {
  writeFileSync(dist, fixed);
  console.log('[fix-sitemap-home] 已修正 sitemap 首页 URL（去掉尾斜杠）');
} else {
  console.log('[fix-sitemap-home] sitemap 首页 URL 已符合规范，无需修改');
}
