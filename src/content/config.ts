import { defineCollection, reference, z } from "astro:content";

const seoSchema = z.object({
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  pageType: z.enum(["website", "article"]).default("article"),
  title: z.string().optional(),
  description: z.string().optional(),
});

const blogSchema = z.object({
  title: z.string().min(2).max(1024),
  tags: z.string().array().min(1, "At least 1 tag required for a blog post."),
  image: z.string().optional(),
  // publishedAt: z.string().datetime().optional(),
  publishedAt: z.date().optional(),
  updatedAt: z.date().optional(),
  isFeatured: z.boolean().default(false),
  excerpt: z.string().optional(),
  seo: seoSchema.optional(),
});

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

const series = defineCollection({
  type: "content",
  schema: blogSchema.extend({
    tags: z.undefined(),
    isFeatured: z.undefined(),
    nextPost: reference("series").optional(),
    previousPost: reference("series").optional(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    seo: seoSchema.optional(),
  }),
});

export const collections = {
  blog,
  series,
  pages,
};
