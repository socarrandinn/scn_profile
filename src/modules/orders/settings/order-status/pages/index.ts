import { lazy } from 'react';

const loadOrderStatusList = () => import('modules/orders/settings/order-status/pages/OrderStatusList');
export const OrderStatusList = lazy(loadOrderStatusList);
