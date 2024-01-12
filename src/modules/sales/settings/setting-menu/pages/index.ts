import { lazy } from 'react';

const loadOrderSettingMenu = () => import('./SalesSettingMenu');
export const OrderSettingMenu = lazy(loadOrderSettingMenu);
