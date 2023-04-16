import { lazy } from 'react';

const loadJobPositionList = () => import('modules/rrhh/job-position/pages/JobPositionList');
export const JobPositionList = lazy(loadJobPositionList);
