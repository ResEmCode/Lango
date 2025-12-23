import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginSchema } from '@/features/auth/model/schemas/loginSchema.ts';
import type { LoginFormValues } from '@/features/auth/model/types/loginForm.ts';

export const useLoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      password: '',
      login: '',
      rememberMe: false,
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    alert(JSON.stringify(values));
  });

  useEffect(() => {
    form.setFocus('login');
  }, [form, form.setFocus]);

  return {
    form,
    onSubmit,
  };
};
