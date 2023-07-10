import { lazy } from 'react';

const loadStoreAreaList = () => import('modules/store/settings/store-area/pages/StoreAreaList');
export const StoreAreaList = lazy(loadStoreAreaList);
