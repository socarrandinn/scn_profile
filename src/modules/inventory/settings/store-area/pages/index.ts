import { lazy } from 'react';

const loadStoreAreaList = () => import('modules/inventory/settings/store-area/pages/StoreAreaList');
export const StoreAreaList = lazy(loadStoreAreaList);
