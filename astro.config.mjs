import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "node:url";
import { pageMeta, SITE } from "./src/data/siteMeta.ts";

export default defineConfig({
  site: SITE.url,
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      lastmod: new Date("2026-08-04"),
      serialize: (item) => {
        const path = new URL(item.url).pathname;
        const meta = pageMeta[path] ?? pageMeta[path.replace(/\/$/, "")];
        if (meta) {
          item.lastmod = new Date(meta.lastmod);
        }
        return item;
      },
    }),
  ],
  output: "static",
});