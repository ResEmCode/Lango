import { DashboardIcon, ProfileIcon, ResourcesIcon, SettingsIcon } from '@/shared/assets/icons';

import type { AsideMenuItemType } from '../types/asideMenu';

export const getAsideMenuItems = (): AsideMenuItemType[] => {
  return [
    {
      path: '/',
      text: 'dashboard',
      Icon: DashboardIcon,
    },
    {
      path: '/resources',
      text: 'resources',
      Icon: ResourcesIcon,
    },
    {
      path: '/profile',
      text: 'profile',
      Icon: ProfileIcon,
    },
    {
      path: '/settings',
      text: 'settings',
      Icon: SettingsIcon,
    },
  ];
};
