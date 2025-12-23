import { SECTION_TITLE_ID } from '@/shared/const/section';
import { Button, Page, Typography } from '@/shared/ui';

import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
  return (
    <Page aria-labelledby={SECTION_TITLE_ID} tag='section' className={styles.main}>
      <div></div>
      <div className={styles.block}>
        <Typography variant='bold_18' className={styles.title} tag='h4' type='accent'>
          Ежедневные задания:
        </Typography>
        <ul className={styles.list}>
          <li>1. Выучи 5 новых слов</li>
          <li>2. Пройди 3 теста</li>
          <li>3. Повтори слова из вчерашн...</li>
          <li>4. Поделись прогрессом с дру...</li>
        </ul>
        <Button variant='primary'>Перейти к заданиям</Button>
      </div>
      <div></div>
      <div className={styles.block}>
        <Typography variant='bold_18' className={styles.title} tag='h4' type='accent'>
          Список лидеров:
        </Typography>
        <ul className={styles.user_list}>
          <li className={styles.user}>
            <img
              className={styles.avatar}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJxOLfDct_vEPdS-6OsRnS-kDl_HCv5nI2A&s'
              alt=''
            />
            <Typography tag='span' variant='medium_16'>
              Mike Stupid
            </Typography>
          </li>
          <li className={styles.user}>
            <img
              className={styles.avatar}
              src='https://st3.depositphotos.com/3557671/12561/v/450/depositphotos_125614312-stock-illustration-woman-icon-cartoon-single-avatarpeaople.jpg'
              alt=''
            />
            <Typography tag='span' variant='medium_16'>
              Alice girl
            </Typography>
          </li>
          <li className={styles.user}>
            <img
              className={styles.avatar}
              src='https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg'
              alt=''
            />
            <Typography tag='span' variant='medium_16'>
              Terminato 1C
            </Typography>
          </li>
        </ul>
      </div>
      <div></div>
    </Page>
  );
};

export default DashboardPage;
