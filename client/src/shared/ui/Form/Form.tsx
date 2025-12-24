import React from 'react';
import clsx from 'clsx';

import styles from './Form.module.scss';

type FormVariant = 'primary';

export interface FormProps {
  onSubmit: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: FormVariant;
}

export const Form = (props: FormProps) => {
  const { onSubmit, children, className, variant = 'primary' } = props;
  return (
    <form onSubmit={onSubmit} className={clsx(styles[variant], className)}>
      {children}
    </form>
  );
};
