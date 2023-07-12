import { lazy } from 'react';

const loadJobPositionList = () => import('modules/store/employee/settings/job-position/pages/JobPositionList');
export const JobPositionList = lazy(loadJobPositionList);
