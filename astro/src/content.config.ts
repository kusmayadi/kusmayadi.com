import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

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

export const collections = { projects, techStacks, experiences };
