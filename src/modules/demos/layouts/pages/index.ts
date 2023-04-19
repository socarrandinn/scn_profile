import { lazy } from 'react';

const loadPageLayoutDemo = () => import('./PageLayoutPage');
export const PageLayoutDemo = lazy(loadPageLayoutDemo);

const loadCenterPageLayoutDemo = () => import('./CenterPageLayoutPage');
export const CenterPageLayoutDemo = lazy(loadCenterPageLayoutDemo);
