import { lazy } from 'react';

const loadSelectPage = () => import('./SelectPage');
export const SelectPage = lazy(loadSelectPage);
