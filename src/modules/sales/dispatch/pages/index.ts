import { lazy } from 'react';

const loadDispatchList = () => import('modules/sales/dispatch/pages/DispatchList');
export const DispatchList = lazy(loadDispatchList);

const loadDispatchDetails = () => import('modules/sales/dispatch/pages/DispatchDetails');
export const DispatchDetails = lazy(loadDispatchDetails);
