import { lazy } from 'react';

const loadWorkLocationList = () => import('modules/store/product/settings/work-location/pages/WorkLocationList');
export const WorkLocationList = lazy(loadWorkLocationList);
