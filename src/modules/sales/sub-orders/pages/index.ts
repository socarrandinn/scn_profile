import { lazy } from 'react';

const loadSubOrderList = () => import('modules/sales/sub-orders/pages/SubOrderList');
export const SubOrderList = lazy(loadSubOrderList);

/*
const loadPaidOrderDetails = () => import('modules/sales/paid-order/pages/PaidOrderDetails');
export const PaidOrderDetails = lazy(loadPaidOrderDetails); */
