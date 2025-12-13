import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Page.module.scss';

type PageTags = 'div' | 'section';

interface PageProps extends ComponentProps<'div'> {
  className?: string;
  children: ReactNode;
  tag?: PageTags;
}

export const Page = (props: PageProps) => {
  const { className, children, tag = 'div', ...otherProps } = props;

  const Tag = tag;

  return (
    <Tag className={clsx(styles.page, [className])} {...otherProps}>
      {children}
    </Tag>
  );
};
