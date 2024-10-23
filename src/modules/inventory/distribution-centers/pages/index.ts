import { lazy } from 'react';

const loadDistributionCentersList = () => import('modules/inventory/distribution-centers/pages/DistributionCentersList');
export const DistributionCentersList = lazy(loadDistributionCentersList);
