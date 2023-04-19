import { lazy } from 'react';

const loadPageLayoutPage = () => import('./PageLayoutPage');
export const PageLayoutPage = lazy(loadPageLayoutPage);

const loadCenterPageLayoutPage = () => import('./CenterPageLayoutPage');
export const CenterPageLayoutPage = lazy(loadCenterPageLayoutPage);

const loadPaperPageLayoutPage = () => import('./PaperPageLayoutPage');
export const PaperPageLayoutPage = lazy(loadPaperPageLayoutPage);
