import { type InputHTMLAttributes, memo, useId } from 'react';
import clsx from 'clsx';

import { Typography } from '../Typography/Typography';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = memo((props: InputProps) => {
  const { className, label, error, ...rest } = props;

  const id = useId();

  return (
    <div className={clsx(styles.input_wrapper, className)}>
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
