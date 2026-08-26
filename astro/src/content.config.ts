import { file, glob } from "astro/loaders";
import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";

const projectCategories = defineCollection({
  loader: file("src/data/project-categories.json", {
    parser: (text) => JSON.parse(text).categories
  }),
  schema: z.object({
    id: z.string(),
    name: z.string()
  })
})

export const projectSchema = z.object({
    id: z.string(),
    category: reference("projectCategories"),
    name: z.string(),
    slug: z.string(),
    year: z.string(),
    website: z
      .object({
        title: z.string(),
        url: z.string(),
        active: z.boolean().optional().default(true),
      })
      .optional(),
    image: z.string().optional().nullable(),
    techStacks: z.array(z.string()),
    pubDate: z.coerce.date(),
    summary: z.string(),
  })

const projects = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/data/projects"}),
  schema: projectSchema,
});

const techStacks = defineCollection({
  loader: file("src/data/tech-stacks.json", {
    parser: (text) => JSON.parse(text).stacks,
  }),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    techStacks: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        icon: z.string().nullable(),
        url: z.string(),
      }),
    ),
  }),
});

const experiences = defineCollection({
  loader: file("src/data/experiences.json", {
    parser: (text) => JSON.parse(text).experiences,
  }),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    company: z.string(),
    location: z.string(),
    date: z.string(),
    jobDescription: z.array(z.string()).nullable(),
    tools: z.string().nullable(),
  }),
});

export type Project = z.infer<typeof projectSchema>
export const collections = { projectCategories, projects, techStacks, experiences };
