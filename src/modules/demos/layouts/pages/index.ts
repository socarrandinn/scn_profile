import { lazy } from 'react';

const loadAuthLayoutDemo = () => import('./AuthLayoutPage');
export const AuthLayoutDemo = lazy(loadAuthLayoutDemo);
