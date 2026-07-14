import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    starlight({
      title: "The Language Hub",
      description: "Your language reference book",
      customCss: ["src/styles/custom.css"],
      logo: {
        light: "public/logo-blue.svg",
        dark: "public/logo-white.svg",
      },
      disable404Route: true,
      sidebar: [
        {
          label: "Documentation",
          items: [
            "docs",
            "docs/getting-started",
            {
              label: "Contributing",
              autogenerate: { directory: "docs/contributing" },
            },
            "docs/about",
          ],
        },
      ],
      components: {
        ThemeProvider: "./src/components/starlight-theme-provider.astro",
      },
    }),
    mdx(),
  ],
});
