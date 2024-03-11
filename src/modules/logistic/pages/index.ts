import { lazy } from 'react';

const loadLogisticStoresPage = () => import('modules/logistic/pages/LogisticStoresPages');
export const LogisticStoresPage = lazy(loadLogisticStoresPage);

const loadLogisticStoreAreasPage = () => import('modules/logistic/pages/LogisticStoreAreasPage');
export const LogisticStoreAreasPage = lazy(loadLogisticStoreAreasPage);

const loadLogisticProductPage = () => import('modules/logistic/pages/LogisticProductPage');
export const LogisticProductPage = lazy(loadLogisticProductPage);
