import { lazy } from 'react';

const loadHomeDeliverySettings = () => import('modules/sales/settings/home-delivery/pages/HomeDeliverySettings');
export const HomeDeliverySettings = lazy(loadHomeDeliverySettings);
