import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const caseStudies = defineCollection({
  loader: glob({ base: "./src/content/case-studies", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    role: z.string(),
    status: z.string(),
    period: z.string(),
    challenge: z.string(),
    solution: z.string(),
    outcomes: z.array(z.string()),
    metrics: z.array(z.string()),
    tagKeys: z.array(z.string()),
    visibility: z.enum(["public", "private"]),
    liveUrl: z.url().optional(),
    repositoryUrl: z.url().optional(),
  }),
});

export const collections = { caseStudies };
