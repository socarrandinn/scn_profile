import { lazy } from 'react';

const loadOrderSettingMenu = () => import('./OrderSettingMenu');
export const OrderSettingMenu = lazy(loadOrderSettingMenu);
