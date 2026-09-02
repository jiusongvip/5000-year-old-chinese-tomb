// skill 规范：sitemap 首页去尾斜杠 + 生成根级 sitemap.xml
// @astrojs/sitemap 只生成 sitemap-index.xml + sitemap-0.xml，但搜索引擎与 SEO 工具默认请求 /sitemap.xml。
// 构建后处理：1) 修正 sitemap-0.xml 首页 URL 尾斜杠；2) 由 sitemap-0.xml 生成扁平化 /sitemap.xml。
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sitemap0 = join(root, 'dist', 'sitemap-0.xml');
const sitemapRoot = join(root, 'dist', 'sitemap.xml');

const xml = readFileSync(sitemap0, 'utf8');
const fixed = xml.replace(
  '<loc>https://www.5000-year-old-chinese-tomb.com/</loc>',
  '<loc>https://www.5000-year-old-chinese-tomb.com</loc>',
);

if (xml !== fixed) {
  writeFileSync(sitemap0, fixed);
  console.log('[fix-sitemap-home] 已修正 sitemap 首页 URL（去掉尾斜杠）');
} else {
  console.log('[fix-sitemap-home] sitemap 首页 URL 已符合规范，无需修改');
}

// 从 sitemap-0.xml 提取所有 URL，生成根级 sitemap.xml
const urlBlocks = [...fixed.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
const urls = urlBlocks
  .map((block) => {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1] ?? '';
    const lastmod = (block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? '').slice(0, 10);
    if (!loc) return null;
    const isRoot = new URL(loc).pathname.replace(/\/$/, '') === '';
    return { loc, lastmod, priority: isRoot ? '1.0' : '0.8', changefreq: isRoot ? 'weekly' : 'monthly' };
  })
  .filter(Boolean);

if (urls.length === 0) {
  console.error('[fix-sitemap-home] sitemap-0.xml 中没有找到 URL，未生成 sitemap.xml');
  process.exit(1);
}

const urlset = urls
  .map(
    (u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n    <changefreq>${u.changefreq}</changefreq>\n  </url>`,
  )
  .join('\n');
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;
writeFileSync(sitemapRoot, sitemapXml);
console.log(`[fix-sitemap-home] 已生成 /sitemap.xml（${urls.length} 个 URL）`);
