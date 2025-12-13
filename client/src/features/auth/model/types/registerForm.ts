import { z } from 'zod';

import type { RegisterSchema } from '@/features/auth/model/schemas/registerSchema.ts';

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
