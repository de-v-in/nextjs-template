import { z } from 'zod';

const ProjectENVSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  /**
   * Feature flags, comma separated
   */
  NEXT_PUBLIC_NAME: z.string().default(''),
});

/**
 * Return system ENV with parsed values
 */
export const ProjectENV = ProjectENVSchema.parse(process.env);
