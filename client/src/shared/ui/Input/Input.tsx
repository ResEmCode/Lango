import { type ComponentProps, memo, useId } from 'react';
import clsx from 'clsx';

import { Typography } from '../Typography/Typography';

import styles from './Input.module.scss';

export interface InputProps extends ComponentProps<'input'> {
  label?: string;
  error?: string;
}

export const Input = memo((props: InputProps) => {
  const { className, label, error, ...rest } = props;

  const id = useId();

  return (
    <div className={clsx(styles.inputWrapper, className)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <input id={id} {...rest} className={styles.input} />

      {error && (
        <Typography tag={'p'} type={'error'} variant={'regular_14'}>
          {error}
        </Typography>
      )}
    </div>
  );
});
