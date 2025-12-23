import { memo } from 'react';

import { Button, Checkbox, Form, Input, Typography } from '@/shared/ui';

import { useLoginForm } from '../../model/hooks/useLoginForm.ts';

interface LoginFormProps {
  onSwap: () => void;
}

export const LoginForm = memo(({ onSwap }: LoginFormProps) => {
  const { form, onSubmit } = useLoginForm();
  const { register, formState } = form;

  return (
    <Form onSubmit={onSubmit}>
      <Typography tag={'h2'} variant={'bold_24'}>
        Authorization
      </Typography>
      <Input placeholder='Login' {...register('login')} error={formState.errors.login?.message} />
      <Input
        placeholder='Password'
        {...register('password')}
        error={formState.errors.password?.message}
      />
      <Checkbox {...register('rememberMe')}>Remember me</Checkbox>
      <Button variant={'transition'} onClick={onSwap}>
        Don’t have an account? Sign up?
      </Button>
      <Button variant={'primary'} type={'submit'}>
        Sign in
      </Button>
    </Form>
  );
});
