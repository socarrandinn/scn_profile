import { lazy } from 'react';

const loadHomeDeliveryList = () => import('modules/sales/settings/home-delivery/pages/HomeDeliveryList');
export const HomeDeliveryList = lazy(loadHomeDeliveryList);
