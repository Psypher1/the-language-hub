# Addding Docs

### install starlight

```sh
pnpm add @astrojs/starlight@0.32.0
```

## configure astro config

```js
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "The Language Hub Docs",
      routeBasePath: "/docs",
    }),
    tailwind(),
    icon(),
  ],
});
```

## content config

```js
import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const learCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.string().optional(),
    part: z.number().optional(),
    live: z.boolean().default(false),
  }),
});

export const collections = {
  learn: learCollection,
  docs: defineCollection({ schema: docsSchema() }),
};
```
