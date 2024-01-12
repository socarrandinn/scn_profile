import { lazy } from 'react';

const loadOrderStatusList = () => import('modules/sales/settings/order-status/pages/OrderStatusList');
export const OrderStatusList = lazy(loadOrderStatusList);
