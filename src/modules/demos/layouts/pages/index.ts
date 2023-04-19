import { lazy } from 'react';

const loadPageLayoutPage = () => import('./PageLayoutPage');
export const PageLayoutPage = lazy(loadPageLayoutPage);

const loadCenterPageLayoutPage = () => import('./CenterPageLayoutPage');
export const CenterPageLayoutPage = lazy(loadCenterPageLayoutPage);

const loadScrollPageLayoutPage = () => import('./ScrollPageLayoutPage');
export const ScrollPageLayoutPage = lazy(loadScrollPageLayoutPage);

const loadPaperPageLayoutPage = () => import('./PaperPageLayoutPage');
export const PaperPageLayoutPage = lazy(loadPaperPageLayoutPage);

const loadTabsPaperPageLayoutPage = () => import('./TabsPaperPageLayoutPage');
export const TabsPaperPageLayoutPage = lazy(loadTabsPaperPageLayoutPage);
