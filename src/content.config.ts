import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One .mdx file per project page in src/content/projects/.
// The filename becomes the URL: ooo-cpu.mdx -> /projects/ooo-cpu
const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { projects };
