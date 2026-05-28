import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      description_es: z.string().optional(),
      cover: image().optional(),
      demo: z.string().url().optional(),
      code: z.string().url().optional(),
      order: z.number().default(0),
      featured: z.boolean().default(true),
    }),
});

export const collections = { projects };
