import type { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Button.module.scss';

type ButtonVariants = 'primary' | 'outline' | 'transition';

type ButtonPositions = 'center' | 'start' | 'end';

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  variant: ButtonVariants;
  position?: ButtonPositions;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: ReactNode;
}

export const BUTTON_TEST_IDS = {
  WRAPPER: 'button-wrapper',
  CHILDREN: 'button-children',
  LOADER: 'button-loader',
  START_ICON: 'button-start_icon',
  END_ICON: 'button-end_icon',
};

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant,
    startIcon,
    endIcon,
    loading,
    disabled,
    type = 'button',
    className,
    position = 'center',
    ...otherProps
  } = props;

  return (
    <button
      disabled={disabled}
      type={type}
      className={clsx(styles.btn, styles[variant], styles[position], className)}
      {...otherProps}
      data-testid={BUTTON_TEST_IDS.WRAPPER}
    >
      {startIcon && (
        <span data-testid={BUTTON_TEST_IDS.START_ICON} className={styles.center_icon}>
          {startIcon}
        </span>
      )}
      {!disabled && (
        <span data-testid={BUTTON_TEST_IDS.CHILDREN} className={styles.center_icon}>
          {children}
        </span>
      )}
      {disabled && (
        <span data-testid={BUTTON_TEST_IDS.LOADER} className={styles.center_icon}>
          {loading ? loading : children}
        </span>
      )}
      {endIcon && (
        <span data-testid={BUTTON_TEST_IDS.END_ICON} className={styles.center_icon}>
          {endIcon}
        </span>
      )}
    </button>
  );
};
