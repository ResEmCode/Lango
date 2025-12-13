import type { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Container.module.scss';

type ContainerVariant = 'default';

interface ContainerProps {
  className?: string;
  children: ReactNode;
  variants?: ContainerVariant;
}

export const Container = (props: ContainerProps) => {
  const { children, className, variants = 'default' } = props;
  return <div className={clsx(styles.container, [styles[variants], className])}>{children}</div>;
};
