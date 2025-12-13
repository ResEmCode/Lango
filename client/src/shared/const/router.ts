export const AppRoutes = {
  MAIN: 'MAIN',
  AUTH: 'AUTH',
} as const;

export type Routes = typeof AppRoutes;

export const getRouteMain = () => `/`;
export const getRouteAuth = () => `/auth`;
