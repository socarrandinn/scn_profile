import { lazy } from 'react';

const StorePickupContent = () => import('modules/sales/settings/warehouse-pickup/pages/StorePickupContent');
export const StorePickupPage = lazy(StorePickupContent);
