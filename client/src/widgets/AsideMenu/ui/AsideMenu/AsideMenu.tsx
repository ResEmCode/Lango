import { memo, useCallback, useMemo } from 'react';
import { useIntl } from 'react-intl';
import clsx from 'clsx';

import { useLocales } from '@/app/providers/LocalesProvider';
import { useTheming } from '@/app/providers/ThemeProvider/lib/hooks/useTheming';
import { LanguageIcon, MoonIcon, SunIcon } from '@/shared/assets/icons';
import PremiumImg from '@/shared/assets/images/cat-offer.png';
import { Button, Typography } from '@/shared/ui';

import { getAsideMenuItems } from '../../model/selectors/getAsideMenuItems';
import { AsideMenuItem } from '../AsideMenuItem/AsideMenuItem';

import styles from './AsideMenu.module.scss';

interface AsideMenuProps {
  className?: string;
}

export const AsideMenu = memo((props: AsideMenuProps) => {
  const { className } = props;
  const { toggleTheme, theme } = useTheming();
  const { setLocale, locale } = useLocales();
  const asideMenuItemList = getAsideMenuItems();
  const { formatMessage } = useIntl();

  const itemsList = useMemo(
    () => asideMenuItemList?.map((item) => <AsideMenuItem key={item.path} {...item} />),
    [asideMenuItemList],
  );

  const setLocales = useCallback(() => {
    switch (locale) {
      case 'en':
        setLocale('ru');
        break;
      case 'ru':
        setLocale('en');
        break;
    }
  }, [locale]);

  //testt

  return (
    <aside className={clsx(styles.aside, [className])}>
      <div>
        <div className={styles.actions}>
          <button className={styles.btn_action} onClick={toggleTheme}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className={styles.btn_action} onClick={setLocales}>
            <LanguageIcon />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <img
              className={styles.avatar}
              src={`https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat
              -design-social-media-profiles_1281173-3806.jpg?w=360`}
              alt='avatar'
            />
            <Typography tag='h2' variant='bold_20' type='title'>
              Alex Hex
            </Typography>
            <Typography tag='h4' variant='medium_16' type='title'>
              Alex@gmail.com
            </Typography>
          </div>
          <ul className={styles.list}>{itemsList}</ul>
        </div>
      </div>
      <div className={styles.premium}>
        <img className={styles.img} src={PremiumImg} alt='premium' />
        <Typography tag='p' variant='medium_14'>
          {formatMessage(
            { id: 'navbar.image.desc' },
            {
              accent: (chunks) => (
                <Typography variant='medium_14' type='accent' tag='span'>
                  {chunks}
                </Typography>
              ),
            },
          )}
        </Typography>
        <Button variant='primary'>{formatMessage({ id: 'navbar.button.premium' })}</Button>
      </div>
    </aside>
  );
});
