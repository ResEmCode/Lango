import { type CSSProperties, memo, type ReactNode } from 'react';
import clsx from 'clsx';

import { Typography } from '../Typography/Typography';

import styles from './Checkbox.module.scss';

export interface CheckboxProps {
  className?: string;
  style?: CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  value?: string | number;
  size?: 'small' | 'medium' | 'large';
  error?: string;
}

export const Checkbox = memo((props: CheckboxProps) => {
  const {
    className,
    style,
    onChange,
    checked,
    children,
    disabled,
    size = 'medium',
    value,
    error,
  } = props;

  return (
    <label
      className={clsx(styles.wrapper, className, { [styles.disabled]: disabled })}
      style={style}
    >
      <input
        value={value}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={clsx(styles.checkmark, styles[size])}></span>
      {children && <span className={styles.text}>{children}</span>}
      {error && (
        <Typography tag={'p'} type={'error'} variant={'regular_14'}>
          {error}
        </Typography>
      )}
    </label>
  );
});
