import type { RouteProps } from 'react-router-dom';

import { AuthPage } from '@/pages/AuthPage';
import { DashboardPage } from '@/pages/MainPage';
import { AppRoutes, getRouteAuth, getRouteMain, type Routes } from '@/shared/const/router';

export const routeConfig: Record<keyof Routes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <DashboardPage />,
  },
  [AppRoutes.AUTH]: {
    path: getRouteAuth(),
    element: <AuthPage />,
  },
};
