import { z } from 'zod';

import { LoginSchema } from '@/features/auth/model/schemas/loginSchema.ts';

export type LoginFormValues = z.infer<typeof LoginSchema>;
