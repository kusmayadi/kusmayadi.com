import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const projects = defineCollection({
  loader: file("src/data/projects.json", {
    parser: (text) => JSON.parse(text).projects,
  }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    year: z.string(),
    website: z
      .object({
        title: z.string(),
        url: z.string(),
      })
      .optional(),
    description: z.array(z.string()),
    techStack: z.array(z.string()),
  }),
});

const techStacks = defineCollection({
  loader: file("src/data/tech-stacks.json", {
    parser: (text) => JSON.parse(text).stacks,
  }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
    url: z.string(),
  }),
});

export const collections = { projects, techStacks };
