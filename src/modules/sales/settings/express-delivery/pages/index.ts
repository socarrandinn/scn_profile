import { lazy } from 'react';

const loadExpressDeliveryList = () => import('modules/sales/settings/express-delivery/pages/ExpressDeliveryList');
export const ExpressDeliveryList = lazy(loadExpressDeliveryList);
