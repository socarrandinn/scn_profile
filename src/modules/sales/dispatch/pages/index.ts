import { lazy } from 'react';

const loadDispatchList = () => import('modules/sales/dispatch/pages/DispatchList');
export const DispatchList = lazy(loadDispatchList);
