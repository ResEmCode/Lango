import clsx from "clsx";

import styles from "./Spinner.module.scss";

type SpinnerSizes = "16" | "24" | "32" | "48" | "64" | "128";

export interface SpinnerProps {
  size?: SpinnerSizes;
  border?: number;
}

export const Spinner = ({ size = "32", border = 2 }: SpinnerProps) => {
  const sizeClass = `size_${size}`;

  return (
    <div
      style={{ borderWidth: `${border}px` }}
      className={clsx(styles.spinner, styles[sizeClass])}
    />
  );
};
