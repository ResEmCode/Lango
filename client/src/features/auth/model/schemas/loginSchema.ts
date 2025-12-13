import { z } from 'zod';

export const LoginSchema = z.object({
  login: z.string().min(5).max(12),
  password: z.string().min(6),
  rememberMe: z.boolean(''),
});
