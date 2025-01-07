import { RouteConfig } from '@dfl/react-security';
import { lazy } from 'react';
import InvitationApp from './InvitationApp';

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
  InvitationLayout: {
    path: '/invitation/accept/:key',
    component: InvitationApp,
  },
  MainLayout: {
    path: '*',
    authenticated: true,
    redirect: '/auth/login',
    component: MainApp,
  },
};
