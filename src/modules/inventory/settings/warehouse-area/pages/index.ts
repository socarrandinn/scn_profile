import { lazy } from 'react';

const loadStoreAreaList = () => import('modules/inventory/settings/warehouse-area/pages/StoreAreaList');
export const StoreAreaList = lazy(loadStoreAreaList);
