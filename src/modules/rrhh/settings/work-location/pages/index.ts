import { lazy } from 'react';

const loadWorkLocationList = () => import('modules/rrhh/settings/work-location/pages/WorkLocationList');
export const WorkLocationList = lazy(loadWorkLocationList);
