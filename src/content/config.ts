import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().default('Julian Krzysiak'),
    description: z.string(),
    date: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).optional(),
  }),
});

const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.string().transform((str) => new Date(str)),
    category: z.string(),
    rating: z.number(),
    link: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  reviews: reviewsCollection,
};
