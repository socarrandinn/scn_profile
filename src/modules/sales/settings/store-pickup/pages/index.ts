import { lazy } from 'react';

const StorePickupContent = () => import('modules/sales/settings/store-pickup/pages/StorePickupContent');
export const StorePickupPage = lazy(StorePickupContent);
