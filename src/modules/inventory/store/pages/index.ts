import { lazy } from 'react';

const loadStoreList = () => import('modules/inventory/store/pages/StoreList');
export const StoreList = lazy(loadStoreList);

const loadCreateStore = () => import('modules/inventory/store/pages/CreateStore');
export const CreateStore = lazy(loadCreateStore);

const loadDetailStore = () => import('modules/inventory/store/pages/StoreDetail');
export const DetailStore = lazy(loadDetailStore);

const loadStoreGeneralPage = () => import('modules/inventory/store/pages/tabs/StoreGeneralPage');
export const StoreGeneralPage = lazy(loadStoreGeneralPage);
