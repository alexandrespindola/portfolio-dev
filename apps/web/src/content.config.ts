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
    cover: z.string().optional(),
    visibility: z.enum(["public", "private"]),
    liveUrl: z.url().optional(),
    repositoryUrl: z.url().optional(),
    gallery: z.array(
      z.object({
        label: z.string(),
        alt: z.string(),
        src: z.string().optional(),
      }),
    ).length(3),
  }),
});

export const collections = { caseStudies };
