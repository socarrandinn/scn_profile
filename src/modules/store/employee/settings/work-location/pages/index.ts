import { lazy } from 'react';

const loadWorkLocationList = () => import('modules/store/employee/settings/work-location/pages/WorkLocationList');
export const WorkLocationList = lazy(loadWorkLocationList);
