import * as z from 'zod';

export const assetSchema = z.object({
  key: z.string(),
  name: z.string(),
  description: z.string().optional(),
});

export type Asset = z.infer<typeof assetSchema>;