import { RouteConfig } from '@dfl/react-security';
import { lazy } from 'react';

const loadMainApp = () => import('routes/MainApp');
export const MainApp = lazy(loadMainApp);

const loadAuthApp = () => import('routes/AuthApp');
export const AuthApp = lazy(loadAuthApp);

const loadUserAccount = () => import('routes/UserAccount');
export const UserAccount = lazy(loadUserAccount);

export const routes: RouteConfig = {
  Auth: {
    path: '/auth/*',
    onlyAnonymous: true,
    component: AuthApp,
  },
  UserAccount: {
    path: '/user/*',
    authenticated: true,
    component: UserAccount
  },
  MainLayout: {
    path: '*',
    authenticated: true,
    redirect: '/auth/login',
    component: MainApp,
  },
};
