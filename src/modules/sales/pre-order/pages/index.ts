import { lazy } from 'react';

const loadPreOrderList = () => import('modules/sales/pre-order/pages/PreOrderList');
export const PreOrderList = lazy(loadPreOrderList);

const loadPreOrderDetails = () => import('modules/sales/pre-order/pages/PreOrderDetails');
export const PreOrderDetails = lazy(loadPreOrderDetails);
