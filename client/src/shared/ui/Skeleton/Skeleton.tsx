import type { CSSProperties } from 'react';
import clsx from 'clsx';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
  height?: string | number;
  width?: string | number;
  border?: string;
  className?: string;
}

export const Skeleton = ({ border, height, width, className }: SkeletonProps) => {
  const defaultStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={clsx(styles.skeleton, className)} style={defaultStyles} />;
};
