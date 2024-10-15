import { lazy } from 'react';

const loadPaidOrderList = () => import('modules/sales/paid-order/pages/PaidOrderList');
export const PaidOrderList = lazy(loadPaidOrderList);
