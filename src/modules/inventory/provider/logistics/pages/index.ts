import { lazy } from 'react';

const loadLogisticsList = () => import('modules/inventory/provider/logistics/pages/LogisticsList');
export const LogisticsList = lazy(loadLogisticsList);

const loadLogisticsDetail = () => import('modules/inventory/provider/logistics/containers/LogisticDetailContainer');
export const LogisticsDetail = lazy(loadLogisticsDetail);
