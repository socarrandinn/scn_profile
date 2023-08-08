import { lazy } from 'react';

const loadLogisticsList = () => import('modules/store/provider/logistics/pages/LogisticsList');
export const LogisticsList = lazy(loadLogisticsList);

const loadLogisticsDetail = () => import('modules/store/provider/logistics/containers/LogisticDetailContainer');
export const LogisticsDetail = lazy(loadLogisticsDetail);
