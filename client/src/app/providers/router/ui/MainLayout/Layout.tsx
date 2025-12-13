import type { ReactNode } from 'react';

import { Container } from '@/shared/ui';
import { AsideMenu } from '@/widgets/AsideMenu';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <AsideMenu />
      <Container>{children}</Container>
    </div>
  );
};
