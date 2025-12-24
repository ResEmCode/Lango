import { memo } from 'react';

import { useRegisterForm } from '@/features/auth/model/hooks/useRegisterForm.ts';
import { Button, Checkbox, Form, Input, Typography } from '@/shared/ui';

interface RegisterFormProps {
  onSwap: () => void;
}

export const RegisterForm = memo(({ onSwap }: RegisterFormProps) => {
  const { form, onSubmit } = useRegisterForm();
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Form onSubmit={onSubmit}>
      <Typography tag='h2' variant='bold_24'>
        Registration
      </Typography>

      <Input
        type='email'
        placeholder='Email'
        {...register('email')}
        error={errors.email?.message}
      />

      <Input placeholder='Login' {...register('login')} error={errors.login?.message} />

      <Input
        type='password'
        placeholder='Password'
        {...register('password')}
        error={errors.password?.message}
      />

      <Checkbox {...register('agreeToTerms')} error={errors.agreeToTerms?.message}>
        I agree to the <a>Terms and Conditions</a>
      </Checkbox>

      <Button variant={'transition'} onClick={onSwap}>
        Already have an account and want to sign in?
      </Button>

      <Button variant='primary' type='submit' disabled={isSubmitting}>
        Sign up
      </Button>
    </Form>
  );
});
