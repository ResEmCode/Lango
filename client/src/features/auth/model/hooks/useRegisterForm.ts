import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RegisterSchema } from '@/features/auth/model/schemas/registerSchema.ts';
import type { RegisterFormValues } from '@/features/auth/model/types/registerForm.ts';

export const useRegisterForm = () => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      login: '',
      agreeToTerms: false,
    },
  });

  useEffect(() => {
    form.setFocus('email');
  }, [form, form.setFocus]);

  const onSubmit = (values: RegisterFormValues) => {
    alert(values?.email);
  };

  return {
    form,
    onSubmit,
  };
};
