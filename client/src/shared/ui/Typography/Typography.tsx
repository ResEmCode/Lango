import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Typography.module.scss';

export const TYPOGRAPHY_TEST_IDS = {
  CONTAINER: 'typography-container',
};

export type TypographyVariants =
  | 'regular_14'
  | 'regular_16'
  | 'regular_18'
  | 'regular_20'
  | 'medium_14'
  | 'medium_16'
  | 'medium_18'
  | 'medium_20'
  | 'semibold_16'
  | 'semibold_18'
  | 'semibold_20'
  | 'semibold_22'
  | 'bold_16'
  | 'bold_18'
  | 'bold_20'
  | 'bold_22'
  | 'bold_24';

export type TypographyTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p';

export type TypographyTypes = 'title' | 'text' | 'accent' | 'error';

export type TypographyProps<Tag extends TypographyTags> = ComponentProps<
  Tag extends 'span' ? 'div' : Tag
> & {
  children: ReactNode;
  tag: Tag;
  variant: TypographyVariants;
  type?: TypographyTypes;
};

export const Typography = <Tag extends TypographyTags>(props: TypographyProps<Tag>) => {
  const { variant, className, children, tag = 'div', type = 'text', ...otherProps } = props;

  const Tag = tag;

  return (
    <Tag
      data-testid={TYPOGRAPHY_TEST_IDS.CONTAINER}
      className={clsx(styles.typography, [styles[variant], styles[type], className])}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};
