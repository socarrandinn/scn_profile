import { lazy } from 'react';

const loadStoreList = () => import('modules/store/store/pages/StoreList');
export const StoreList = lazy(loadStoreList);

const loadCreateStore = () => import('modules/store/store/pages/CreateStore');
export const CreateStore = lazy(loadCreateStore);

const loadDetailStore = () => import('modules/store/store/pages/StoreDetail');
export const DetailStore = lazy(loadDetailStore);
