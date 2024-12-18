import { z } from "zod";
import { slugify } from "../util/slugify";

export const StackCategory = z.enum([
  "Frontend",
  "Backend",
  "Blockchain",
  "CI/CD",
  "Deployment",
  "Datastore",
]);
export type StackCategory = z.infer<typeof StackCategory>;

const ProjectInputSchema = z.object({
  title: z.string(),
  description: z.string(),
  stack: z.map(StackCategory, z.array(z.string())), // category: value
  repo: z.string().url().includes("github.com").endsWith(".git"),
  img: z.string().startsWith("/images/").endsWith(".png").nullish(),
  site: z.string().url().nullish(),
  diagram: z.string().nullish(),
});
export type ProjectInput = z.infer<typeof ProjectInputSchema>;

export const Project = ProjectInputSchema.transform((projInput, _ctx) => ({
  ...projInput,
  slug: slugify(projInput.title),
}));
export type Project = z.infer<typeof Project>;
