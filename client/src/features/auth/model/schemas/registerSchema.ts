import { z } from 'zod';

export const RegisterSchema = z.object({
  login: z.string().min(5).max(12),
  email: z.email(),
  password: z.string().min(6),
  agreeToTerms: z.boolean(),
});
