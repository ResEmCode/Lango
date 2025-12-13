import type { ReactNode } from 'react';

import { Container } from '@/shared/ui';

import styles from './WithoutAside.module.scss';

interface WithoutAsideProps {
  children: ReactNode;
}

export const WithoutAside = (props: WithoutAsideProps) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Container>{children}</Container>
    </div>
  );
};
