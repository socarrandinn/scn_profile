import { lazy } from 'react';

const loadWorkLocationList = () => import('modules/inventory/product/settings/work-location/pages/WorkLocationList');
export const WorkLocationList = lazy(loadWorkLocationList);
