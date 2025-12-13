import { memo } from 'react';
import { useIntl } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { Typography } from '@/shared/ui';

import type { AsideMenuItemType } from '../../model/types/asideMenu';

import styles from './AsideMenuItem.module.scss';

interface AsideMenuItemProps extends AsideMenuItemType {
  className?: string;
}

export const AsideMenuItem = memo((props: AsideMenuItemProps) => {
  const { Icon, path, text, className } = props;
  const pathname = useLocation().pathname;
  const { formatMessage } = useIntl();

  return (
    <li className={className}>
      <Link
        to={path}
        className={clsx(styles.link, {
          [styles.active]: pathname === path,
        })}
      >
        <Icon />
        <Typography tag='p' variant='medium_16' type={path === pathname ? 'accent' : 'text'}>
          {formatMessage({ id: `navbar.${text}` })}
        </Typography>
      </Link>
    </li>
  );
});
