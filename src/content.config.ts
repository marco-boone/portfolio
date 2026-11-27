import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One .mdx file per project page in src/content/projects/.
// The filename becomes the URL: ooo-cpu.mdx -> /projects/ooo-cpu
const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    // Optional facts shown as one plain line under the tagline.
    role: z.string().optional(),
    team: z.string().optional(),
    timeline: z.string().optional(),
    // Repo URL, or "private" to say the code is private.
    github: z.union([z.literal("private"), z.string().url()]).optional(),
  }),
});

export const collections = { projects };
