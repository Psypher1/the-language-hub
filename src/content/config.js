// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

// 2. Define your collection(s)
const learnCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.string().optional(),
    part: z.number().optional(),
    live: z.boolean().default(false),
    family: z
      .enum([
        "Altaic",
        "Central Semitic",
        "Indo-Iranian",
        "Italic-Latin",
        "Niger-Congo",
        "Slavic",
      ])
      .optional(),
  }),
});
const languagesCollection = defineCollection({
  type: "data",
  schema: z.object({
    language: z.string(),
    family: z.enum([
      "Altaic",
      "Central Semitic",
      "Indo-Iranian",
      "Italic/Latin",
      "Niger-Congo",
      "Slavic",
    ]),
    slug: z.string(),
    available: z.boolean().default(true),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  learn: learnCollection,
  languages: languagesCollection,
  docs: defineCollection({ schema: docsSchema() }),
};
