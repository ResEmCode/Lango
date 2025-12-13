import React from 'react';
import { type FieldValues, type UseFormReturn } from 'react-hook-form';
import clsx from 'clsx';

import styles from './Form.module.scss';

type FormVariant = 'primary';

interface FormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (values: T) => void;
  children: React.ReactNode;
  className?: string;
  variant?: FormVariant;
}

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
  variant = 'primary',
}: FormProps<T>) => {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={clsx(styles[variant], className)}>
      {children}
    </form>
  );
};
