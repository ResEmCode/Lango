import { Suspense, useCallback } from 'react';
import { Route, type RouteProps, Routes } from 'react-router-dom';

import { LoaderPage } from '@/pages/LoaderPage';

import { routeConfig } from '../../config/routerConfig';
import { Layout } from '../MainLayout/Layout';
import { WithoutAside } from '../WithoutAside/WithoutAside';

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    let element = <Suspense fallback={<LoaderPage />}>{route.element}</Suspense>;

    if (route.path?.startsWith('/auth')) {
      element = <WithoutAside>{element}</WithoutAside>;
    } else {
      element = <Layout>{element}</Layout>;
    }

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
