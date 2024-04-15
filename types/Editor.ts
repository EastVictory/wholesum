import { z } from "zod";

export const EditorDetailsSchema = z.object({
  title: z.string(),
  category: z.string(),
  label: z.string(),
  duration: z.number(),
  break: z.number(),
});

export type EditorDetailsType = z.infer<typeof EditorDetailsSchema>;
