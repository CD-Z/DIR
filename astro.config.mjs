import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://cd-z.github.io/",
  base: "/DIR/",
  integrations: [sitemap()],
});
