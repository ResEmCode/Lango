import type { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '12' | '16' | '32';

export interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  max?: boolean;
  gap?: FlexGap;
}

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  column: styles.directionRow,
  row: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  '4': styles.gap4,
  '8': styles.gap8,
  '12': styles.gap12,
  '16': styles.gap16,
  '32': styles.gap32,
};

export const Flex = (props: FlexProps) => {
  const {
    children,
    className,
    align = 'start',
    direction = 'row',
    justify = 'start',
    max = false,
    gap,
  } = props;

  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    { [styles.max]: max },
    className,
  ];

  return <div className={clsx(styles.flex, ...classes)}>{children}</div>;
};
