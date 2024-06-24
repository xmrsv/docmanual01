import { z, defineCollection } from "astro:content";

const modulosCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lastUpdate: z.date(),
	}),
});

export const collections = {
	modulos: modulosCollection,
};
