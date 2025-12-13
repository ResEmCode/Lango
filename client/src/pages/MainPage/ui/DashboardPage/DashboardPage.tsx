import { SECTION_TITLE_ID } from '@/shared/const/section';
import { Page } from '@/shared/ui';

import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
  return (
    <Page aria-labelledby={SECTION_TITLE_ID} tag='section' className={styles.main}>
      <div id={SECTION_TITLE_ID}>Dashboard</div>
    </Page>
  );
};

export default DashboardPage;
