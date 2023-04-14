import { RouteConfig } from '@dfl/react-security';
import { lazy } from 'react';

const loadMainApp = () => import('routes/MainApp');
export const MainApp = lazy(loadMainApp);

const loadAuthApp = () => import('routes/AuthApp');
export const AuthApp = lazy(loadAuthApp);

export const routes: RouteConfig = {
  Auth: {
    path: '/auth/*',
    onlyAnonymous: true,
    component: AuthApp,
  },
  MainLayout: {
    path: '*',
    authenticated: true,
    component: MainApp,
  },
};
