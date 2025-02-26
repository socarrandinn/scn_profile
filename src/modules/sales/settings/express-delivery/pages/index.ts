import { lazy } from 'react';

const loadExpressDeliveryList = () => import('modules/sales/settings/express-delivery/pages/ExpressDeliveryList');
export const ExpressDeliveryList = lazy(loadExpressDeliveryList);

const loadExpressDeliverySettings = () => import('modules/sales/settings/express-delivery/pages/ExpressDeliverySettings');
export const ExpressDeliverySettings = lazy(loadExpressDeliverySettings);
