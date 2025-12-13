import { Page, Spinner } from '@/shared/ui';

import styles from './LoaderPage.module.scss';

export const LoaderPage = () => {
  return (
    <Page className={styles.page}>
      <Spinner size='128' border={4} />
    </Page>
  );
};
