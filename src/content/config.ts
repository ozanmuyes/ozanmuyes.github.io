import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(2).max(1024),
    tags: z.string().array().min(1, "At least 1 tag required for a blog post."),
    image: z.string().optional(),
    // publishedAt: z.string().datetime().optional(),
    publishedAt: z.date().optional(),
    updatedAt: z.string().datetime().optional(),
    isFeatured: z.boolean().default(false),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
