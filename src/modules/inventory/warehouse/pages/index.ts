import { lazy } from 'react';

const loadStoreList = () => import('modules/inventory/warehouse/pages/StoreList');
export const StoreList = lazy(loadStoreList);

const loadCreateStore = () => import('modules/inventory/warehouse/pages/CreateStore');
export const CreateStore = lazy(loadCreateStore);

const loadDetailStore = () => import('modules/inventory/warehouse/pages/StoreDetail');
export const DetailStore = lazy(loadDetailStore);

const loadStoreGeneralPage = () => import('modules/inventory/warehouse/pages/tabs/StoreGeneralPage');
export const StoreGeneralPage = lazy(loadStoreGeneralPage);
