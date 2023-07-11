import { lazy } from 'react';

const loadLogisticsList = () => import('modules/provider/logistics/pages/LogisticsList');
export const LogisticsList = lazy(loadLogisticsList);
