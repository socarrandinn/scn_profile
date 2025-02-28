import { lazy } from 'react';

const loadHomeDeliverySettings = () => import('modules/sales/settings/home-delivery/pages/HomeDeliverySettings');
export const HomeDeliverySettings = lazy(loadHomeDeliverySettings);

const loadHomeDeliveryList = () => import('modules/sales/settings/home-delivery/pages/LocationsList');
export const LocationsList = lazy(loadHomeDeliveryList);
