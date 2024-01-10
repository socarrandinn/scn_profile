import { lazy } from 'react';

const loadOrderStatusList = () => import('modules/order-status/pages/OrderStatusList');
export const OrderStatusList = lazy(loadOrderStatusList);
